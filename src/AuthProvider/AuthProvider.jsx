import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
   // console.log(user);
    const [loding,setLoding] = useState(true)
    const [reload,setReload] = useState(false)
    //------------createUser-------------
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //---------------sign in---------
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //-------------google user----------
    const googleUser = ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOutUser = ()=>{
        return signOut(auth)
    }
    //--------------profile update-----------
    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,{updateData})
    }

    //----------current user------------
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoding(false)
        })
        return ()=>{unsubscribe()}
    },[])
    const authInfo = {
        createUser,
        loginUser,
        googleUser,
        logOutUser,
        updateUser,
        user,
        setUser,
        loding,
        setLoding,
        reload,
        setReload
    }
    return (
        <div>
            <AuthContext value={authInfo}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;