import { UserAuth } from "@/context/AuthContext"
import { useEffect, useState } from "react";

export default function NavBar() {
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
    <div className="nav-container">
     {loading ? null : !user ? (
        <ul className="login-container">
          <li onClick={handleSignIn} className="google-signin-button">
            <img src="/icons/google_g.svg" alt="img" />Sign in with Google
          </li>
        </ul>
      ) : (
        <div className="user-container">
          <span className="user-name">Welcome, <b>{user.displayName}</b></span>
          <span className="signout-btn" onClick={handleSignOut}>
            Sign out
          </span>
        </div>
      )}
    </div>
  )
}
