/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making a offer flas card component
            @timestap: 31/3/23 - Friday - 4.30pm
*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const OfferFlashCard = () => {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(23);
  const [mins, setMins] = useState(59);
  const [secs, setSecs] = useState(60);
  const [timesUp, setTimesUp] = useState(0);

  useEffect(() => {
    // set the time out actions
    setTimeout(() => {
      if (days >= 0) {
        setSecs(secs - 1);

        if (hours === 0) {
          setDays(days - 1);
        }
        if (mins === 0) {
          setHours(hours - 1);

          setMins(59);
        }
        if (secs === 0) {
          setMins(mins - 1);

          setSecs(59);
        }
      } else if (days < 0) {
        setTimesUp(1);
      }
    }, 1000);
  }, [days, hours, mins, secs]);

  return (
    <section
      className={`relative  bg-cover bg-center bg-no-repeat flex flex-col-reverse items-center lg:flex-row mt-28 text-white mx-10 rounded-lg `}
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2016/07/01/20/25/rice-1491868_960_720.jpg)`,
      }}
    >
      {/* div for layer of background */}
      <div className="absolute inset-0 bg-gray/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-gray/95 sm:to-white/25"></div>

      {/* left div */}
      <div className="relative px-4 md:py-24 py-16 lg:py-32 sm:px-6 md:ml-8">
        <div className="max-w-xl text-center sm:text-left">
          {!timesUp ? (
            <h1 className="text-3xl font-extrabold lg:text-4xl">
              Get
              <span className="mx-4 bg-green-700 rounded-full px-3 py text-white">
                30%
              </span>
              Off
            </h1>
          ) : (
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Get the best grain
            </h1>
          )}

          <p className="mt-4 max-w-lg lg:text-xl lg:text-justify">
            Get the best grain of the country. To determine the best grain of a
            particular country, several factors such as climate, soil type,
            irrigation, and agricultural practices are taken into consideration.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="/"
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              Order Now
            </Link>

            <Link
              to="/"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            >
              Check details
            </Link>
          </div>
        </div>
      </div>

      {/* right div */}

      <div className="relative mt-16 flex  gap-4 text-center lg:mx-24 ">
        {/* timout section */}
        {!timesUp ? (
          <div className="flex text-2xl lg:text-4xl items-center justify-center font-semibold lg:ml-0 ml-4 transform transition-all">
            {/* for day */}
            <div className={`mr-4 bg-green-700 py-2 px-4 flex-grow rounded-lg`}>
              <h1>{days}</h1>
              <h4 className="text-xl  lg:text-3xl font-semibold ">Days</h4>
            </div>

            {/* for hours */}
            <div className={`mr-4 bg-green-700 py-2 px-4 flex-grow rounded-lg`}>
              <h1>{hours}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold ">
                Hours
              </h4>
            </div>
            {/* mins flip */}
            <div className={`mr-4 bg-green-700 py-2 px-4 flex-grow rounded-lg`}>
              <h1>{mins}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold ">
                Mins
              </h4>
            </div>
            {/* secs flip */}

            <div
              className={`mr-4 bg-green-700 py-2 px-4 flex-grow  delay-75 rounded-lg`}
            >
              <h1>{secs}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-semibold  ">
                Secs
              </h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default OfferFlashCard;
