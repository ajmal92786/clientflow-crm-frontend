import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaChartLine, FaUser, FaRegListAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `nav-link rounded px-3 d-flex align-items-center gap-2 text-white ${
      isActive ? "bg-secondary" : ""
    }`;

  return (
    <aside className="col-md-2 p-3 fs-5 bg-dark" style={{ minHeight: "100vh" }}>
      <ul className="nav mt-5 gap-2">
        <li className="nav-item w-100">
          <NavLink to="/" className={linkClass}>
            <MdDashboard size={22} />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink to="/leads" className={linkClass}>
            <IoPeopleSharp size={22} />
            <span>Leads</span>
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink to="/sales" className={linkClass}>
            <FaChartLine size={21} />
            <span>Sales</span>
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink to="/agents" className={linkClass}>
            <FaUser size={20} />
            <span>Agents</span>
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink to="/reports" className={linkClass}>
            <FaRegListAlt size={20} />
            <span>Reports</span>
          </NavLink>
        </li>

        <li className="nav-item w-100">
          <NavLink to="/settings" className={linkClass}>
            <IoMdSettings size={24} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
