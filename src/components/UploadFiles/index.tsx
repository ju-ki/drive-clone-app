import React, { ChangeEvent, useState } from 'react'
import styles from "./Upload.module.scss";
import Button from '../common/Button/Button';
import { fileUpload } from '@/API/FileUpload';
import ProgressComp from '../common/Progress';
import { addFolder } from '@/API/Firestore';
import type { FolderStructure } from '@/Interface';
import { useFetchSession } from '@/hooks/useSession';


export default function UploadFiles({parentId}:FolderStructure) {
  const {session} = useFetchSession();
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email);
  };

  const uploadFolder = (parentId:string) => {
    const payload = {
      folderName:folderName,
      isFolder:true,
      fileList:[],
      parentId:parentId || "",
      userEmail:session?.user.email
    }

    addFolder(payload);
    setFolderName("");
  }

  return (
    <div className={styles.uploadMain}>
      <Button onClick={() => {
        setFolderVisible(false);
        setFileVisible(!isFileVisible);
        } }
        title='Add a File' btnClass='btn-primary'
      />
      {isFileVisible ? (
        <input onChange={(event) => uploadFile(event)} type='file' className='file-input w-full max-w-xs' />
      ) :(
        <></>
      )}
      <Button onClick={() => setFolderVisible(!isFolderVisible)} title='Create a Folder' btnClass='btn-primary btn-success'/>
      {isFolderVisible ? (
        <>
          <input type="text" value={folderName} onChange={(event) => setFolderName(event.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <Button onClick={() => uploadFolder(parentId)} title='Create' btnClass='btn-primary btn-success'/>
        </>

      ) : <></>}
      {progress === 0 || 100 ? <></> : <ProgressComp progress={progress} />}
    </div>
  )
}
