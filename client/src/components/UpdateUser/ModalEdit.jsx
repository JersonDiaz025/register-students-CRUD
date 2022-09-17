import "./index.css";
import Title from "../Title/Title";
import { managerDataUpdate } from "../../hooks/useDataUpdate";

const ModalEdit = (props) => {
  const { text_title, text_button, text_button_close, handleCloseModal } =
    props;

  // get info from hook
  const { dataUpdated, handleChange, handleSubmit } = managerDataUpdate(props);

  const values = {
    name: dataUpdated.name ? dataUpdated.name : "",
    calification: dataUpdated.calification ? dataUpdated.calification : "",
    email: dataUpdated.email ? dataUpdated.email : "",
    phone_number: dataUpdated.phone_number ? dataUpdated.phone_number : "",
    direction: dataUpdated.direction ? dataUpdated.direction : "",
    asignatura: dataUpdated.asignatura ? dataUpdated.asignatura : "",
  };

  return (
    <div className="container-main-modal">
      <div className="container-form-modal">
        <div className="header-modal">
          <Title data={text_title} styles={`${"title-form"}`} />
        </div>
        <form className="form-modal" onSubmit={(e) => handleSubmit(e)}>
          <div className="container-label">
            <label>Nombre del Estudiante</label>
            <input
              id="input-modal"
              name="name"
              type="text"
              onChange={handleChange}
              value={values.name}
              required
            />
          </div>
          <div className="container-label">
            <label>Calificación del estudiante </label>
            <input
              id="input-modal"
              name="calification"
              type="number"
              onChange={handleChange}
              value={values.calification}
              required
            />
          </div>
          <div className="container-label">
            <label>Correo electrónico</label>
            <input
              id="input-modal"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              required
            />
          </div>
          <div className="container-label">
            <label>Phone number</label>
            <input
              id="input-modal"
              type="tel"
              onChange={handleChange}
              name="phone_number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={values.phone_number}
              required
            />
          </div>
          <div className="container-label">
            <label>Dirección</label>
            <input
              id="input-modal"
              name="direction"
              type="text"
              onChange={handleChange}
              value={values.direction}
              required
            />
          </div>
          <div className="container-label">
            <label>Asignatura</label>
            <input
              id="input-modal"
              name="asignatura"
              required
              type="text"
              onChange={handleChange}
              value={values.asignatura}
            />
          </div>
          <div className="container-btn-modal">
            <button
              type="submit"
              className="btn-close"
              onClick={(e) => handleCloseModal(e)}
            >
              {text_button_close}
            </button>
            <button type="submit" className="btn-modal">
              {text_button}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEdit;
