import { useState, useEffect } from "react";


const Form = () => {
    return (
        <div className='container'>
            <h1>To_do list</h1>
            <div className='container-form'>
                <form className='form' method='post'>
                    {/* <label>Agregar todo</label> */}
                    <input name='text' id="text1"/>
                    <div className='container-btn'>
                        <button>Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;