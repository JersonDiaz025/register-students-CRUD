
// const types = {
//     authSign: 'authSignIn',
//     autLogOut: 'authLogOut',
//     // chageLogged: 'is - logged'
// }


const Reducer = (state, action) => {
    switch (action.type) {
        case "AUTH_LOGIN":
            return {
                ...state,
                user: action.payload,
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
        case "DARK_MODE":
            return {
                ...state,
                dark_mode: { activeDarkMode: !state.dark_mode.activeDarkMode }
            }
        case "MSG_POPUP":
            return {
                ...state,
                msgPopup: action.payload,
            }
        case "DATA_MODAL_EDIT":
            return {
                ...state,
                dataUserUpdate: action.payload,
            }
        //open modal for updates user dates
        case "OPEN_MODAL_UPDATE_USER":
            return {
                ...state,
                openModalUpdate: { isOpenModal: !state.openModalUpdate.isOpenModal },
            }
        case "POPUP_DELETE_USER":
            return {
                ...state,
                popupDeleteStudent: { isOpen: !state.popupDeleteStudent.isOpen, payload: action.payload },
            }
            
        default:
            return state;
    }

}

// export { types };
export default Reducer;