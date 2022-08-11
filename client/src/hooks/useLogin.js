import { useState } from 'react';
import { postDataLogin } from '../utils/managerOperations';

export const managerLogin = () => {

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (loginData.email !== '' || loginData.password !=='' ) {
            await postDataLogin(loginData)
            .then(data=>console.log(data))
            setLogin({ email: '', password: '' });
        }

    }

    const handleChange = (ev) => {
        const { target } = ev;
        const { name, value } = target;
        const newValue = { ...loginData, [name]: value }
        setLogin(newValue)
    }

    return {
        login: loginData,
        handleSubmit,
        handleChange
    }

}

