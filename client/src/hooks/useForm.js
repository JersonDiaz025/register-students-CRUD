import { useState } from "react";
import { postData } from "../utils/managerOperations";
import { managerLogin } from "./useLogin";

export const managerDataForm = (updateStudent) => {

  const { msg } = managerLogin();
  console.log(msg)


  const [data, setData] = useState({
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
    await postData(data);
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
    const values = { ...data, [name]: [value] };
    setData(values);
  };

  return {
    data,
    handleSubmit,
    handleChange,
  };
};
