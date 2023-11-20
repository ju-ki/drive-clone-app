import React, { ChangeEvent, useState } from 'react'
import styles from "./Upload.module.scss";
import Button from '../common/Button/Button';
import { fileUpload } from '@/API/FileUpload';
import ProgressComp from '../common/Progress';
import { addFolder } from '@/API/Firestore';


export default function UploadFiles() {
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [file, setFile] = useState({});
  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
  };

  const uploadFolder = () => {
    console.log("clicked");
    let payload = {
      folderName:folderName,
      isFolder:true,
      fileList:[]
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
          <Button onClick={() => uploadFolder()} title='Create' btnClass='btn-primary btn-success'/>
        </>

      ) : <></>}
      {progress === 0 || 100 ? <></> : <ProgressComp progress={progress} />}
    </div>
  )
}
