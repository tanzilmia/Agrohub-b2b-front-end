import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { myContext } from "../../../../contextApi/Authcontext";

const AddBrand = () => {
  const {user,header} = useContext(myContext)
  const [categorys, setCategorys] = useState([]);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");

  // get all categories
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/categories`)
      .then((res) => {
        setCategorys(res.data);
      })
      .catch((e) => console.log(e));
  }, []);


  const handleSubmit = () => {
    const newBrand = {
      category: category,
      brand: brand,
    };
    axios
      .post(`http://localhost:5000/admin/brands?email=${user?.email}`, newBrand,header)
      .then((res) => {
        if(res.data.message === "Success"){
          setBrand("")
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-medium mb-4">Add brand</h2>
      <div className="flex">
        <div className="mb-4 mr-2">
          <input
            type="text"
            name="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Enter brand Name"
            className="border border-gray-400 p-2 w-full rounded-lg"
          />
        </div>

        <div>
          <select
            className="block border w-full mt-2 px-4 py-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled defaultValue>
              Choose a category
            </option>
            {categorys.length > 0 &&
              categorys.map((category) => (
                <option key={category._id} value={category.category}>
                  {category.category}
                </option>
              ))}
          </select>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default AddBrand;
