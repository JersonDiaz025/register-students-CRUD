

export const setLocalStorage = (user) => {
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
}