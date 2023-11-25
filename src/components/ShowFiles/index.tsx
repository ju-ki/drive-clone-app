import React, { useState } from 'react'
import styles from "./ShowFiles.module.scss";
import { FetchFiles } from '@/hooks/fetchFiles';
// import { FaFileAlt } from "react-icons/fa";
import { FaFolder } from "react-icons/fa";
import { useRouter } from 'next/router';
import type { FolderStructure } from '@/Interface';
import { useFetchSession } from '@/hooks/useSession';
import { BsThreeDotsVertical } from "react-icons/bs";
import { shareFiles } from '@/API/Firestore';

export default function ShowFiles({parentId}:FolderStructure) {
    
    const {session} = useFetchSession();
    const [email, setEmail] = useState("");
    const [currentFileId, setCurrentId] = useState("");
    const {fileList} = FetchFiles(parentId, session?.user.email as string);
    const router = useRouter();
    const openFile = (fileLink:string) => {
        window.open(fileLink);

    }

    const getSharedEmails = async() => {
        await shareFiles(email, currentFileId);
    }

  return (
    <>
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
                                <div className={`${styles.files}`}>
                                <FaFolder size={80} onClick={() => void router.push(`/folder?id=${file.id}`)} />
                                <p>{file.folderName}</p>
                                <div className={styles.dots}>
                                <BsThreeDotsVertical
                                    onClick={() => {
                                    (window as any).my_modal_1.showModal();
                                    setCurrentId(file.id);
                                    }}
                                    className={styles.icon}
                                    size={20}
                                />
                                </div>
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
        })}
        </div>
        <dialog id="my_modal_1" className="modal">
        <section className="modal-box">
          <input
            type="email"
            id="email"
            placeholder="Type here"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <div className="modal-action">
            <button onClick={getSharedEmails} className="btn btn-accent">
              Share
            </button>
            <button
              onClick={() => (window as any).my_modal_1.close()}
              className="btn"
            >
              Close
            </button>
          </div>
        </section>
      </dialog>
    </>
        
    
  )
}
