import { useDispatch } from "react-redux";
import "./styles/App.css";
import "./styles/admin.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllProducts } from "./API/product";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { setProducts } from "./redux/slices/product";
import Signup from "./pages/Signup";
import { loginSuccess } from "./redux/actions/authActions"; // Import loginSuccess action

function App() {
  const dispatch = useDispatch();

  // Fetch products on app load
  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data));
    })();
  }, [dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch(loginSuccess(user)); // Restore authentication state
      }
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;