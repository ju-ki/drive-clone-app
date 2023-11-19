import React, { ChangeEvent, useState } from 'react'
import styles from "./Upload.module.scss";
import Button from '../common/Button/Button';
import { fileUpload } from '@/API/FileUpload';
import ProgressComp from '../common/Progress';
// import { storage } from '@/firebaseConfig';


export default function UploadFiles() {
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState({});
  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress);
  };

  const uploadFolder = () => {
    console.log("clicked");
    
  }

  return (
    <div className={styles.uploadMain}>
      <Button onClick={() => setFileVisible(!isFileVisible)} title='Add a File' btnClass='btn-primary'/>
      {isFileVisible ? (
        <input onChange={(event) => uploadFile(event)} type='file' className='file-input w-full max-w-xs' />
      ) :(
        <></>
      )}
      <Button onClick={(event) => uploadFolder(event)} title='Create a Folder' btnClass='btn-primary btn-success'/>
      {progress === 0 || 100 ? <></> : <ProgressComp progress={progress} />}
    </div>
  )
}
