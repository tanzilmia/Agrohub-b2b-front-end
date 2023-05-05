/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making a Our Team member details component
            @timestap: 31/3/23 - Friday - 8.00pm
*/
import axios from "axios";
import { useEffect, useState } from "react";

export default function OurTeam() {
  const [seller, setSeller] = useState([]);

  useEffect(() => {
    axios
      .get("https://agrohub-b2b-new-server.vercel.app/auth/seller")
      .then((res) => setSeller(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mt-16 lg:mt-28 px-4 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl lg:text-2xl font-semibold text-gray-800 text-center dark:text-gray-300">
          Meet Our Talent Team
        </h3>
        <p className="mt-3 text-base text-gray-600 text-center dark:text-gray-400">
          MERN is a free and open-source JavaScript software stack for building
          dynamic web sites and web applications. Because all components of the
          MERN stack support programs that are written in JavaScript, MERN
          applications can be written in one language for both server-side and
          client-side execution environments
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {seller?.map((item, idx) => (
            <li
              key={item._id}
              className={` ${
                idx === 1
                  ? "flex flex-row-reverse items-center gap-8 p-3 hover:shadow-lg transition-all hover:scale-95 duration-300 rounded-xl"
                  : "flex items-center gap-8 p-3 hover:shadow-lg transition-all hover:scale-95 duration-300 rounded-xl"
              } ${
                idx === 3
                  ? "flex flex-row-reverse items-center gap-8 p-3 hover:shadow-lg transition-all hover:scale-95 duration-300 rounded-xl"
                  : "flex items-center gap-8 p-3 hover:shadow-lg transition-all hover:scale-95 duration-300 rounded-xl"
              }`}
            >
              <div className="flex-none">
                <img
                  src={item?.profilePic}
                  alt={item?.name}
                  className="w-40 h-40 object-cover object-center rounded-full shadow-md"
                />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col justify-center h-full">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2 dark:text-white">
                    {item?.name}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    MERN Stack Developer
                  </p>
                  <p className="text-sm text-gray-500 mt-1 text-justify dark:text-gray-400">
                    A group of technologies known as the MERN stack makes it
                    possible to develop applications more quickly. The prime
                    objective of a MERN stack developer is to create
                    applications that only use React.
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
