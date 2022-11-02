
// function get response returned for functions (put, get, delete, signIn and signUp) and send message popup
export default function getMessagePopup(data, dispatch) {

    if (data) {
        dispatch({
            type: "MSG_POPUP",
            payload: { openPopup: true, msgResponse: data }
        })
    }
    setTimeout(() => {
        dispatch({
            type: "MSG_POPUP",
            payload: { openPopup: false, msgResponse: null }
        })
    }, 3000)
    
}