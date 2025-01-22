import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { validateEmail } from "../utils/validateEmail";
import ErrorAlert from "../components/common/ErrorAlert";
import { login } from "../redux/actions/authActions";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};

    if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }
    if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await dispatch(login(formData.email, formData.password));
        navigate("/"); // Redirect to home or protected page
      } catch (err) {
        setError({ general: err.message });
      }
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="py-5 text-center text-purple">Welcome Back to IStore</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit} noValidate>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className={`form-control ${error.email ? "is-invalid" : ""}`}
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {error.email && <div className="invalid-feedback">{error.email}</div>}
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${error.password ? "is-invalid" : ""}`}
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {error.password && <div className="invalid-feedback">{error.password}</div>}
            </div>

            {/* General Error */}
            {error.general && <div className="text-danger">{error.general}</div>}

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-outline-purple">Log In</button>
            </div>
          </form>

          {/* Navigate to Register */}
          <div className="mt-3 text-center">
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                className="btn btn-link p-0 text-purple"
                onClick={() => navigate("/register")}
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Display error alert */}
      {error.general && (
        <ErrorAlert title="Error" text={error.general} icon="error" />
      )}
    </div>
  );
}