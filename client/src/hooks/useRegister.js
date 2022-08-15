import { useState } from 'react';
import { useNavigate } from 'react-router';
import { postDataRegister } from "../utils/managerOperations";

export const managerDataRegister = () => {
    const navigate = useNavigate();

    const [msgRegister, setMsgRegister] = useState(null);


    const [dataLogin, setDataLogin] = useState(
        {
            username: '',
            email: '',
            password: ''
        }
        );

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postDataRegister(dataLogin)
            .then(res => {
                const { data } = res;
                setMsgRegister(data)
                setTimeout(() => {
                    setMsgRegister(null)
                    data?.response === 'Successfully registered'
                    ? navigate("/signIn", { replace: true })
                    : false;
                }, 3000)
            })
        setDataLogin({ username: '', email: '', password: '' });
    }

    const handleChange = (ev) => {
        const { target } = ev;
        const { name, value } = target;
        const values = {...dataLogin, [name]: value}
        setDataLogin(values);
    };

    return {
        dataLogin,
        msgRegister,
        handleSubmit,
        handleChange
    };
}


