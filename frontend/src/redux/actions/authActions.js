import { loginUser, registerUser, logoutUser } from "../../API/authService";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Action Creators
export const login = (email, password) => async (dispatch) => {
  try {
    const response = await loginUser({ email, password });
    localStorage.setItem("authToken", response.token); // Store token
    localStorage.setItem("user", JSON.stringify(response)); // Store user object
    dispatch({ type: "LOGIN_SUCCESS", payload: response }); // Update Redux state
  } catch (error) {
    throw error;
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    const response = await registerUser({ username, email, password });
    localStorage.setItem("authToken", response.token);
    dispatch({ type: LOGIN_SUCCESS, payload: response.user });
  } catch (error) {
    throw error;
  }
};
export const logout = () => async (dispatch) => {
  try {
    await logoutUser();
    localStorage.removeItem("authToken");
    dispatch({ type: LOGOUT });
  } catch (error) {
    throw error;
  }
};
export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});