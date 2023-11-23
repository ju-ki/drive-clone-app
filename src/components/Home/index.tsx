import { useFetchSession } from "@/hooks/useSession";
import TopbarComponent from "@/components/Topbar";
import UploadFiles from "@/components/UploadFiles";
import ShowFiles from "../ShowFiles";

export default function HomeComponent() {
    const {session} = useFetchSession()
    console.log(session);
    
  return (
    <div>
      
      <TopbarComponent/>
      {/* ここが原因ぽい */}
      <UploadFiles parentId="" />
      <ShowFiles parentId="" />
    </div>
  )
}
