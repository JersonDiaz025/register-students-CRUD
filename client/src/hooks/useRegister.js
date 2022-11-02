import { useState } from 'react';
import { useNavigate } from 'react-router';
import { postDataRegister } from "../utils/managerOperations";
import getMessagePopup from '../utils/sendMessagePopup';

export const managerDataRegister = (dispatch) => {
    const navigate = useNavigate();

    const [dataLogin, setDataLogin] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
        );

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (dataLogin.username !== '' && dataLogin.email !== '' && dataLogin.password !== '') {
                const { data } = await postDataRegister(dataLogin);
                getMessagePopup(data, dispatch);
                if (data?.success) {
                    navigate("/signIn", { replace: true })
                }
                setDataLogin({ username: '', email: '', password: '' });
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (ev) => {
        const { target } = ev;
        const { name, value } = target;
        const values = {...dataLogin, [name]: value}
        setDataLogin(values);
    };

    return {
        dataLogin,
        handleSignUp,
        handleChange
    };
}


