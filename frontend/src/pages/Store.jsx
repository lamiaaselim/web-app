import React from "react";
import ProductSection from './../components/Product/ProductSection';


export default function Store({ cartCount, setCartCount }) {
  return (
    <>
      <ProductSection cartCount={cartCount} setCartCount={setCartCount} />
    </>
  );
}
