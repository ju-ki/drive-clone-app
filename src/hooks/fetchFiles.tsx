import { ArrayType } from "@/Interface";
import { database } from "@/firebaseConfig"
import { onSnapshot, collection } from "firebase/firestore"
import { useEffect, useState } from "react";

let files = collection(database, "files");

export const fetchFiles = () => {
    const [fileList, setFileList] = useState<ArrayType>([]);

    useEffect(() => {
        return onSnapshot(files, (response) => {
            console.log("response");

            setFileList(response.docs.map((item) => {
                return {...item.data(), id:item.id}
            }));
        });

    }, []);

    return {fileList};
}