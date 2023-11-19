import React from 'react'
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from '@/hooks/fetchFiles';
import { FaFileAlt } from "react-icons/fa";

export default function ShowFiles() {
    let {fileList} = fetchFiles();

    const openFile = (fileLink:string) => {
        window.open(fileLink);

    }

  return (
    <div className={styles.filesGrid}>
        {fileList.map((file :{imageLink:""; imageName:""}) => {
        return (
            <div key={file.id}>

                <div className={`${styles.files} bg-accent`}>
                    <FaFileAlt size={80} onClick={() => openFile(file.imageLink)} />
                    <p>{file.imageName}</p>
                    {/* <img className={styles.imageLink} src={file.imageLink} /> */}
                </div>
            </div>
        )
    })}</div>
  )
}
