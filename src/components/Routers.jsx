import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { Cart } from "../pages/Cart";
import { Checkout } from "../pages/Checkout";
import { ProductDetails } from "../pages/ProductDetails";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product-details/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="*"
        element={
          <div className="flex justify-center text-4xl">
            {" "}
            Page Not found : 404
          </div>
        }
      />
    </Routes>
  );
};
