import { useState } from "react";
import { sendDataAxios } from "../utils/managerAxios";

const Form = () => {

  const [data, setData] = useState(
    {
      name: [],
      calification: [],
      email: [],
      phone_number: [],
      direction: []
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataAxios(data);
  }

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const values = { ...data, [name]: [value] }
    setData(values);
  }

    return (
      <div className='container'>
        <div className='container-form'>
          <div className="container-header">
            <img src="../src/assets/students-icon.png" alt="image-student" className="image"></img>
            <h1 className="title">Sistema de registro de estudiantes</h1>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <input id="input" placeholder="Nombre del Estudiante" name="name" type="text" onChange={handleChange} />
            <input id="input" placeholder="Calificación del estudiante" name="calification" type="number" onChange={handleChange} />
            <input id="input" placeholder="Correo electrónico" name="email" type="email" onChange={handleChange} />
            <input id="input" placeholder="809-444-5555" type="tel" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handleChange} />
            <input id="input" placeholder="Dirección" name="direction" onChange={handleChange} />
            <div className='container-btn'>
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Form;