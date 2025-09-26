// authFunctions.js
import axios from "axios";

const API_BASE_URL = "https://apitest.softvencefsd.xyz/api";

// ------------------- STORAGE HANDLING -------------------
const saveUserToStorage = (data) => {
  if (data.token) localStorage.setItem("token", data.token);
  if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
};

const removeUserFromStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return token && user ? { token, user: JSON.parse(user) } : null;
};

// ------------------- REGISTER -------------------
export const registerUser = async (formData) => {
  try {
    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    const res = await axios.post(`${API_BASE_URL}/register`, form);
    console.log("Registration response:", res.data);

    // OTP automatically sent by backend on registration
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Registration error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

// ------------------- LOGIN -------------------
export const loginUser = async (formData) => {
  try {
    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    const res = await axios.post(`${API_BASE_URL}/login`, form);
    console.log("Login response:", res.data);

    if (res.data.token) saveUserToStorage(res.data);
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

// ------------------- LOGOUT -------------------
export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("token");
    await axios.post(
      `${API_BASE_URL}/logout`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    removeUserFromStorage();
    console.log("Logged out successfully");
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

// ------------------- FORGOT PASSWORD -------------------
export const forgotPassword = async (email) => {
  try {
    const form = new FormData();
    form.append("email", email);

    const res = await axios.post(`${API_BASE_URL}/forgot-password`, form);
    console.log("Forgot password response:", res.data);
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Forgot password error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

// ------------------- RESET PASSWORD -------------------
export const resetPassword = async ({ password, password_confirmation, token }) => {
  try {
    const form = new FormData();
    form.append("password", password);
    form.append("password_confirmation", password_confirmation);
    form.append("token", token);

    const res = await axios.post(`${API_BASE_URL}/reset-password`, form);
    console.log("Reset password response:", res.data);
    return { success: true };
  } catch (error) {
    console.error("Reset password error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

// ------------------- GET USER DETAIL -------------------
export const getUserDetail = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${API_BASE_URL}/user-detail`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("User detail response:", res.data);
    return { success: true, data: res.data };
  } catch (error) {
    console.error("Get user detail error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};

// ------------------- RESEND OTP -------------------
export const resendOtp = async (email) => {
  try {
    const form = new FormData();
    form.append("email", email);

    await axios.post(`${API_BASE_URL}/resend_otp`, form);
    console.log("OTP resent to:", email);
    return { success: true, message: "OTP has been resent!" };
  } catch (error) {
    console.error("Resend OTP error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};

// ------------------- VERIFY OTP -------------------
export const verifyOtp = async (email, otp) => {
  try {
    const form = new FormData();
    form.append("email", email);
    form.append("otp", otp);

    await axios.post(`${API_BASE_URL}/verify_otp`, form);
    console.log("OTP verified for:", email);
    return { success: true };
  } catch (error) {
    console.error("Verify OTP error:", error.response?.data || error.message);
    return { success: false, message: error.response?.data?.message || error.message };
  }
};
