import { useState } from "react";
import { postData } from "../utils/managerOperations";
import getMessagePopup from "../utils/sendMessagePopup";

export const managerDataForm = (props, dispatch) => {

  const { updateStudent, store } = props;
  const { user } = store;
  const { token } = user;

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
    const { data } = await postData(dataStudent, token);
    getMessagePopup(data, dispatch);
    setData({
      name: [],
      calification: [],
      email: [],
      phone_number: [],
      direction: [],
      asignatura: [],
    });
    updateStudent();
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
