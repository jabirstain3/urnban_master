import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser =(email, password) =>{
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Observe auth state change
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentuser =>{
            if(currentuser){
                setUser(currentuser);
                console.log(currentuser);
            }
        });
        
        return ()=> {
            unSubscribe();
        }
    },[])
    const authInfo = { user, createUser, signInUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

/*
 * creat context
 * set provider with value
 * use the authProvider in the main.jsx file 
 * access children in the authprovider component as children in the middle of the provider
 */