import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { deleteInfo } from '../utils/managerMethods';

const Content = ({students, updateStudent}) => {

  // const [students, setStudent] = useState();

  useEffect(() => {
    updateStudent11()
  },[])

  const updateStudent11 = async() => {
    updateStudent()
  }

  const handleEditStudents = (items) => {
    // console.log(items)
  }

  const handleDeleteStudents = async(_id) => {
    await deleteInfo(_id)
    // .then(data=>console.log(data))
    await updateStudent11()
  }

  return (
      <div className='container-table'>
        {students?.data.length !== 0 ? (
          <div className="main">
            <div className="container">
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
                        <button className="btn-edit">
                          <img src='../src/assets/edit.png' alt='edit-icon' className='icon-edit' onClick={(e) => handleEditStudents(items)} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ): (
          <div>There is no data</div>
        )}
      </div>
    );
}

export default Content;
