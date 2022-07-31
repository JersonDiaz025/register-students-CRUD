import { useState } from 'react';
import { deleteInfo } from '../utils/managerMethods';

const managerHooks = (updateStudent) => {

  const [dataEdit , setDataEdt ] = useState();
  const [openModal, setOpenModal] = useState({open:false, data:[]});
  const [popup, setOpenPopup] = useState({open:false, id:[], name_student:[]});


  // -----------------------------------closeModal---------------------------------------------------------------------
  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpenModal({open:false});
    console.log('cerrado');
  }

  // ------------------------------------sendDataModal------------------------------------------------------------------

  const handleSendUpdate = (e) => {
    e.preventDefault();
    setOpenModal({open:false});
    console.log('enviado');
  }

  // ----------------------------------update---------------------------------------------------------------------------
  const handleUpdate = (items) => {
    // console.log(items);
    setOpenModal({open: true});
    setDataEdt(items);
  }

  // ----------------------opction delete popup-------------------------------------------------------------------------
  const handleAccept = async() => {
    await deleteInfo(popup.id[0]??popup.id[0]);
    await updateStudent();
    setOpenPopup(!popup.open);
  }

  // ----------------------------function delete info------------------------------------------------------------------
  const handleDelete = (items) => {
    setOpenPopup({open: true, id:[items._id], name_student:[items?.name]});
  }


  return {
    dataEdit,
    openModal,
    popup,
    handleUpdate,
    handleCloseModal,
    handleSendUpdate,
    handleAccept,
    handleDelete,
    setOpenPopup
  }
}

export { managerHooks };
