import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AdditionalInformation = () => {
  const products = useLoaderData();
  const [additionalInformation, setAdditionalInformation] = useState({
    name: "",
    feature: "",
  });

  const datas = [
    { ...additionalInformation },
    {
      name: "Standing screen display size",
      feature: "Screen display Size 10.4",
    },
    { name: "Color", feature: "Gray, Dark gray, Mystic black" },
    { name: "Screen Resolution", feature: "1920 x 1200 Pixels" },
    { name: "Max Screen Resolution", feature: "2000 x 1200" },
    { name: "Processor", feature: "2.3 GHz (128 GB)" },
    {
      name: "Graphics Coprocessor",
      feature: "Exynos 9611, Octa Core (4x2.3GHz + 4x1.7GHz)",
    },
    { name: "Wireless Type", feature: "802.11a/b/g/n/ac, Bluetooth" },
    { name: "Average Battery Life (in hours)", feature: "	13 Hours" },
    { name: "Series", feature: "	Samsung Galaxy tab S6 Lite WiFi" },
    { name: "Item model number", feature: "SM-P6102ZAEXOR" },
    { name: "Hardware Platform", feature: "Android" },
    { name: "Operating System", feature: "Android 12" },
    {
      name: "Batteries",
      feature: "1 Lithium Polymer batteries required. (included)",
    },
    { name: "Product Dimensions", feature: "0.28 x 6.07 x 9.63 inches" },
  ];
  const onSubmit = (event) => {
    event.preventDefault();
    const infoName = event.target.name.value;
    const infoValue = event.target.value.value;
    setAdditionalInformation([{ infoName, infoValue }]);
  };
  console.log(additionalInformation);

  return (
    <div>
      <div className="mx-5 mb-20">
        <table className="border-2 border-black w-full ">
          {datas.map((data) => (
            <tr className="border-2 border-black dark:border-gray-300">
              <td className="border-2 border-black dark:border-gray-300 bg-gray-300 dark:text-gray-300 dark:bg-gray-500 py-2 px-4 text-xl">
                {data.name}
              </td>
              <td className="border-2 border-black dark:border-gray-300 py-2 px-4 text-xl dark:text-gray-300">
                {data.feature}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <form
        onSubmit={onSubmit}
        className="mx-20 mb-6 md:grid md:grid-cols-2 gap-x-20"
      >
        <div className="mb-2">
          <label>
            <span className="text-gray-700 dark:text-gray-300">
              Information name
            </span>
            <input
              name="name"
              type="text"
              className="block border w-full mt-2 px-4 py-2 dark:bg-[#5B5B5C]  border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Type here..."
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            <span className="text-gray-700 dark:text-gray-300">
              Information value
            </span>
            <input
              name="value"
              type="text"
              className="block border w-full mt-2 px-4 py-2 dark:bg-[#5B5B5C] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Type here..."
            />
          </label>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdditionalInformation;
