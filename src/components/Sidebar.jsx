import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

function Sidebar() {
  return (
    <aside className="col-md-2 fs-5 bg-dark p-3" style={{ minHeight: "100vh" }}>
      <ul className="nav d-flex flex-column gap-2 mt-5">
        <li className="text-white nav-item rounded bg-secondary px-3 d-flex align-items-center">
          <MdDashboard size={22} />
          <NavLink className="text-white nav-link px-2">Dashboard</NavLink>
        </li>
        <li className="text-white nav-item rounded px-3 d-flex align-items-center">
          <IoPeopleSharp size={22} />
          <NavLink className="text-white nav-link px-2">Leads</NavLink>
        </li>
        <li className="text-white nav-item rounded px-3 d-flex align-items-center">
          <FaChartLine size={21} />
          <NavLink className="text-white nav-link px-2">Sales</NavLink>
        </li>
        <li className="text-white nav-item rounded px-3 d-flex align-items-center">
          <FaUser size={20} />
          <NavLink className="text-white nav-link px-2">Agents</NavLink>
        </li>
        <li className="text-white nav-item rounded px-3 d-flex align-items-center">
          <FaRegListAlt size={20} />
          <NavLink className="text-white nav-link px-2">Reports</NavLink>
        </li>
        <li className="text-white nav-item rounded px-3 d-flex align-items-center">
          <IoMdSettings size={23} />
          <NavLink className="text-white nav-link px-2">Settings</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
