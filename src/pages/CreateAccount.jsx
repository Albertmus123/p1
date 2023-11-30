import React from "react";
import { SlInfo, SlUser } from "react-icons/sl";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export const CreateAccount = () => {
  return (
    <div className="mx-2">
      <div>
        <label className="block" htmlFor="username">
          Last name*
        </label>
        <input
          className="border border-gray-300 outline-none focus:border-pink-500 p-2 w-full"
          type="text"
          placeholder="example"
        />
      </div>
    </div>
  );
};
