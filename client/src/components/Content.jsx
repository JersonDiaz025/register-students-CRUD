import React from 'react';
import { useState, useEffect } from "react";
import { deleteInfo } from '../utils/managerMethods';
import ModalEdit from './ModalEdit';
import Title from './Title';

const Content = ({ students, updateStudent }) => {

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = (e) => {
    e.preventDefault()
    setOpenModal(!openModal)
    console.log('cerrado')

  }

  const handleSendUpdate = (e) => {
    e.preventDefault()
    console.log('enviado')
    setOpenModal(!openModal)
  }

  const handleViewModal = () => {
    return (
      <>
        {
          openModal ? (
            <ModalEdit text_title={"Update Information"} text_button={"Save"}
            text_button_close={"Cancel"} handleCloseModal={handleCloseModal}
            handleSendUpdate={handleSendUpdate} />)
          : ''
        }
      </>
    )
  }
``
  const handleEditStudents = (items) => {
    setOpenModal(!openModal)
    console.log(items)

  }

  const handleDeleteStudents = async (_id) => {
    await deleteInfo(_id);
    await updateStudent();
  }

  return (
    <div>
      {handleViewModal()}
      <div className='container-table'>
        <div className='container-title'>
          <Title styles={`${"title-all-students"}`} data={"All students"}/>
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
                      <button className="btn-delete" onClick={() => handleDeleteStudents(items._id)}>
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
