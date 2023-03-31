import { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
const OfferTimeout = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = expiryDate.getTime() - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [expiryDate]);

  return (
    <div className="flex items-center justify-center space-x-2">
      <CountdownItem value={timeLeft.days} label="days" />
      <CountdownItem value={timeLeft.hours} label="hours" />
      <CountdownItem value={timeLeft.minutes} label="minutes" />
      <CountdownItem value={timeLeft.seconds} label="seconds" />
    </div>
  );
};

const CountdownItem = ({ value, label }) => {
  return (
    <div className="flex items-center justify-center space-x-1 mr-4 bg-green-700 py-2 px-4 flex-grow">
      <CountdownValue value={value} />
      <CountdownLabel className={"text-xl lg:text-2xl xl:text-3xl font-bold"}>
        {label}
      </CountdownLabel>
    </div>
  );
};

const CountdownValue = tw.div`
  text-2xl font-bold
  animate-scale-in
  animation-duration[1s]
  animation-delay[0.2s]
  animation-fill-mode[forwards]
`;

const CountdownLabel = tw.div`
  text-sm font-medium
  animate-fade-in
  animation-duration[0.5s]
  animation-delay[0.4s]
  animation-fill-mode[forwards]
`;

export default OfferTimeout;
