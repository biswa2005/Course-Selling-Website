import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Phone, EyeOff, Eye } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import { authAPI } from "../services/api";
import useAuthStore from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { login, setLoading, isLoading, checkAuth } = useAuthStore();

  const [formData, setFormData] = useState({
    identifier: "", // email OR phone
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (checkAuth()) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isPhone = (value) => /^\d{10}$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const { identifier, password } = formData;

    if (!identifier || !password) {
      setError("Please enter email/phone and password");
      return;
    }

    if (!isEmail(identifier) && !isPhone(identifier)) {
      setError("Enter a valid email or 10-digit phone number");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        password,
        ...(isEmail(identifier)
          ? { email: identifier }
          : { phone: identifier }),
      };

      const response = await authAPI.loginUser(payload);

      if (response?.user) {
        login(response.user);
        navigate("/");
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
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
              name="identifier"
              placeholder="Email or Phone Number"
              value={formData.identifier}
              onChange={handleChange}
              icon={isPhone(formData.identifier) ? Phone : Mail}
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

            <Button type="submit" isLoading={isLoading} className="w-full">
              Login
            </Button>
          </form>

          <div className="text-center text-sm text-gray-600 space-y-3">
            <Link
              to="/forgot-password"
              className="font-semibold text-slate-600 hover:text-black"
            >
              Forgot password?
            </Link>

            <div>
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-slate-600 hover:text-black"
              >
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
