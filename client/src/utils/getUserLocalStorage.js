
// added user at localStorage
function getUserToken(dispatch){
    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
        const getUser = JSON.parse(loggedUser);
        const { username, token, email, password } = getUser;
        dispatch({
            type: "AUTH_LOGIN",
            payload: { name_user: username, email, password, isLogged: true, token }
        })
    }
}

export { getUserToken }