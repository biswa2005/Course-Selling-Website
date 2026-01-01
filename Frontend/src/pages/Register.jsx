import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, UserCircle, Phone, EyeOff, Eye } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import { authAPI } from "../services/api";
import useAuthStore from "../store/authStore";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login, setLoading, isLoading } = useAuthStore();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Combine names into fullName for the API
      const fullName =
        `${formData.firstName} ${formData.middleName} ${formData.lastName}`.trim();

      const response = await authAPI.registerUser({
        name : fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      });

      if (response && response.user) {
        // Store user data from API response
        login(response.user);
        navigate("/");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-linear-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-md w-full">
        <div className="rounded-2xl shadow-xl p-8 space-y-6 bg-white">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2 text-gray-900">
              Create Account
            </h1>
            <p className="text-gray-600">Sign up to get started</p>
          </div>

          {error && (
            <div className="px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                icon={User}
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                icon={User}
                required
              />
            </div>

            <Input
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              icon={UserCircle}
            />

            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              required
            />

            <Input
              type="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              icon={Phone}
              required
            />

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition cursor-pointer"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full bg-slate-800 hover:bg-slate-900 cursor-pointer"
            >
              Register
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <span className="group inline-block">
              <Link
                to="/login"
                className="relative inline-block text-slate-600 group-hover:text-black font-semibold text-md transition-colors"
              >
                Login here
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
