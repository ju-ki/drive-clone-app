import { database } from "@/firebaseConfig"
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"

const files = collection(database, "files");

export const addFiles = (imageLink:string, imageName:string, parentId:string, userEmail:string) => {
    try {
        void addDoc(files, {
            imageLink: imageLink,
            imageName: imageName,
            isFolder:false,
            parentId:parentId,
            userEmail:userEmail,
            shareTo:[]
        });
    } catch(err){
        console.log(err);
    }
}


export const addFolder = (payload:{
    folderName:string,
    isFolder:boolean,
    fileList:object,
    parentId:string,
    userEmail:string
}) => {
    try {
        void addDoc(files, {
            folderName:payload.folderName,
            isFolder:payload.isFolder,
            fileList:payload.fileList,
            parentId:payload.parentId,
            userEmail:payload.userEmail,
            shareTo:[]
        });
    } catch(err){
        console.log(err);
    }
}

export const shareFiles = async(email:string, fileId:string) => {
    const shareFilesDoc = doc(files, fileId);
    const response = await getDoc(shareFilesDoc);
    await updateDoc(shareFilesDoc, {
        shareTo:[...response.data()?.shareTo, email]
    });
}