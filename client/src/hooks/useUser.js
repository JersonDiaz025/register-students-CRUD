import { useState, useEffect } from 'react';
import { postData, deleteInfo, putData } from '../utils/managerOperations';

export const serviceUser = () => {

    const [user, setUser] = useState();
    const [logged, setLogged] = useState(false);

    const sendToken = async(token) => {
        // await postData(token),
        // await deleteInfo(token),
        // await putData(token)
    }


    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedUser');
        if (loggedUser) {
            const getUser = JSON.parse(loggedUser);
            setUser(getUser);
            sendToken(user?.token)
            setLogged(true);
        }
    }, []);


    return {
        user,
        logged
    }
}


