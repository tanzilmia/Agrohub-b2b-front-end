import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  getTotals,
  increaseQuantity,
  removeToCart,
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  console.log(products)
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  console.log(cartTotalAmount);
  const dispatch = useDispatch();
  const { user } = useContext(myContext);
  const email = user?.email;

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);
  const findProduct = products?.filter((product) => product?.userEmail === user?.email);
  console.log(findProduct)
  return (
    <>
      <div className="px-20 py-10 bg-white">
        <div>
          <h1 className="font-bold text-2xl text-center my-10">
            Shopping Cart
          </h1>
          <div>
            <table className="w-full">
              <tr className="">
                <th className="w-4/12">PRODUCT</th>
                <th className="">PRICE</th>
                <th className="">QUANTITY</th>
                <th className="">TOTAL</th>
                <th className="">ACTION</th>
              </tr>
              <tr className="w-full gap-3 border border-3"></tr>

              {findProduct?.map((product) => (
                <tr key={product._id} className="w-full border border-3">
                  <td className="flex items-center gap-4">
                    <img
                      className="h-24 w-24"
                      src={product?.images[0]}
                      alt=""
                    />
                    <p>{product?.name?.slice(0, 20)}</p>
                  </td>
                  <td className="text-center">${product?.newPrice}</td>
                  <td className="">
                    <p className="flex items-center justify-center">
                      <span className="flex items-center border border-black rounded-full">
                        <button
                          onClick={() => dispatch(decreaseQuantity(product))}
                          className="flex items-center justify-center h-8 w-8 rounded-l-full border-r border-black"
                        >
                          <svg
                            width={15}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                          </svg>
                        </button>
                        <p className="px-4 py-1 text-lg font-semibold">
                          {product?.quantity}
                        </p>
                        <button
                          onClick={() => dispatch(increaseQuantity(product))}
                          className="flex items-center justify-center h-8 w-8 rounded-r-full border-l border-black"
                        >
                          <svg
                            width={15}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                          </svg>
                        </button>
                      </span>
                    </p>
                  </td>
                  <td className="text-center">
                    ${product?.newPrice * product?.quantity}
                  </td>
                  <td className="text-center">
                    <i
                      onClick={() => dispatch(removeToCart(product))}
                      class="ri-delete-bin-6-line text-red-600"
                    ></i>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <Link to="/">
                <span className="flex items-center gap-1 text-xl border px-4 py-3 bg-blue-600 text-white">
                  <i class="ri-arrow-left-line"></i>
                  <button>Continue Shopping</button>
                </span>
              </Link>
              <button
                onClick={() => dispatch(clearCart(email))}
                className="border-2 px-6 py-3 bg-red-600 text-white text-xl"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="flex justify-end mt-10">
            <div className="bg-gray-100 p-10">
              <span className="flex items-center justify-between gap-2">
                <p className="text-xl">Subtotal:</p>
                <p className="text-xl font-bold">${cartTotalAmount}</p>
              </span>
              <span className="flex items-center justify-between gap-2 my-2 underline underline-offset-8">
                <p className="text-xl">Shipping Fee:</p>
                <p className="text-xl font-bold">$120</p>
              </span>
              <span className="flex items-center justify-between gap-2 mt-2">
                <p className="text-xl">Order Total:</p>
                <p className="text-xl font-bold">${cartTotalAmount + 120}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
