import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Form from "./components/Form";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getData } from "./hooks/useGetData";
import SidebarHeader from "./components/SidebarHeader";
import { ActionsMenu } from "./hooks/useActionsMenu";
import Register from "./pages/Register";
import Login from "./pages/SignIn";
import NotAuthNavbar from "./components/NologgedUser";
// import { serviceUser } from "./hooks/useUser";
// import FatherComponent from "./components/FatherComponent";
// import ProctedRoute from "./components/ProctedRoute";
import { getUserToken } from "./utils/getUserLocalStorage";
import React, { useContext, useEffect} from 'react';
import { Context } from "./store/StoreProvider";

function App() {

  const [store, dispatch] = useContext(Context);
  const { user } = store;
  const { name_user, isLogged } = user;
  
  const { data, updateStudent } = getData();

  const { open, handleActionsMenu } = ActionsMenu();

  useEffect(() => { 
    getUserToken(dispatch)
  },[])

  return (
    <Router>
      <div className="dashboard-container">
        {isLogged ? (
          <div>
            <Header
              handleActionsMenu={handleActionsMenu}
              name_user={name_user}
            />
            {open && <Navbar handleActionsMenu={handleActionsMenu} dispatch={ dispatch } />}
          </div>
        ) : (
          <NotAuthNavbar/>
        )}
        {data?.data ? (
          <Routes>
            <Route path="/" element={<Dashboard data={data} />} />
            <Route
              path="/students"
              element={
                <SidebarHeader data={data} updateStudent={updateStudent} />
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/register"
              element={<Form updateStudent={updateStudent} />}
            />
            <Route path="/signUp" element={<Register />} />
            <Route path="/signIn" element={<Login dispatch={dispatch} />} />
          </Routes>
        ) : (
          <Loader />
        )}
      </div>
    </Router>
  );
}

export default App;
