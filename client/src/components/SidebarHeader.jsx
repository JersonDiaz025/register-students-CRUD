import { Link } from "react-router-dom";
import { useState } from "react";
import Content from "./Content";
// import { managerHooks } from "../hooks/useHooksModal";
// import { findResult } from "../hooks/useFilter";


const SidebarHeader = ({ data, updateStudent }) => {
 
    // const { dataEdit, openModal, popup, handleUpdate, handleCloseModal,
    // handleSendUpdate, handleAccept, handleDelete, setOpenPopup } = managerHooks(updateStudent);

  const [filterData, setFilterdData] = useState("");
  const [orders, setOrders] = useState(data?.data);

  const _handleChange = (e) => {
    const { target } = e;
    const { value } = target;
    setFilterdData(value);
    if (value !== '') {
      let dataFound = orders.filter(
        (item) =>
          item.name.toLowerCase().includes(filterData) ||
          item.asignatura.toLowerCase().includes(filterData.toLowerCase())
      );
      setOrders(dataFound);
    } else {
       setOrders(data?.data);
    }
  }

  return (
    <>
      <div className="container-title">
        <div className="container-sidebar">
          <div className="container-btn-header">
            <Link to="/register" className="dashbord-header-btn">
              New register
            </Link>
          </div>
          <div className="container_">
            <input
              placeholder="Search"
              className="dashboard-content-input"
              value={filterData}
              onChange={(e) => _handleChange(e)}
            />
          </div>
        </div>
        <hr className="hr"></hr>
      </div>
        <Content updateStudent={updateStudent} orders={orders} />
    </>
  );
};

export default SidebarHeader;
