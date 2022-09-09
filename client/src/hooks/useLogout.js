import { useNavigate } from 'react-router';

export const logOutUser = (dispatch) => {

    const navigate = useNavigate();

    const handlelogOut = () => {
        window.localStorage.removeItem("loggedUser");
        dispatch({ type: "AUTH_LOGOUT" });
        navigate('/signIn', { replace: true })
    }

    return {
        handlelogOut
    }

}