// import { storage, app, database } from "@/firebaseConfig"
import { storage } from "@/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { addFiles } from "./Firestore";
import type { FileType } from "@/Interface";

export const fileUpload = (file: FileType, setProgress: (progress: number) => void, parentId:string) => {
    
    const storageRef = ref(storage, `file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress)
        },
        (error) => {
            alert(error);
        },
        () => {
            void getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                addFiles(downloadURL, file.name, parentId);
            });
        }
    )
}