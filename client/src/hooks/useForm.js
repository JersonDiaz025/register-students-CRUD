import { useState } from "react";
import { postData } from "../utils/managerOperations";

export const managerDataForm = (updateStudent, dispatch) => {

  const [dataStudent, setData] = useState({
    name: [],
    calification: [],
    email: [],
    phone_number: [],
    direction: [],
    asignatura: [],
  });

  // When the form is submitted, prevent the default action, and send the data to the server using Axios.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await postData(dataStudent);
    dispatch({
      type: "MSG_POPUP",
      payload: { openPopup: true, msgResponse: data }
    })
    setTimeout(() => {
      dispatch({
        type: "MSG_POPUP",
        payload: { openPopup: false, msgResponse: null }
      })
    }, 3000)
    setData({
      name: [],
      calification: [],
      email: [],
      phone_number: [],
      direction: [],
      asignatura: [],
    });
    // updateStudent();
  };

  // When the user changes the value of the input, update the data object with the new value.
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    const values = { ...dataStudent, [name]: [value] };
    setData(values);
  };

  return {
    data: dataStudent,
    handleSubmit,
    handleChange,
  };
};
