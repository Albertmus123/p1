import React from "react";
import { MdClose } from "react-icons/md";

export const Modal = ({ closeModal }) => {
  return (
    <div
      onClick={() => closeModal(false)}
      className="fixed justify-center inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
    >
      <div className="flex justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex bg-gray-100 my-12 border border-1 border-pink-500 mx-2"
        >
          <MdClose
            className="relative text-2xl bg-sky-300 text-pink-700 rounded-md cursor-pointer"
            onClick={() => closeModal(false)}
          />
          <div className="form px-12">
            <h2 className="py-12 font-bold">Create Account</h2>
            <p>Once The form is Submitted, Activate Account by Email</p>
            <p className="pb-4">
              This Account Keep Personal Information confidention
            </p>
            <div className="form-group">
              <label htmlFor="username" className="block">
                Username*
              </label>
              <input
                className="border border-1 border-gray-300 outline-none p-2 focus:border-pink-400 w-full rounded-md"
                type="text"
                name="username"
                id="username"
              />
            </div>
            <div className="form-group pt-4">
              <label htmlFor="email" className="block">
                Email*
              </label>
              <input
                className="border border-1 border-gray-300 outline-none p-2 focus:border-pink-400 w-full rounded-md"
                type="email"
              />
            </div>
            <div className="flex gap-6 form-group py-4">
              <div className="first-name">
                <label htmlFor="firstName" className="block">
                  First name*
                </label>
                <input
                  className="border border-1 border-gray-300 outline-none p-2 focus:border-pink-400 w-full rounded-md"
                  type="text"
                />
              </div>
              <div className="last-name">
                <label htmlFor="username" className="block">
                  Last name*
                </label>
                <input
                  className="border border-1 border-gray-300 outline-none p-2 focus:border-pink-400 w-full rounded-md"
                  type="text"
                  name="username"
                  id="username"
                />
              </div>
            </div>
            <div className="form-group py-2">
              <label htmlFor="username" className="block">
                Phone Number*
              </label>
              <input
                className="border border-1 border-gray-300 outline-none p-2 focus:border-pink-400 w-full rounded-md"
                type="password"
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="username" className="block">
                Password*
              </label>
              <input
                className="border border-1 border-gray-300 outline-none p-2 focus:border-pink-400 w-full rounded-md"
                type="password"
              />
            </div>
            <div className="flex gap-4 pt-8 pb-12">
              <button
                className="border border-1 border-gray-400 hover:border-pink-600 p-2 rounded-md"
                type="submit"
              >
                Create Account
              </button>
              <p className="relative top-2">Have an account ?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
