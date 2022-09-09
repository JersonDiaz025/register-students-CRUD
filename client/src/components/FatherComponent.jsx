import Login from '../pages/SignIn';
import Register from '../pages/Register';
import { Routes, Route } from "react-router-dom";

const FatherComponent = ({ getUserToken }) => {

  return (

    <Routes>
      <Route path="/" element={<Login getUserToken={getUserToken} />}/>
      <Route path="/signUp" element={<Register />} />
      <Route path="/signIn" element={<Login getUserToken={getUserToken} />} />
    </Routes>
    );
};

export default FatherComponent;
