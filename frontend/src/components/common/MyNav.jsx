import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/actions/authActions";

export default function MyNav() {
  const dispatch = useDispatch();
  const cartItemsCount = useSelector((state) => state.cartCounter.value); // Get cart items count
  const { user } = useSelector((state) => state.auth); // Get user from Redux state

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container py-2">
          <NavLink className="navbar-brand text-purple fs-4" to="/">
            Web App
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fs-6" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6" to="/products">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-6 position-relative" to="/cart">
                  Cart
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-purple">
                    {cartItemsCount}
                    <span className="visually-hidden">cart items</span>
                  </span>
                </NavLink>
              </li>

              {/* Conditional Rendering for Login/Logout */}
              {user ? (
                // If user is logged in, show username and logout button
                <>
                  <li className="nav-item">
                    <span className="nav-link fs-6">Welcome, {user.email}</span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link fs-6 btn btn-link"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                // If user is not logged in, show login link
                <li className="nav-item">
                  <NavLink className="nav-link fs-6" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}