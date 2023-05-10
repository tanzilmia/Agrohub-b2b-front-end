import axios from "axios";
import React, { useEffect, useState } from "react";
import { TbMessage2Share } from "react-icons/tb";

const HelpCenter = () => {
  const [Officers, setOfficers] = useState([]);
  const [Doctors, setDoctors] = useState([]);
  useEffect(() => {
    try {
      axios
        .get(` https://agrohub-b2b-new-server.vercel.app/admin/officers`)
        .then((res) => setOfficers(res.data));
      axios
        .get(` https://agrohub-b2b-new-server.vercel.app/admin/doctors`)
        .then((res) => setDoctors(res.data));
    } catch (e) {}
  }, []);

  console.log(Officers);
  console.log(Doctors);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-6">Our Doctors </h1>
      <div className="flex flex-wrap justify-center mx-auto">
        <div className="flex flex-wrap  mx-auto">
          {/* doctors */}

          {Doctors?.length &&
            Doctors.map((doctor) => (
              <div
                key={doctor._id}
                className="md:flex bg-white rounded-lg p-6 mx-1 shadow-lg"
              >
                <img
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto md:mx-0 md:mr-6"
                  src={doctor.doctorPic}
                  alt={`Picture of ${doctor.doctorName}`}
                />
                <div className="text-center md:text-left">
                  <h2 className="text-lg font-semibold">{doctor.doctorName}</h2>
                  <p className="text-gray-600">{doctor.doctorEmail}</p>
                  <p className="text-gray-600">{doctor.doctorPhone}</p>
                  <a
                    href={doctor.facebookUrl}
                    className="inline-block mt-2 px-4 py-2 text-sm font-medium leading-5 text-white bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:shadow-outline-green focus:border-green-600 active:bg-green-600 transition duration-150 ease-in-out"
                  >
                    <TbMessage2Share className="inline mr-1" />
                    Visite Profile
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      <h1 className="text-center text-2xl font-bold my-5">
        Agreeculture officer
      </h1>

      <div className="flex flex-wrap justify-center mx-auto my-5">
        <div className="flex flex-wrap  mx-auto">
          {/* doctors */}

          {Officers?.length &&
            Officers.map((doctor) => (
              <div
                key={doctor._id}
                className="md:flex bg-white rounded-lg p-6 mx-1 shadow-lg"
              >
                <img
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full mx-auto md:mx-0 md:mr-6"
                  src={doctor.doctorPic}
                  alt={`Picture of ${doctor.officerName}`}
                />
                <div className="text-center md:text-left">
                  <h2 className="text-lg font-semibold">
                    {doctor.officerName}
                  </h2>
                  <p className="text-gray-600">{doctor.officerEmail}</p>
                  <p className="text-gray-600">{doctor.officerPhone}</p>
                  <a
                    href={doctor.facebookUrl}
                    className="inline-block mt-2 px-4 py-2 text-sm font-medium leading-5 text-white bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:shadow-outline-green focus:border-green-600 active:bg-green-600 transition duration-150 ease-in-out"
                  >
                    <TbMessage2Share className="inline mr-1" />
                    Visite Profile
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
