import React from 'react'
import styles from "./ShowFiles.module.scss";
import { FetchFiles } from '@/hooks/fetchFiles';
// import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { useRouter } from 'next/router';
import type { FolderStructure } from '@/Interface';
import { useFetchSession } from '@/hooks/useSession';

export default function ShowFiles({parentId}:FolderStructure) {
    
    const {session} = useFetchSession();
    const {fileList} = FetchFiles(parentId, session?.user.email as string);
    const router = useRouter();
    const openFile = (fileLink:string) => {
        window.open(fileLink);

    }

  return (
    <div className={styles.filesGrid}>
        {fileList.map((file :{
            id:0;imageLink:"";
            imageName:"";
            isFolder:false;
            folderName:""
        }) => {
        return (
            <div key={file.id}>

                <div className={`${styles.files} bg-accent`}>
                    {file.isFolder ?
                        <>
                            <div className={`${styles.files}`}
                                onClick={() => void router.push(`/folder?id=${file.id}`)}
                            >
                            <FaFolder size={80} />
                            <p>{file.folderName}</p>
                            </div>
                        </> :
                        <>
                            <div className={`${styles.files}`}
                                onClick={() => openFile(file.imageLink)}
                            >
                                {/* <FaFileAlt size={80} onClick={() => openFile(file.imageLink)} /> */}
                                <img className={styles.imageLink} src={file.imageLink} />
                                <p>{file.imageName}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        )
    })}</div>
  )
}
