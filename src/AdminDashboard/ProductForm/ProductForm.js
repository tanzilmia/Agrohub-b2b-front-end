import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "../../contextApi/Authcontext";

const ProductForm = () => {
  const [size, setSize] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user, header } = useContext(myContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;

    const name = form.productName.value;
    const oldPrice = form.oldPrice.value;
    const newPrice = form.newPrice.value;
    const category = form.category.value;
    const brand = form.brand.value;
    const stock = form.stock.value;
    const description = form.description.value;

    const handleImageUpload = async () => {
      try {
        const formDataArray = selectedImages.map((image, index) => {
          const formData = new FormData();
          formData.append("image", image);
          formData.append("name", `Image ${index + 1}`);
          return formData;
        });

        const uploadPromises = formDataArray.map((formData) =>
          axios.post(
            `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_KEY}`,
            formData
          )
        );

        const responses = await Promise.all(uploadPromises);
        const urls = responses.map((response) => response.data.data.url);
        const product = {
          sellerName: user?.name,
          sellerEmail: user?.email,
          sellerPhone: user?.phone,
          sellerProfilePicture: user?.profilePic,
          name,
          images: urls,
          oldPrice,
          newPrice,
          size,
          stock,
          rating: 0,
          description,
          role: user?.role,
          additionalInfo: [{}],
          totalSells: 0,
          totalQuantity: 0,
          category: category,
          brand: brand,
        };

        axios
          .post(
            `http://localhost:5000/seller/product?email=${user?.email}`,
            product,
            header
          )
          .then((res) => {
            console.log(res.data);
            navigate("/selling_products");
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    };

    await handleImageUpload();

    setLoading(false);
  };

  const handleImageSelection = (event) => {
    const files = event.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };

  const handleCategoryChange = (event) => {
    event.preventDefault();
    const category = event.target.value;

    axios
      .get(`http://localhost:5000/admin/brands?category=${category}`)
      .then((res) => {
        setBrands(res.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/categories`)
      .then((res) => setCategorys(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="flex justify-center w-full">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-[#29BA2F]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.732V24c4.418 0 8-3.582 8-8h-4a4.01 4.01 0 01-4 4.732z"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="w-full">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40  ">
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
                    required
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
                    required
                    onChange={handleImageSelection}
                  />
                </label>
              </div>
              <div className="mb-2 col-span-1">
                <label>
                  <span className="text-gray-700">Old Price</span>
                  <input
                    name="oldPrice"
                    type="number"
                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="Old Price"
                    required
                  />
                </label>
              </div>
              <div className="mb-2 col-span-1">
                <label>
                  <span className="text-gray-700">New Price</span>
                  <input
                    name="newPrice"
                    type="number"
                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="New Price"
                    required
                  />
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Category</span>
                  <select
                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="category"
                    required
                    onChange={handleCategoryChange}
                  >
                    <option disabled selected>
                      Choose a category
                    </option>

                    {categorys.length &&
                      categorys.map((category) => (
                        <option key={category._id}>{category.category}</option>
                      ))}
                  </select>
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Brand</span>
                  <select
                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="brand"
                    required
                  >
                    {!brands?.length && <option>Choose a brand</option>}
                    {brands?.length &&
                      brands?.map((brand) => (
                        <option key={brand?._id}>{brand?.brand}</option>
                      ))}
                  </select>
                </label>
              </div>
              <div className="mb-2">
                <label>
                  <span className="text-gray-700">Size</span>
                  <select
                    className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="size"
                    required
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
                    required
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
                    required
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
      )}
    </div>
  );
};

export default ProductForm;
