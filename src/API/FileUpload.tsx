// import { storage, app, database } from "@/firebaseConfig"
import { storage } from "@/firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"

export const fileUpload = (file: any) => {
    console.log(file.name);
    
    const storageRef = ref(storage, `file/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            console.log(progress);
        },
        (error) => {
            alert(error);
        },
        () => {
            void getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log(downloadURL);
            });
        }
    )
}