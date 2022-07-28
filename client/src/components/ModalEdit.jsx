import React from 'react';
import Title from './Title';

const ModalEdit = (props) => {
    const { text_title, text_button, text_button_close, handleCloseModal, handleSendUpdate} = props;
    return (
        <div className='container-main-modal'>
            <div className='container-form-modal'>
                <div className="header">
                    <img src="../src/assets/edit.png" alt="image-student" className="image"></img>
                    <Title data={text_title} styles={`${"title-form"}`} />
                </div>
                <form className='form-modal'>
                    <div className='container-label'>
                        <label>Nombre del Estudiante</label>
                        <input id="input-modal" name="name" type="text"  />
                    </div>
                    <div  className='container-label'>
                        <label>Calificación del estudiante </label>
                        <input id="input-modal" name="calification" type="number" />
                    </div>
                    <div  className='container-label'>
                        <label>Correo electrónico</label>
                        <input id="input-modal" name="email" type="email"/>
                    </div>
                    <div  className='container-label'>
                        <label>Phone number</label>
                        <input id="input-modal" type="tel" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                    </div>
                    <div  className='container-label'>
                        <label>Dirección</label>
                        <input id="input-modal" name="direction" />
                    </div>
                    <div  className='container-label'>
                        <label>Asignatura</label>
                        <input id="input-modal" name="asignatura" type="text" />
                    </div>
                    <div className='container-btn-modal'>
                        <button type="submit" className='btn-close' onClick={(e)=>handleCloseModal(e)}>{text_button_close}</button>
                        <button type="submit" className='btn-modal' onClick={(e)=>handleSendUpdate(e)}>{text_button}</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default ModalEdit;
