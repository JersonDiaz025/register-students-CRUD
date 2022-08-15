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
// import { serviceUser } from "./hooks/useUser";

function App() {
  const { data, updateStudent } = getData();

  const { open, handleActionsMenu } = ActionsMenu();

  // const { user, logged } = serviceUser();

  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  // console.log(user)
  // console.log(logged);

  const getUserJSON = () => {

    const loggedUser = window.localStorage.getItem("loggedUser");
    if (loggedUser) {
      const getUser = JSON.parse(loggedUser);
      setUser(getUser);
      setLogged(true);
    }
  }


  useEffect(() => {
    getUserJSON()
  }, []);


  return (
    <Router>
      {logged ? (
        <div className="dashboard-container">
          <Header
            handleActionsMenu={handleActionsMenu}
            user={user}
            logged={logged}
          />
          {open && <Navbar handleActionsMenu={handleActionsMenu} />}
          <>
            {data?.data ? (
              <Routes>
                <Route path="/" element={<Home data={data} />} />
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
                <Route path="/signIn" element={<Login />} />
              </Routes>
            ) : (
              <Loader />
            )}
          </>
        </div>
      ) : (
          <>
              <Routes>
                <Route path="/signUp" element={<Register />} />
                <Route path="/signIn" element={<Login />} />
              </Routes>
          </>
      )}
    </Router>
  );
}

export default App;
