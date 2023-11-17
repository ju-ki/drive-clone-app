import React, { useState } from 'react'
import styles from "./Upload.module.scss";
import Button from '../common/Button/Button';

export default function UploadFiles() {
  const [isFileVisible, setFileVisible] = useState(false);
  const [file, setFile] = useState({});
  const uploadFile = () => {
    let { files} = file;
  }

  return (
    <div className={styles.uploadMain}>
      <Button onClick={() => setFileVisible(!isFileVisible)} title='Add a File' btnClass='btn-primary'/>
      {isFileVisible ? (
        <input type='file' className='file-input w-full max-w-xs' />
      ) :(
        <></>
      )}
      <Button title='Create a Folder' btnClass='btn-primary btn-success'/>
    </div>
  )
}
