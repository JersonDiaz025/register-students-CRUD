import { useState } from "react";
import { sendDataAxios } from "../utils/managerAxios";
import Title from "./Title";

const Form = () => {

  const [data, setData] = useState(
    {
      name: [],
      calification: [],
      email: [],
      phone_number: [],
      direction: [],
      asignatura: []
    });

/**
 * When the form is submitted, prevent the default action, and send the data to the server using Axios.
 */
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataAxios(data);
  }

/**
 * When the user changes the value of the input, update the data object with the new value.
 */
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const values = { ...data, [name]: [value] }
    setData(values);
  }

    return (
      <div className='container-main-form'>
        <div className='container-form'>
          <div className="container-header">
            <img src="../src/assets/students-icon.png" alt="image-student" className="image"></img>
            <Title  data={"Student Registration System"} styles={`${"title-form"}`}/>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input id="input" placeholder="Nombre del Estudiante" name="name" type="text" onChange={handleChange} required/>
            <input id="input" placeholder="Calificación del estudiante" name="calification" type="number" onChange={handleChange} required/>
            <input id="input" placeholder="Correo electrónico" name="email" type="email" onChange={handleChange} required/>
            <input id="input" placeholder="809-444-5555" type="tel" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleChange} required/>
            <input id="input" placeholder="Dirección" name="direction" onChange={handleChange} required/>
            <input id="input" placeholder="Asignatura" name="asignatura" type="text" onChange={handleChange} required/>
            <div className='container-btn'>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;