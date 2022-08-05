import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getData } from "./hooks/useGetData";
import SidebarHeader from "./components/SidebarHeader";
import { ActionsMenu } from "./hooks/useActionsMenu";

function App() {
  const { data, updateStudent } = getData();

  const { open, handleActionsMenu } = ActionsMenu();

  return (
    <Router>
      <div className="dashboard-container">
        <Header handleActionsMenu={handleActionsMenu} />
        {open && <Navbar handleActionsMenu={handleActionsMenu} />}
        {/* <div className="dashboard-body"> */}
        {data?.data ? (
          <Routes>
            <Route path="/" exact element={<Home data={data} />} />
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
          </Routes>
        ) : (
          <Loader />
        )}
      </div>
      {/* </div> */}
    </Router>
  );
}

export default App;
