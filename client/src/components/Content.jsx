import React from 'react';
import { useState, useEffect } from "react";
import { deleteInfo, getInfoStudents } from '../utils/managerMethods';

const Content = () => {

  const [students, setStudent] = useState();

  const q = getInfoStudents()

  useEffect(() => {
    q.then(data=>setStudent(data))
    console.log(students)
  },[])

  // useEffect(() => {
  //   // updateStudent()
  // })



  // const updateStudent = async() => {
  //   console.log('fue llamada')
  //   getInfoStudents()
  //   // .then((data) => setStudent(data))
  //   console.log(students)

  // }



  const handleEditStudents = (items) => {
    // console.log(items)
  }

  const handleDeleteStudents = async(e, _id) => {
    e.preventDefault();
    await deleteInfo(_id);
    // await updateStudent();
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
                      <button className="btn-delete" onClick={(e) => handleDeleteStudents(e, items._id)}>
                        <img src='../src/assets/delete-icon.png' alt='icon-delte' className='icon-delete' />
                      </button>
                      <button className="btn-edit">
                        <img src='../src/assets/edit.png' alt='edit-icon' className='icon-edit' onClick={(e) => handleEditStudents(e, items)} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>There is no data</div>
      )}
    </div>
    );
}

export default Content;
