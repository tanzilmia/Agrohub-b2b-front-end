import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../contextApi/Authcontext";

const ProductForm = () => {
  const [size, setSize] = useState([]);
  const { user, header } = useContext(myContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.productName.value;
    const image = form.image.files[0];
    const oldPrice = form.oldPrice.value;
    const newPrice = form.newPrice.value;
    const category = form.category.value;
    const stock = form.stock.value;
    const description = form.description.value;

    const formData = new FormData();
    formData.append("image", image);

    axios
      .post(
        "https://api.imgbb.com/1/upload?key=bb1b4cc357be233d3f5e60bd68475f0b",
        formData
      )
      .then((res) => {
        if (res.data.success) {
          const product = {
            sellerName: user?.name,
            sellerEmail: user?.email,
            sellerPhone: user?.phone,
            sellerProfilePicture: user?.profilePic,
            name,
            image: res.data.data.display_url,
            oldPrice,
            newPrice,
            size,
            stock,
            description,
            role: user?.role,
            additionalInfo: [{}],
          };

          axios
            .post(
              `https://agrohub-b2b-backend.vercel.app/seller/product?email=${user?.email}`,
              product,
              header
            )
            .then((res) => {
              console.log(res.data);
              form.reset();
              navigate("/selling_products");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center border border-red-500 md:w-[1000px]">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 uppercase">
          Post your products
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mt-6 md:grid md:grid-cols-2 gap-6"
        >
          <div className="mb-2 col-span-1">
            <label>
              <span className="text-gray-700">Product Name</span>
              <input
                type="text"
                name="productName"
                className="w-full border block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Name"
              />
            </label>
          </div>
          <div className="mb-2 col-span-1">
            <label>
              <span className="text-gray-700">Product Image</span>
              <input
                type="file"
                name="image"
                className="w-full border block px-4 py-2 mt-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Type here..."
              />
            </label>
          </div>
          <div className="mb-2 col-span-1">
            <label>
              <span className="text-gray-700">Old Price</span>
              <input
                name="oldPrice"
                type="text"
                className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Old Price"
              />
            </label>
          </div>
          <div className="mb-2 col-span-1">
            <label>
              <span className="text-gray-700">New Price</span>
              <input
                name="newPrice"
                type="text"
                className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="New Price"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Category</span>
              <select
                className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="category"
              >
                <option disabled selected>
                  Choose a category
                </option>

                <option>Vivo</option>
                <option>Samsung</option>
                <option>Walton</option>
                <option>Nokia</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-gray-700">Size</span>
              <select
                className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="size"
                onChange={(event) => setSize([...size, event.target.value])}
              >
                <option disabled selected>
                  Choose a size
                </option>
                <option>M</option>
                <option>S</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </label>
          </div>

          <div className="mb-2">
            <label>
              <span className="text-gray-700">Available stock</span>
              <input
                name="stock"
                type="text"
                className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Stock"
              />
            </label>
          </div>
          <div className="mb-2 col-span-2">
            <label>
              <span className="text-gray-700">Description</span>
              <textarea
                name="description"
                type="text"
                placeholder="Write Here"
                className="block border w-full mt-2 px-4 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="5"
              ></textarea>
            </label>
          </div>

          <div className="mb-6">
            <button
              type="submit"
              className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
