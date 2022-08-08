import { useState } from 'react';
import { useNavigate } from 'react-router';

import { postDataLogin } from '../utils/managerOperations';

export const managerDataLogin = () => {
    const navigate = useNavigate()

    const [dataLogin, setDataLogin] = useState(
        {
            email: '',
            password: ''
        }
        );

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (dataLogin.email !== '' && dataLogin.password !== '') {
            await postDataLogin(dataLogin)
                .then(data => {
                    data.data !== null
                      ? navigate("/contact", { replace: true })
                      : false;
                })
            setDataLogin({ email: '', password: '' });
            
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
        handleSubmit,
        handleChange
    };
}


