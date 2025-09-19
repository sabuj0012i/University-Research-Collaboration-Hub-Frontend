import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaFileAlt, FaComments, FaUsers } from "react-icons/fa";
import { FaUser } from "react-icons/fa6"; 
import { MdSettings } from "react-icons/md";

const Sidebar = ({ panel }) => {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  const menus = {
    researcher: [
      { to: "/researcher/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
      { to: "/researcher/profile", label: "My Profile", icon: <FaUser /> },
      { to: "/researcher/my-uploads", label: "Papers", icon: <FaFileAlt /> },
      { to: "/researcher/settings", label: "Settings", icon: <MdSettings /> },
    ],
    varsityAdmin: [
      { to: "/admin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
      { to: "/admin/researchermanagement", label: "Researchers", icon: <FaUsers /> },
      { to: "/admin/papermanagement", label: "Papers", icon: <FaFileAlt /> },
     
      { to: "/admin/settings", label: "Settings", icon: <MdSettings /> },
    ],
    superAdmin: [
      { to: "/superadmin/dashboard", label: "Dashboard", icon: <FaTachometerAlt /> },
      { to: "/superadmin/users", label: "Users", icon: <FaUsers /> },
      { to: "/superadmin/papers", label: "Papers", icon: <FaFileAlt /> },
      { to: "/superadmin/settings", label: "Settings", icon: <MdSettings /> },
    ],
  };

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg px-4 py-6 flex flex-col">
      <h2 className="text-lg font-bold text-blue-600 mb-8 capitalize">
        {panel} Menu
      </h2>

      <nav className="flex-1 flex flex-col gap-2">
        {menus[panel]?.map((item, idx) => (
          <NavLink key={idx} to={item.to} className={linkClasses}>
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
