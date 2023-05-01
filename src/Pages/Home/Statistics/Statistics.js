/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making statical details of company within a component
            @timestap: 31/3/23 - Friday - 6.00pm
*/
import CountUp from "react-countup";
import { FaFontAwesomeAlt } from "react-icons/fa";
export default function Statistics() {
  const stats = [
    {
      data: <CountUp enableScrollSpy end={1200} duration={4} />,
      title: "Customers",
    },
    {
      data: (
        <CountUp
          enableScrollSpy
          end={5000000}
          duration={9}
          prefix="$"
          separator=","
        />
      ),
      title: "Sales",
    },
    {
      data: <CountUp enableScrollSpy end={12} duration={2} />,
      title: "Countries",
    },
    {
      data: (
        <CountUp
          enableScrollSpy
          end={200000}
          duration={4}
          prefix="$"
          separator=","
        />
      ),
      title: "Total revenue",
    },
  ];
  return (
    <section className="mt-28">
      <div className="max-w-screen-xl  text-gray-600 gap-x-12 lg:flex mx-10">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="lg:mt-0 gap-12 mt-6 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-gray-800 text-lg text-center font-semibold lg:text-start lg:text-2xl">
              We do our best to make customers always happy
            </h3>
            <p className="mt-3 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li
                  style={{
                    width: 100,
                  }}
                  key={idx}
                  className=""
                >
                  <h4 className="text-4xl text-green-700 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
