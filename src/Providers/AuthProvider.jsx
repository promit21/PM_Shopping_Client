import { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log("User is the set onStateChange:", currentUser);
        setUser(currentUser);
        setLoading(false)
      });
      return () => {
        unSubscribe();
      };
    }, []);
  
    const logInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logOutUser = () =>{
      return signOut(auth)
      .then()
    };
  
    const googleLogIn = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
  
    const facebookSignIn = () => {
      setLoading(true);
      return signInWithPopup(auth, facebookAuthProvider);
    }
  
    const userInfo = {
      user,
      createUser,
      logInUser,
      logOutUser,
      googleLogIn,
      facebookSignIn,
      loading,
    };
  
    return (
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
