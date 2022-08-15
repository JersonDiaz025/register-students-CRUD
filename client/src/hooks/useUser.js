import { useState, useEffect } from 'react';
// import { postData, deleteInfo, putData } from '../utils/managerOperations';

export const serviceUser = () => {


    const [user, setUser] = useState();
    const [isLoggedIn, setisLoggedIn] = useState(null);

    // added user at localStorage
    const getUserToken = () => {
        const loggedUser = window.localStorage.getItem("loggedUser");
        if (loggedUser) {
            const getUser = JSON.parse(loggedUser);
            setUser(getUser);
            setisLoggedIn(true);
        }
    }

    const handlelogOut = () => {
        setisLoggedIn(false)
        setUser(null)
        window.localStorage.removeItem("loggedUser")
    }

    useEffect(() => {
        getUserToken()
    }, []);


    return {
        user,
        isLoggedIn,
        handlelogOut,
        getUserToken
    }
}


