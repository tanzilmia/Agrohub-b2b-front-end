/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making a FAQ component
            @timestap: 31/3/23 - Friday - 9.00pm
*/
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-base text-gray-700 font-medium dark:text-gray-300">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500 text-justify dark:text-gray-400">
            {faqsList.a}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "What is sustainable agriculture?",
      a: "Sustainable agriculture is a farming practice that focuses on producing food and fiber without harming the environment or depleting natural resources. It is a way of farming that meets the needs of the present without compromising the ability of future generations to meet their own needs."
    },
    {
      q: "What is organic farming?",
      a: "Organic farming is a method of agriculture that uses natural and sustainable techniques to grow crops and raise livestock. It relies on natural fertilizers, pest control methods, and crop rotation to maintain soil health and fertility."
    },
    {
      q: "What are the benefits of buying local produce?",
      a: " Buying local produce supports local farmers and promotes sustainable agriculture practices. It also ensures that consumers are getting fresh, healthy produce that hasn't traveled long distances or been treated with preservatives.erated.",
    },
    {
      q: "What is crop rotation?",
      a: "Crop rotation is the practice of planting different crops in a specific sequence to help maintain soil health and prevent the buildup of pests and diseases. It is a common practice in sustainable and organic farming.",
    },
    {
      q: "What is integrated pest management (IPM)?",
      a: "Integrated pest management (IPM) is a holistic approach to pest control that combines biological, cultural, and chemical methods to minimize the impact of pests on crops. It focuses on preventing pests from becoming a problem rather than relying solely on chemical pesticides.",
    },
  ];

  return (
    <section className="leading-relaxed mt-28 px-4 md:px-8 mx-10">
      <div className="space-y-3 text-center">
        <h1 className="lg:text-2xl text-xl text-gray-800 font-semibold dark:text-gray-200">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-base dark:text-gray-300">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-7xl">
        {faqsList.map((item, index) => (
          <FaqsCard key={index} faqsList={item} />
        ))}
      </div>
    </section>
  );
}
