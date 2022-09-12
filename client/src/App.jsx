import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Form from "./components/Form";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getData } from "./hooks/useGetData";
import SidebarHeader from "./components/SidebarHeader";
import Register from "./pages/Register";
import Login from "./pages/SignIn";
import { getUserToken } from "./utils/getUserLocalStorage";
import React, { useContext, useEffect} from 'react';
import { Context } from "./store/StoreProvider";


function App() {

  const [store, dispatch] = useContext(Context);
  const { sidebar } = store;
  const { openSidebar } = sidebar;
  const { user } = store;
  const { isLogged } = user;

  const { data, updateStudent } = getData();

  useEffect(() => { 
    getUserToken(dispatch)
  },[])

  return (
    <Router>
      <div className="dashboard-container">
        {isLogged && (
          <>
            <Navbar
              store={store}
              dispatch={dispatch}
            />
            {openSidebar && (
              <Sidebar
                dispatch={dispatch}
                store={store}
              />
            )}
          </>
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
