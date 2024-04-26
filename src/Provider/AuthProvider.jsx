import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const emailPassCreateUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

      const emailPassLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };


      // create user using google
const googleProvider = new GoogleAuthProvider();
      const googleCreateUser = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
      // create user using GitHub
const gitHubProvider = new GithubAuthProvider();
const gitHubCreateUser = () => {
  setLoading(true);
  return signInWithPopup(auth, gitHubProvider);
};

    const updateUser = (name, photo) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };

      useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log("auth changing", currentUser);
          setUser(currentUser);
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);

      const logOut = () => {
        setLoading(true);
        signOut(auth);
      };


    const authInfo = {
        updateUser,
        emailPassCreateUser,
        emailPassLogIn,
        googleCreateUser,
        logOut,
        user,
        loading,
        gitHubCreateUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;