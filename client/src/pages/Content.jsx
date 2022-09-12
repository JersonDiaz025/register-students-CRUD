import React from 'react';
import ModalEdit from '../components/ModalEdit';
import Popup from '../components/Popup';
import { managerHooks } from '../hooks/useHooksModal';

const Content = ({ orders, updateStudent }) => {
  // import customHooks
  const { dataEdit, openModal, popup, handleUpdate, handleCloseModal,
    handleSendUpdate, handleAccept, handleDelete, setOpenPopup } = managerHooks(updateStudent);

  const ShowModal = () => {
    return (
      <>
        {openModal?.open &&
          <ModalEdit text_title={"Update Information"} text_button={"Save"}
            text_button_close={"Cancel"} handleCloseModal={handleCloseModal}
            handleSendUpdate={handleSendUpdate}
            dataEdit={dataEdit}
          />
        }
      </>
    )
  }

  const ShowPopup = () => {
    return (
      <>
        {popup?.open &&
          <Popup text={`Sure you want to delete? ${popup?.name_student[0]}`}
            button_text={"Accept"} handleAccept={handleAccept} setOpenPopup={setOpenPopup} />
        }
      </>
    )
  }

  return orders?.length !== 0 ? (
    <div>
      {ShowModal()}
      {ShowPopup()}
      <div className="container-table">
        <div className="main">
          <table className="table">
            <thead className="thead-dark">
              <tr>
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
              {orders?.map((items) => (
                <tr key={items._id}>
                  <td>{items.name}</td>
                  <td>{items.asignatura}</td>
                  <td>{items.direction}</td>
                  <td>{items.calification}</td>
                  <td>{items.email}</td>
                  <td>{items.phone_number}</td>
                  <td className="container-actions">
                    <button
                      className="btn-delete"
                      onClick={(e) => handleDelete(items)}
                    >
                      <img
                        src="../src/assets/delete-icon.png"
                        alt="icon-delte"
                        className="icon-delete"
                      />
                    </button>
                    <button
                      className="btn-edit"
                      onClick={(e) => handleUpdate(items)}
                    >
                      <img
                        src="../src/assets/edit.png"
                        alt="edit-icon"
                        className="icon-edit"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}><h2>There is no results</h2></div>
  );
}

export default Content;
