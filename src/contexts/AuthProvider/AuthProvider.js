import React, { createContext, useEffect, useState, } from 'react';
import { getAuth,
     createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
       onAuthStateChanged, 
       signOut,GoogleAuthProvider,
       signInWithPopup,
       updateProfile,
    } from "firebase/auth";
import app from '../../firebase/firebase.config'




export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) =>{
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logInUser = (email, password) =>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    useEffect(()=>{
        const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {

            } else {
             
            }
          });
          return () =>{
            unsubscribe();
          }
    },[]);

    const logOut = () =>{
        // localStorage.removeItem(' ');
        setLoading(true);
      return signOut(auth);
       
    };

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }


    const authInfo = {
        user, 
        createUser,
        loading, 
        logInUser, 
        logOut,
        googleSignIn,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

   
    );
};


export default AuthProvider;