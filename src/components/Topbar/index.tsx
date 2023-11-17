import Button from "@/components/common/Button/Button";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./Topbar.module.scss"
import { signIn, signOut } from "next-auth/react";

export default function TopbarComponent() {
    const {session} = useFetchSession()

  return (
    <div className={styles.authBtn}>
        {session ? (
            <>
                <img onClick={() => signOut()} className={styles.profileImage} src={session?.user.image} />
            </>
        ) : (
            <Button btnClass="btn-primary" onClick={() => signIn()} title="SIGN UP"/>
        )}
    </div>
  )
}