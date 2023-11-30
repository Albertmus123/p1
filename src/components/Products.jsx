import { useNavigate } from "react-router-dom";
import useCustomFetch from "./useCustomFetch";
import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa6";

const cardVariants = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Products = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useCustomFetch(
    "https://fakestoreapi.com/products"
  );
  if (isLoading) {
    return <div className="flex justify-center text-4xl font-bold">.....</div>;
  }
  const handleCardOnClick = (key) => {
    navigate(`/product-details/${key}`);
  };
  return (
    <>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 mx-4 md:mx-28 lg:mx-28">
        {data &&
          data.map((product, index) => (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center shadow shadow-md px-2 gap-4 pb-8 cursor-pointer border border-1 hover:border-pink-500"
              key={product.id}
              onClick={() => handleCardOnClick(product.id)}
            >
              <div className="pt-12">
                <img
                  className="object object-full h-48"
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="my-12">
                <h3 className="">{product.title}...</h3>
                <p className="font-bold text-lg py-4">
                  price: $ {product.price}
                </p>
                <p className="flex">
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </>
  );
};
