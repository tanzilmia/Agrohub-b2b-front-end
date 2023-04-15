/* 
            @Project: Agrohub (b2b website)
            @Name: MD. Mahiuddin Tuhin
            @Task: Making a Our Team member details component
            @timestap: 31/3/23 - Friday - 8.00pm
*/
import { Link } from "react-router-dom";

export default function OurTeam() {
  const team = [
    {
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      name: "Martiana dialan",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "/",
      twitter: "/",
      github: "/",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      name: "Micheal colorand",
      title: "Software engineer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "/",
      twitter: "/",
      github: "/",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      name: "Daniel martin",
      title: "Product designer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "/",
      twitter: "/",
      github: "/",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      name: "Vicky tanson",
      title: "Product manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy",
      linkedin: "/",
      twitter: "/",
      github: "/",
    },
  ];

  return (
    <section className="">
      <div className="mt-28 mx-10">
        <div className="max-w-xl">
          <h3 className="text-gray-800 text-xl lg:text-start text-center font-semibold lg:text-2xl">
            Meet our talent team
          </h3>
          <p className="text-gray-600 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid  gap-8 lg:grid-cols-2">
            {team.map((item, idx) => (
              <li
                key={idx}
                className="gap-8 sm:flex hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-60 border border-gray-300 transition duration-300 ease-in-out hover:border-indigo-600">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt=""
                  />
                </div>
                <div className="mt-4 lg:p-0 p-3 lg:space-y-5 space-y-2">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-indigo-600">{item.title}</p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <Link to={item.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                    <Link to={item.github}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="currentColor"
                          d="M24 0C10.745 0 0 10.745 0 24c0 10.629 6.899 19.639 16.457 22.833 1.2.221 1.638-.521 1.638-1.159 0-.57-.022-2.079-.034-4.083-6.689 1.447-8.109-3.23-8.109-3.23-1.094-2.794-2.671-3.536-2.671-3.536-2.179-1.491.164-1.458.164-1.458 2.409.17 3.678 2.469 3.678 2.469 2.142 3.679 5.621 2.617 6.988 2 .216-1.551.837-2.617 1.522-3.219-5.323-.604-10.912-2.661-10.912-11.846 0-2.62.936-4.764 2.469-6.436-.249-.607-1.07-3.046.234-6.347 0 0 2.01-.645 6.579 2.458 1.906-.531 3.952-.797 5.982-.807 2.029.01 4.076.276 5.982.807 4.569-3.103 6.576-2.458 6.576-2.458 1.305 3.301.485 5.74.236 6.347 1.536 1.672 2.466 3.816 2.466 6.436 0 9.211-5.599 11.236-10.938 11.829.861.74 1.623 2.205 1.623 4.442 0 3.205-.03 5.787-.03 6.567 0 .64.43 1.386 1.65 1.157C41.104 43.636 48 34.628 48 24c0-13.255-10.745-24-24-24z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
