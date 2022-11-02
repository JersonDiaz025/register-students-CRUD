
export const initialStore = {

    user: {
        name_user: "",
        email: "", password: "",
        isLogged: null
    },
    navbar: {
        openModalUser: false
    },
    sidebar: {
        openSidebar: false
    },
    dark_mode: {
        activeDarkMode: false
    },
    msgPopup: {
        openPopup: false, msgResponse: null
    },
    dataUserUpdate: [],
    openModalUpdate: {
        isOpenModal: false,
        // data: []
    },
    popupDeleteStudent: {
        isOpen: false,
        id: '',
        name_student: ''
    },

};