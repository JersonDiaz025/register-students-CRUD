import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getData } from "./hooks/useGetData";
import SidebarHeader from "./components/SidebarHeader";
import { ActionsMenu } from "./hooks/useActionsMenu";
import Register from "./components/Register";
import Login from "./components/SignIn";
import { serviceUser } from "./hooks/useUser";
import FatherComponent from "./components/FatherComponent";

function App() {

  const { data, updateStudent } = getData();

  const { open, handleActionsMenu } = ActionsMenu();

  const { user, isLoggedIn, handlelogOut, getUserToken } = serviceUser();

  return (
    <Router>
      {isLoggedIn ? (
        <div className="dashboard-container">
          <Header
            handleActionsMenu={handleActionsMenu}
            user={user}
            isLoggedIn={isLoggedIn}
          />
          <div>
            {open && (
              <Navbar
                handleActionsMenu={handleActionsMenu}
                handlelogOut={handlelogOut}
              />
            )}
            {data?.data ? (
              <Routes>
                <Route exact path="/" element={<Home data={data} />} />
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
                {/* <Route path="*" element={<NoPage />} /> */}
                <Route path="/signUp" element={<Register />} />
                <Route
                  path="/signIn"
                  element={<Login getUserToken={getUserToken} />}
                />
              </Routes>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      ) : (
        <FatherComponent getUserToken={getUserToken}/>
      )}
    </Router>
  );
}

export default App;
