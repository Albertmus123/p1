import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center  gap-4 py-3 bg-gray-200 sticky top-0">
        <Link className="hover:text-pink-700" to="">
          Home
        </Link>
        <Link className="hover:text-pink-700" to="/new">
          Create Account
        </Link>
        <Link className="hover:text-pink-700" to="/login">
          Sign In
        </Link>
        <Link className="flex -space-y-2 -space-x-1 hover:text-pink-700">
          <BsCart2 className="text-xl" />
          <div className="badge badge-primary badge-sm">9</div>
        </Link>
      </div>
    </>
  );
};
