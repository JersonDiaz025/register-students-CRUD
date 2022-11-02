import { useState } from "react";
import { deleteInfo, putData } from "../utils/managerOperations";
import getMessagePopup from "../utils/sendMessagePopup";

const managerHooks = (props) => {
  
  // get function dispatch
  const { dispatch } = props;
  const { updateStudent, store } = props?.props;
  // get token from user
  const { user, popupDeleteStudent } = store;
  const { token } = user;
  const { payload } = popupDeleteStudent;
  let id_student_delete = payload?.id;

  // ------------------------------------sendDataModal------------------------------------------------------------------

  const handleSendUpdate = async (e, dataUpdated) => {
    e.preventDefault();
    dispatch({ type: "OPEN_MODAL_UPDATE_USER" })
    const { data } = await putData(dataUpdated, token);
    // send data to function view msg popup
    getMessagePopup(data, dispatch);
    // update dates estudents after update one
    await updateStudent();
  };

  // ----------------------------------update---------------------------------------------------------------------------
  const handleUpdate = (items) => {
    // open modal and get dates fot added in this inputs
    dispatch({ type: "OPEN_MODAL_UPDATE_USER" });
    dispatch({ type: "DATA_MODAL_EDIT", payload: items});
  };

  // ----------------------opction delete popup-------------------------------------------------------------------------
  const handleAccept = async () => {
    const { data } = await deleteInfo(id_student_delete, token);
    // send data to function view msg popup
    getMessagePopup(data, dispatch);
    // update dates estudents afeter deleted one
    await updateStudent();
    dispatch({ type: "POPUP_DELETE_USER" })
  };

  // ----------------------------function delete students------------------------------------------------------------------
  const handleDelete = (items) => {
    dispatch({
      type: "POPUP_DELETE_USER",
      payload: { id: items?._id, name_student: items?.name }
    })
  };

  return {
    handleUpdate,
    handleSendUpdate,
    handleAccept,
    handleDelete,
  };
};

export { managerHooks };
