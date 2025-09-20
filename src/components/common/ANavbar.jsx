
import React, { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";
import { NavLink } from "react-router-dom";
import Profile from "../student/Profile";

const ANavbar = ({ onSearch }) => {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setNotifications(data.notifications || []))
      .catch((err) => console.error("Error loading notifications:", err));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value); 
  };

  return (
    <nav className="flex justify-between items-center px-16 py-4 shadow-sm bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">CollabHub</h1>

      {/* Search Box */}
      <div className="flex-1 px-6 flex justify-center">
        <div className="relative w-full max-w-md">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search projects, researchers..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>
      </div>

      {/* Menu Items */}
      <ul className="flex gap-6 text-gray-700 font-medium items-center">
        <li>
          <NavLink
            to="/admin/papers"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Research Papers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/researchers"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Researchers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>

        {/* Notifications */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative"
          >
            <Bell className="w-6 h-6 text-gray-700 cursor-pointer" />
            {notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                {notifications.length}
              </span>
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg p-3 z-50">
              <h3 className="font-semibold mb-2">Notifications</h3>
              <ul className="space-y-2">
                {notifications.length > 0 ? (
                  notifications.map((note) => (
                    <li
                      key={note.id}
                      className="p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                    >
                      <p className="text-sm font-medium">{note.message}</p>
                      <span className="text-xs text-gray-500">{note.time}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 text-sm">No notifications</li>
                )}
              </ul>
            </div>
          )}
        </li>

        {/* Profile */}
        <li className="relative" ref={profileRef}>
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShowProfile(!showProfile)}
          >
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>

          {showProfile && (
            <div className="absolute right-0 mt-2 w-80 z-50">
              <Profile />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default ANavbar;
