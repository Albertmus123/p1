import React from "react";
import { FiShoppingCart } from "react-icons/fi";
export const NavBar = () => {
  return (
    <>
      <div className="flex justify-end  gap-8 pe-24 py-4 bg-gray-200 sticky top-0 right-0 left-0 rounded-md mx-24">
        <div className="flex pt-2">
          <FiShoppingCart className="text-2xl text-pink-800" />{" "}
          <span className="relative -top-4">7</span>
        </div>
      </div>
    </>
  );
};
