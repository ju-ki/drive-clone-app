import React from 'react'
import { useRouter } from 'next/router'
import UploadFiles from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';
import TopbarComponent from '@/components/Topbar';
import { useFetchSession } from '@/hooks/useSession';

export default function Folder() {
    const router = useRouter();
    const parentId = router?.query?.id;
    const {session} = useFetchSession();
  return (
    <div>
        <TopbarComponent />
        {session && <>
          <UploadFiles parentId={parentId as string}/>
          <ShowFiles parentId={parentId as string}/> 
        </>}
    </div>
  )
}
