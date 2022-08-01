import { useState } from 'react';

export const managerDataUpdate = (props) => {

    const { handleSendUpdate, dataEdit } = props;
    const {
      _id,
      name,
      calification,
      phone_number,
      email,
      asignatura,
      direction,
    } = dataEdit;

    const [dataUpdated, setDataUpdated] = useState({
      name: name,
      calification: calification,
      email: email,
      phone_number: phone_number,
      direction: direction,
      asignatura: asignatura,
      id: _id,
    });
    // change value inputs
    const handleChange = (event) => {
      const { target } = event;
      const { name, value } = target;
      const values = { ...dataUpdated, [name]: value };
      setDataUpdated(values);
    };
    // send data in for
    const handleSubmit = (e) => {
      e.preventDefault();
      handleSendUpdate(e, dataUpdated);
    };
    // return objet with info
    return {
      dataUpdated,
      handleChange,
      handleSubmit,
    };
}
