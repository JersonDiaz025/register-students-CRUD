import { useState, useEffect } from "react";
import {postData } from '../utils/managerMethods';
import Title from "./Title";
import Popup from "./Popup";
// import Content from "./Content";

const Form = ({updateStudent}) => {

  const [data, setData] = useState({
    name: [],
    calification: [],
    email: [],
    phone_number: [],
    direction: [],
    asignatura: []
  }
  );

/**
 * When the form is submitted, prevent the default action, and send the data to the server using Axios.
 */
  const handleSubmit = async(e) => {
    e.preventDefault();
    await postData(data)
    setData({
      name: [],
      calification: [],
      email: [],
      phone_number: [],
      direction: [],
      asignatura: []
    });
    updateStudent()
    setPopup({status:true})
  }

/**
 * When the user changes the value of the input, update the data object with the new value.
 */
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const values = { ...data, [name]: [value]}
    setData(values);
  }


  const values = {

    name: data.name[0] ? data.name[0] : '',
    calification: data.calification[0] ? data.calification[0] : '',
    email: data.email[0] ? data.email[0] : '',
    phone_number: data.phone_number[0] ? data.phone_number[0] : '',
    direction: data.direction[0] ? data.direction[0] : '',
    asignatura: data.asignatura[0] ? data.asignatura[0] : ''

  }

    return (

      <div className='container-main-form'>
        <div className='container-form'>
          <div className="container-header">
            <img src="../src/assets/students-icon.png" alt="image-student" className="image"></img>
            <Title data={"Student Registration System"} styles={`${"title-form"}`} />
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input id="input" placeholder="Nombre del Estudiante" name="name" type="text" onChange={handleChange} value={values.name} required/>
            <input id="input" placeholder="Calificación del estudiante" name="calification" type="number" value={values.calification} onChange={handleChange}  required/>
            <input id="input" placeholder="Correo electrónico" name="email" type="email" onChange={handleChange} value={values.email} required/>
            <input id="input" placeholder="809-444-5555" type="tel" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={values.phone_number} onChange={handleChange}  required/>
            <input id="input" placeholder="Dirección" name="direction" onChange={handleChange} value={values.direction} required/>
            <input id="input" placeholder="Asignatura" name="asignatura" type="text" onChange={handleChange} value={values.asignatura} required/>
            <div className='container-btn'>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;