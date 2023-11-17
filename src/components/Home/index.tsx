import { useFetchSession } from "@/hooks/useSession";
import TopbarComponent from "@/components/Topbar";
import UploadFiles from "@/components/UploadFiles";

export default function HomeComponent() {
    const {session} = useFetchSession()
    console.log(session);
    
  return (
    <div>
      <TopbarComponent/>
      <UploadFiles/>
    </div>
  )
}
