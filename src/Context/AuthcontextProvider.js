import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [id, setId] = useState(false);
    const [token, setToken] = useState("");

    const idVerification = (token) => {
        setId(token);
       
    }

    const logOut = () => {
        setToken('');
        
    }

    return <AuthContext.Provider value={
        {
            id,
            token,
           idVerification,
            logOut
        }
    }>
        {children}
    </AuthContext.Provider>
}