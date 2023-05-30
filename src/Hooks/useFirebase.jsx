import React from 'react';
import {
    getAuth,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    sendPasswordResetEmail,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
//   import initializeFirebase from "../Firebase/firebase.init"
import initializeFirebase from"../Firebase/firebase.init"

  // call back  InitializeFirebase

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [userName,setUserName] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    // Google Sign IN or Sign Up
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
    };
    const logOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            setUser({});
          })
          .catch((error) => {
            // An error happened.
            setError(error.message);
          });
      };
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            //setting the user
            setUser(user);
          } else {
            //user is not signed in
            setUser({});
          }
          setIsLoading(false);
        });
        return () => unsubscribe;
      }, [auth]);
      // Login Or Sign Up Using Email & Pass
      // Handle all input Filed funtion

      const toggleLogin = (event) => {
        setIsLogin(!event.target.checked);
      };
    // Reset Password
    const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
    };
    return {
        user,
        signInWithGoogle,
        logOut,
        userName,
        setUserName,
        handleResetPassword,
        setError,
        setUser,
        toggleLogin,
        setIsLoading,
        setName,
        setEmail,
        setPass,
        isLogin,
        isLoading,
        error,
        email,
        pass,
        name,
        admin,
        setAdmin,
        token,
        setToken,
    };
};

export default useFirebase;