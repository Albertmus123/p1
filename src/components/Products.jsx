import { useNavigate } from "react-router-dom";
import useCustomFetch from "./useCustomFetch";
import { Modal } from "./Modal";
import { useState } from "react";

export const Products = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useCustomFetch(
    "https://fakestoreapi.com/products"
  );
  if (isLoading) {
    return <div className="flex justify-center text-4xl font-bold">.....</div>;
  }
  // const navigate = useNavigate();

  const handleCardOnClick = (key) => {
    navigate(`/product-details/${key}`);
  };
  return (
    <>
      <div className="flex gap-4 justify-center pt-24">
        <button
          onClick={() => setIsOpen(true)}
          className="border border-1 border-gray-400 hover:border-pink-600 p-2 rounded-md"
        >
          Create Account
        </button>
        <button className="border border-1 border-gray-400 hover:border-pink-600 p-2 rounded-md">
          Sign In
        </button>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 py-12 mx-28">
        {data &&
          data.map((product) => (
            <div
              className="grid justify-center shadow shadow-md px-8 pb-8 cursor-pointer border border-1 hover:border-pink-500"
              key={product.id}
              onClick={() => handleCardOnClick(product.id)}
            >
              <div className=" w-28 h-28 pt-12">
                <img
                  className="object object-full"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="card-body">
                <h3 className="mt-28">{product.title.substring(0, 40)}...</h3>
                <p className="font-bold text-lg pt-4">
                  price: $ {product.price}
                </p>
              </div>
            </div>
          ))}
      </div>
      {isOpen && <Modal closeModal={setIsOpen} />}
    </>
  );
};
