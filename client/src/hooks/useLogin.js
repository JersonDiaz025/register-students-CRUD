import { useState } from 'react';
import { useNavigate } from 'react-router';
import { postDataLogin } from '../utils/managerOperations';
import { setLocalStorage } from '../utils/generateLocalStorage';
import { getUserToken } from '../utils/getUserLocalStorage';
import getMessagePopup from '../utils/sendMessagePopup';

export const managerLogin = (dispatch) => {

    const navigate = useNavigate();

    const [loginData, setLogin] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            if (loginData.email !== '' && loginData.password !== '') {
                const { data } = await postDataLogin(loginData);
                getMessagePopup(data, dispatch);
                if (data?.success) {
                    setLocalStorage(data.user);
                    navigate('/', { replace: true });
                    getUserToken(dispatch);
                }
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
    }
}

