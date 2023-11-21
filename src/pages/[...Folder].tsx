import React from 'react'
import { useRouter } from 'next/router'
import UploadFiles from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';

export default function Folder() {
    const router = useRouter();
    let  parentId = router?.query?.id;
  return (
    <div>
        <UploadFiles parentId={parentId}/>
        <ShowFiles parentId={parentId}/> 
    </div>
  )
}
