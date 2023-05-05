import { Link } from "react-router-dom";

export default function HireUsToPromot() {
  return (
    <section className="mt-28">
      <div className="mx-10">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              className="md:max-w-lg rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl   mt-6 md:mt-0 lg:max-w-2xl lg:space-y-10 space-y-5">
            <h3 className="text-indigo-600 text-center lg:text-start font-semibold">
              Professional services
            </h3>
            <p className="text-gray-800 text-lg font-semibold lg:text-2xl text-center lg:text-start dark:text-gray-300">
              Hire Business Promoter to Promot Your Business
            </p>
            <p className="mt-3 dark:text-gray-400 text-gray-600 text-justify ">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum, sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium
            </p>
            <Link
              to="/"
              className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"
            >
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
