import { UserAuth } from "@/app/context/AuthContext"
import { useEffect, useState } from "react";
import ListData from "../ui/ListData";
import Image from "next/image";

export default function NavBar() {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          // console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
          await logOut();
        } catch (error) {
          // console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
          await new Promise((resolve) => setTimeout(resolve, 50));
          setLoading(false);
        };
        checkAuthentication();
        // console.log(user)
    }, [user]);

  return (
    <div className="nav-container">
      {loading ? null : !user ? null : <ListData userId={user?.uid}/>}
      {loading ? null : !user ? (
          <ul className="login-container">
            <li onClick={handleSignIn} className="google-signin-button">
              <Image src="/icons/google_g.svg" alt="google" width={20} height={20} /><p>Sign in with Google</p>
            </li>
          </ul>
        ) : (
          <div className="user-container">
            <span className="user-name"><p>Welcome, </p><b>{user.displayName}</b></span>
            <span className="signout-btn" onClick={handleSignOut}>
              Sign out
            </span>
          </div>
        )}
    </div>
  )
}
