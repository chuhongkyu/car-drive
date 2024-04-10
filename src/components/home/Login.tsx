import { UserAuth } from "@/context/AuthContext"
import { auth } from "@/utils/firebase/firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useEffect, useState } from "react";

export default function Login() {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
        await googleSignIn();
        } catch (error) {
        console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
        await logOut();
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
        };
        checkAuthentication();
    }, [user]);

  return (
    <div className="user-container">
     {loading ? null : !user ? (
        <ul className="">
          <li onClick={handleSignIn} className="btn">
            Login
          </li>
          <li onClick={handleSignIn} className="btn">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <span className="btn" onClick={handleSignOut}>
            Sign out
          </span>
        </div>
      )}
    </div>
  )
}
