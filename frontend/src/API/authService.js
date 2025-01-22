import axios from "axios";
// import { handleApiError } from './../utils/errorHandling';

// Base URL for the API
const API_URL = process.env.REACT_APP_USER_API;

// Register new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Registration failed, Try again later"
    );
  }
};

// Login user
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Login failed, Try again later"
    );
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Include the token
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || "Logout failed, Try again later"
    );
  }
};