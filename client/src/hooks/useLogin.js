import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { postDataLogin } from '../utils/managerOperations';
import { setLocalStorage } from '../utils/generateLocalStorage';

export const managerLogin = () => {

    const navigate = useNavigate();

    const [msg, setMsg] = useState(null);
    // console.log(msg)

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (loginData.email !== '' && loginData.password !== '') {
                await postDataLogin(loginData)
                const { data } = await postDataLogin(loginData)
                setLocalStorage(data.user);
                setTimeout(() => {
                    setMsg(null)
                    data?.response === 'Welcome' ?
                        navigate("/", { replace: true })
                    :false
                }, 2000)
                setLogin({ email: '', password: '' });
            }

        } catch (error) {
            console.log(error)
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
        handleChange,
        msg
    }

}

