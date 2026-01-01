import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { authAPI } from "../services/api";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuthStore();
  const [open, setOpen] = useState(false);

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
    navigate(isAuthenticated ? "/" : "/login");
  };

  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "COURSES", path: "/courses" },
    { label: "COACHES", path: "/mentors" },
    { label: "TESTIMONIALS", path: "/testimonials" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* Hover underline animation */}
      <style>{`
        .nav-link {
          position: relative;
          cursor: pointer;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #2563eb;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>

      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={logo} alt="Logo" className="h-16 w-16 object-contain" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-gray-600 font-semibold tracking-wide">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="nav-link text-xl hover:text-blue-500"
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Desktop Auth Button */}
          <div className="hidden lg:flex">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="h-11 px-6 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGetStarted}
                className="h-14 text-lg px-6 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition tracking-wider cursor-pointer"
              >
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-md rounded-md bg-red-600 text-white font-semibold"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleGetStarted}
                className="px-4 py-2 text-md rounded-md bg-orange-500 text-white font-semibold"
              >
                Get Started
              </button>
            )}

            <button
              className="text-3xl text-gray-700"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[600px]" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6 bg-white border-t text-gray-700 font-semibold">
            {navItems.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false);
                }}
                className="hover:text-blue-500"
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
