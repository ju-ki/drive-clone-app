import type { ArrayType, FileType } from "@/Interface";
import { database } from "@/firebaseConfig"
import { onSnapshot, collection, query, where } from "firebase/firestore"
import { useEffect, useState } from "react";

const files = collection(database, "files");

export const FetchFiles = (parentId: string, userEmail: string) => {
    const [fileList, setFileList] = useState<ArrayType>([]);
    const getFolders = () => {
        if(userEmail)
        {

            const emailQuery = query(files, where("userEmail", "==",userEmail));
            if(!parentId)
            {
                onSnapshot(emailQuery, (response) => {
                    console.log("response");
                    setFileList(response.docs.map((item) => {
                        return {...item.data(), id:item.id} as FileType
                    }).filter((item: FileType) => item.parentId === "")
                    );
                });
            }
            else{
                onSnapshot(emailQuery, (response) => {
                    setFileList(
                        response.docs
                            .map((item) => {
                                return {...item.data(), id:item.id} as FileType
                            })
                            .filter((item: FileType) => item.parentId === parentId)
                    )
                })
            }
        }

    };

    useEffect(() => {
        getFolders()
    }, [parentId, userEmail]);

    return {fileList};
}