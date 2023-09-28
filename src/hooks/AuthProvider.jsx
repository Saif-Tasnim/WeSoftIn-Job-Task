import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, findUser } from '../redux/features/dataSlicer';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => dispatch(addUser(data)))
    }, [])

    const findSingleUser = (id) => {
         dispatch(findUser(id));
    }

    const data = {
        findSingleUser
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;