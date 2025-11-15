import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { authAPI } from "../services/api";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await authAPI.logoutUser();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      logout();
      navigate("/login");
    }
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: black;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <nav className="w-full bg-white py-4 shadow-sm h-18 sticky top-0 z-50">
        <div className="ml-6 pl-6 flex items-center justify-between pr-8 py-4 h-full">
          {/* Left Logo Text */}
          <h1
            className="text-2xl font-extrabold tracking-wide cursor-pointer"
            onClick={() => navigate("/")}
          >
            PRAGATI COACHING CENTRE
          </h1>

          {/* Center Navigation Links */}
          <ul className="hidden md:flex space-x-12 text-gray-700 font-bold text-xl">
            <li
              className="nav-link hover:text-black cursor-pointer"
              onClick={() => navigate("/")}
            >
              HOME
            </li>

            <li
              className="nav-link hover:text-black cursor-pointer"
              onClick={() => navigate("/mentors")}
            >
              MENTORS
            </li>

            <li
              className="nav-link hover:text-black cursor-pointer"
              onClick={() => navigate("/success-stories")}
            >
              SUCCESS STORIES
            </li>

            <li
              className="nav-link hover:text-black cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              CONTACT
            </li>
          </ul>

          {/* Right Button - GET STARTED or LOGOUT */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="h-14 bg-red-600 text-white text-lg font-medium px-6 border-2 cursor-pointer border-red-600 rounded-md hover:bg-red-700 hover:border-red-700 transition"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleGetStarted}
              className="h-14 bg-black text-white font-medium px-6 border-2 cursor-pointer border-black rounded-md hover:bg-slate-50 hover:text-black transition"
            >
              GET STARTED
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
