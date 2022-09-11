import { useState } from 'react';
import { useNavigate } from 'react-router';
import { postDataLogin } from '../utils/managerOperations';
import { setLocalStorage } from '../utils/generateLocalStorage';
import { getUserToken } from '../utils/getUserLocalStorage';

export const managerLogin = (dispatch) => {

    const navigate = useNavigate();

    const [msg, setMsg] = useState(null);

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (loginData.email !== '' && loginData.password !== '') {
                // await postDataLogin(loginData)
                const { data } = await postDataLogin(loginData);
                console.log(data)
                setMsg(data);
                if (data?.response === 'Welcome') {
                    setMsg(data)
                    setLocalStorage(data.user);
                    navigate('/', { replace: true });
                    getUserToken(dispatch);
                }
                setTimeout(() => {
                    setMsg(null)
                }, 3000)
                setLogin({ email: '', password: '' });
            }

        } catch (err) {
            console.log(err)
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
        handleLogin,
        handleChange,
        msg
    }

}

