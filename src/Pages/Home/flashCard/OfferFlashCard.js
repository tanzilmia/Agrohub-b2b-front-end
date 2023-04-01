/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making a offer flas card component
            @timestap: 31/3/23 - Friday - 4.30pm
*/
import React, { useEffect, useState } from "react";
import background from "./../../../Assets/Images/flashcardimage/grain.jpg";
const OfferFlashCard = () => {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(23);
  const [mins, setMins] = useState(59);
  const [secs, setSecs] = useState(60);
  const [dayflip, setDayFlip] = useState(true);
  const [hoursflip, setHoursFlip] = useState(true);
  const [minsflip, setMinsFlip] = useState(true);
  const [secsflip, setSecsFlip] = useState(true);
  let timesUp = null;

  useEffect(() => {
    // set the time out actions
    setTimeout(() => {
      if (days >= 0) {
        setSecs(secs - 1);
        // setSecsFlip(false);

        if (hours === 0) {
          setDays(days - 1);
          //   setDayFlip(false);
        }
        if (mins === 0) {
          setHours(hours - 1);
          //   setHoursFlip(false);
          setMins(59);
        }
        if (secs === 0) {
          setMins(mins - 1);
          //   setMinsFlip(false);
          setSecs(59);
        }
      } else if (days < 0) {
        timesUp = 1;
      }
    }, 1000);
  }, [secs]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (!secsflip) {
  //         setSecsFlip(true);
  //       }
  //       //   setSecsFlip(true);
  //       //   setDayFlip(true);
  //       //   setHoursFlip(true);
  //       //   setMinsFlip(true);
  //     }, 900);
  //   }, [secsflip, minsflip, hoursflip, dayflip]);

  return (
    <section
      className={`relative  bg-cover bg-center bg-no-repeat flex flex-col-reverse items-center lg:flex-row my-20`}
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* div for layer of background */}
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      {/* left div */}
      <div className="relative px-4 md:py-24 py-16 lg:py-32 sm:px-6 md:ml-8">
        <div className="max-w-xl text-center sm:text-left">
          {!timesUp ? (
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Get
              <span className="mx-4 bg-green-700 rounded-full px-6 py text-white">
                30%
              </span>
              Off
            </h1>
          ) : (
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Get the best grain
            </h1>
          )}

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-justify">
            Get the best grain of the country. To determine the best grain of a
            particular country, several factors such as climate, soil type,
            irrigation, and agricultural practices are taken into consideration.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              Order Now
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            >
              Check details
            </a>
          </div>
        </div>
      </div>

      {/* right div */}

      <div className="relative mt-16 flex  gap-4 text-center lg:mx-24 ">
        {/* timout section */}
        {!timesUp ? (
          <div className="flex text-2xl lg:text-4xl xl:text-5xl items-center justify-center gap-y-2 font-bold transform transition-all">
            {/* for day */}
            <div
              className={`mr-4 bg-green-700 py-2 px-4 flex-grow ${
                dayflip ? "flip-front" : "flip-back"
              }`}
            >
              <h1>{days}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold ">
                Days
              </h4>
            </div>

            {/* for hours */}
            <div
              className={`mr-4 bg-green-700 py-2 px-4 flex-grow ${
                hoursflip ? "flip-front" : "flip-back"
              }`}
            >
              <h1>{hours}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold ">
                Hours
              </h4>
            </div>
            {/* mins flip */}
            <div
              className={`mr-4 bg-green-700 py-2 px-4 flex-grow ${
                minsflip ? "flip-front" : "flip-back"
              }`}
            >
              <h1>{mins}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold  ">
                Mins
              </h4>
            </div>
            {/* secs flip */}

            <div
              className={`mr-4 bg-green-700 py-2 px-4 flex-grow ${
                secsflip ? "flip-front" : "flip-back"
              } delay-75`}
            >
              <h1>{secs}</h1>
              <h4 className="text-xl lg:text-2xl xl:text-3xl font-bold  ">
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
