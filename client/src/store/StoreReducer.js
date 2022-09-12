

// const types = {
//     authSign: 'authSignIn',
//     autLogOut: 'authLogOut',
//     // chageLogged: 'is - logged'
// }

// const initialStore = {
//         user: { user: '', isLogged: null }
//     }


const Reducer = (state, action) => {
    switch (action.type) {
        case "AUTH_LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "AUTH_LOGOUT":
            return {
                ...state,
                user: { name_user: '' , isLogged: false }
            }
        case "ACTION_NAVBAR":
            return {
                ...state,
                navbar: { openModalUser: !state.navbar.openModalUser }
            }
        case "ACTION_SIDEBAR":
            return {
                ...state,
                sidebar: { openSidebar: !state.sidebar.openSidebar }
            }
        default:
            return state;
    }

}

// export { types };
export default Reducer;