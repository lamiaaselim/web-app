import React, { useState } from "react";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";


export default function ProductSection({ cartCount, setCartCount }) {
  const products = useSelector((state) => state.products.arrWithCount);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <>
      <div className="container py-5">
      <div className="row mb-4">
        {/* Search Bar */}
        <div className="col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Watches">Watches</option>
            <option value="Headphones">Headphones</option>
            <option value="Microphones">Microphones</option>
            <option value="Cameras">Cameras</option>
          </select>
        </div>
      </div>

        <div className="row">
          <h1 className="text-center py-4">Our Product</h1>
        </div>

        <div className="row g-3">
          {filteredProducts.map((product) => (
            <div key={product._id} className="col-md-4">
              <ProductCard
                id={product._id}
                count={product.count}
                title={product.name}
                description={product.category}
                price={product.price}
                image={product.picture}
                cartCount={cartCount}
                setCartCount={setCartCount}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
