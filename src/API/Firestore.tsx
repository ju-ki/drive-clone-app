import { database } from "@/firebaseConfig"
import { collection, addDoc, onSnapshot } from "firebase/firestore"

let files = collection(database, "files");

export const addFiles = (imageLink:string, imageName:string) => {
    try {
        void addDoc(files, {
            imageLink: imageLink,
            imageName: imageName
        });
    } catch(err){
        console.log(err);
    }
}
