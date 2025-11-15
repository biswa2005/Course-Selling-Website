import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import { authAPI } from "../services/api";
import useAuthStore from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { login, setLoading, isLoading, checkAuth } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuth = checkAuth();
    if (isAuth) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      const response = await authAPI.loginUser({
        email: formData.email,
        password: formData.password,
      });

      const userData = response && response.user;

      if (userData) {
        login(userData);
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to continue</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
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
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              icon={Lock}
              required
            />

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full"
            >
              Login
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600 space-y-3">
            <div className="relative inline-block group">
              <Link
                to="/forgot-password"
                className="text-slate-600 hover:text-slate-700 font-semibold"
              >
                Forgot password?
              </Link>

              {/* Animated underline */}
              <span
                className="
      absolute left-0 -bottom-0.5 
      h-0.5 w-0 
      bg-black 
      transition-all duration-300 
      group-hover:w-full
    "
              ></span>
            </div>

            <div className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <span className="group inline-block">
                <Link
                  to="/register"
                  className="relative inline-block text-slate-600 group-hover:text-black font-semibold text-md transition-colors"
                >
                  Register here
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
