import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Content from "./components/Content";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getData } from "./hooks/useGetData";
import SidebarHeader from "./components/SidebarHeader";

function App() {
  const { data, updateStudent } = getData();

  return (
    <Router>
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-body">
          {data?.data ? (
            <Routes>
              <Route path="/" exact element={<Home data={data} />} />
              <Route
                path="/students"
                element={
                  <SidebarHeader data={data} updateStudent={updateStudent} />}
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
      </div>
    </Router>
  );
}

export default App;
