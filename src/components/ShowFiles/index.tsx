import React from 'react'
import styles from "./ShowFiles.module.scss";
import { fetchFiles } from '@/hooks/fetchFiles';
import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";

export default function ShowFiles() {
    let {fileList} = fetchFiles();

    const openFile = (fileLink:string) => {
        window.open(fileLink);

    }

  return (
    <div className={styles.filesGrid}>
        {fileList.map((file :{id:0;imageLink:""; imageName:"";isFolder:false}) => {
        return (
            <div key={file.id}>

                <div className={`${styles.files} bg-accent`}>
                    {file.isFolder ? 
                        <>
                            <FaFolder size={80} />
                            <p>{file.folderName}</p>
                        </> :
                        <>
                            {/* <FaFileAlt size={80} onClick={() => openFile(file.imageLink)} /> */}
                            <img className={styles.imageLink} src={file.imageLink} />
                            <p>{file.imageName}</p>
                        </>
                    }
                </div>
            </div>
        )
    })}</div>
  )
}
