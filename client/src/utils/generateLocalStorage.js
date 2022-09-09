
// added user in localStorage
function setLocalStorage(user){
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
}

export {setLocalStorage}