import { useState, useEffect } from "react";
import { getInfoStudents } from "../utils/managerOperations";

export const getData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    updateStudent();
  }, []);

  const updateStudent = async () => {
    getInfoStudents().then((response) => setData(response));
  };

  return {
    data,
    updateStudent,
  };
};