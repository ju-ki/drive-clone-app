import type { ArrayType, FileType } from "@/Interface";
import { database } from "@/firebaseConfig"
import { onSnapshot, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

const files = collection(database, "files");

export const FetchFiles = (parentId: string) => {
    const [fileList, setFileList] = useState<ArrayType>([]);
    
    const getFolders = () => {
        if(parentId == null)
        {
            onSnapshot(files, (response) => {
                console.log("response");
                setFileList(response.docs.map((item) => {
                    return {...item.data(), id:item.id} as FileType
                }).filter((item: FileType) => item.parentId === "")
                );
            });
        }
        else{
            onSnapshot(files, (response) => {
                setFileList(
                    response.docs
                        .map((item) => {
                            return {...item.data(), id:item.id} as FileType
                        })
                        .filter((item: FileType) => item.parentId === parentId)
                )
            })
        }

    };

    useEffect(() => {
        getFolders()
    }, [parentId]);

    return {fileList};
}