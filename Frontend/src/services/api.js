import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URI;

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // Important for cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Auth API
export const authAPI = {
  registerUser: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  loginUser: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  },

  logoutUser: async () => {
    const response = await api.get("/auth/logout");
    return response.data;
  },

  forgotPassword: async (data) => {
    const response = await api.post("/auth/forgot-password", data);
    return response.data;
  },

  resetPassword: async (data) => {
    const response = await api.post("/auth/reset-password", data);
    return response.data;
  },
};

export default api;
