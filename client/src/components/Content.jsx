import React from 'react';
import { useState, useEffect } from "react";
import { deleteInfo } from '../utils/managerMethods';
import ModalEdit from './ModalEdit';
import Loader from './Loader';
import Title from './Title';
import Popup from './Popup';

const Content = ({ students, updateStudent }) => {

  const [openModal, setOpenModal] = useState({open: false, data:[]});
  const [popup, setOpenPopup] = useState({open: false, id:[], name_students:[]});

  const handleCloseModal = (e) => {
    e.preventDefault()
    setOpenModal({open:false})
    console.log('cerrado')

  }

  const handleSendUpdate = (e) => {
    e.preventDefault()
    setOpenModal({open:false})
    console.log('enviado')
  }

  const handleViewModal = () => {
    return (
      <>
        {
          openModal.open ? (
            <ModalEdit text_title={"Update Information"} text_button={"Save"}
            text_button_close={"Cancel"} handleCloseModal={handleCloseModal}
            handleSendUpdate={handleSendUpdate} />): ''
        }
      </>
    )
  }

  const handleViewPopup = () => {
    return (
      <>
        {
          popup?.open && (
            <Popup text={`Sure you want to delete? ${popup?.name_students[0]}`} button_text={"Accept"} handleAccept={handleAccept}  setOpenPopup={setOpenPopup}/>
          )
        }
      </>
    )
  }

  // accept opction delete
  const handleAccept = async() => {
    await deleteInfo(popup.id[0]??popup.id[0]);
    await updateStudent();
    setOpenPopup(!popup.open)
  }

  const handleEditStudents = (items) => {
    setOpenModal({open: true})
    console.log(items)

  }

  const handleDeleteStudents = (items) => {
    setOpenPopup({open: true, id:[items._id], name_students:[items?.name]})
  //   await deleteInfo(_id);
  //   await updateStudent();
  }

  return (
    <div>
      {handleViewModal()}
      {handleViewPopup()}
      <div className='container-table'>
        <div className='container-title'>
        <Title stylesTitle={`${"title-all-students"}`} stylesCount={`${"count"}`} data={"All students"} count={students?.data.length}/>
          <hr className='hr'></hr>
        </div>
        {students?.data.length !== 0 ? (
          <div className="main">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  {/* <th>Id</th> */}
                  <th>Name</th>
                  <th>Course</th>
                  <th>Direction</th>
                  <th>Qualification</th>
                  <th>Mail</th>
                  <th>Phone number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students?.data.map((items) => (
                  <tr key={items._id}>
                    {/* <td>{items._id}</td> */}
                    <td>{items.name}</td>
                    <td>{items.asignatura}</td>
                    <td>{items.direction}</td>
                    <td>{items.calification}</td>
                    <td>{items.email}</td>
                    <td>{items.phone_number}</td>
                    <td className='container-actions'>
                      <button className="btn-delete" onClick={(e) => handleDeleteStudents(items)}>
                        <img src='../src/assets/delete-icon.png' alt='icon-delte' className='icon-delete' />
                      </button>
                      <button className="btn-edit" onClick={(e) => handleEditStudents(items)}>
                        <img src='../src/assets/edit.png' alt='edit-icon' className='icon-edit' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>There is no data</div>
        )}
      </div>
    </div>
  );
}

export default Content;
