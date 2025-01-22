import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/Product/ProductCard";

export default function Cart() {
  const { arrWithCount } = useSelector((state) => state.products);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const productHasCount = arrWithCount.filter((product) => product.count);
    setCartItems(productHasCount);
    // console.log(cartItems);
  }, [arrWithCount]);
  return (
    <>
      {cartItems.map((item) => (
        <div key={item._id} className="container py-5">
          <div className="row g-3">
            <div className="col-md-6 offset-md-3">
              <ProductCard
                id={item._id}
                count={item.count}
                title={item.name}
                description={item.description}
                price={item.price}
                image={item.picture}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
