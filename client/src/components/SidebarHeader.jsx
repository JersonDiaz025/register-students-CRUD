import { Link } from "react-router-dom";
import Content from "./Content";
import { findResult } from "../hooks/useFilter";

const SidebarHeader = ({ data, updateStudent }) => {
  const { filterData, orders, _handleChange } = findResult(data);

  return (
    <div>
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
              className="dashboard-input"
              value={filterData}
              onChange={(e) => _handleChange(e)}
            />
          </div>
        </div>
        <hr className="hr"></hr>
      </div>
      <Content updateStudent={updateStudent} orders={orders} />
    </div>
  );
};

export default SidebarHeader;
