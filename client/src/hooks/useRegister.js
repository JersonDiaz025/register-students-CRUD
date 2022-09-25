import { useState } from 'react';
import { useNavigate } from 'react-router';
import { postDataRegister } from "../utils/managerOperations";

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
                dispatch({
                    type: "MSG_POPUP",
                    payload: { openPopup: true, msgResponse: data }
                })
                if (data?.success) {
                    navigate("/signIn", { replace: true })
                }
                setTimeout(() => {
                    dispatch({
                        type: "MSG_POPUP",
                        payload: { openPopup: false, msgResponse: null }
                    })
                }, 3000)
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


