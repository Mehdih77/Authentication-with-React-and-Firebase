import React, {createContext, useContext, useEffect, useState} from 'react'
import {auth} from '../server/Firebase';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
};

function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email,password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup
    };

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
