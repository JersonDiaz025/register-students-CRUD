import { useState } from "react";
import axios from "axios";

const Form = () => {

    const [text, setText] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const addToList = () => {
        axios.post("http://localhost:3004/add-todo", {
            text: text,
            completed: false
        })
    }
    return (
        <div className='container'>
            <div className='container-form'>
                <div className="container-header">
                    <img src="../src/assets/students-icon.png" alt="image-student" className="image"></img>
                    <h1 className="title">Sistema de registro de estudiantes</h1>
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <input id="input" placeholder="Nombre del Estudiante" type="text" onChange={handleChangeText} />
                    <input id="input" placeholder="Calificación del estudiante" type="number" />
                    <input id="input" placeholder="Correo electrónico" type="email" />
                    <input id="input" placeholder="809-444-5555" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                    <input id="input" placeholder="Dirección" />
                    <div className='container-btn'>
                        <button onClick={addToList}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;