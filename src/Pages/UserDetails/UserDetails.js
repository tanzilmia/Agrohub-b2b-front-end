import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";

const UserDetails = () => {
  const { user } = useContext(myContext);
  console.log(user);
  return (
    // <main className="w-[100%] h-[100vh] bg-gray-100">
    //   <section className="flex flex-col align-middle justify-center h-[500px] w-[500px]">
    //     <div className="flex align-middle justify-center">
    //       {user.profilePic ? (
    //         <img
    //           class="w-[120px] rounded-full h-28 text-gray-400 -left-1"
    //           src={user.profilePic}
    //           alt={user.name}
    //         />
    //       ) : (
    //         <svg
    //           class="w-[120px] h-28 text-gray-400 -left-1"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       )}
    //     </div>
    //     <section className="font-semibold text-2xl  gap-6">
    //       <div>
    //         <p>Name: {user?.name}</p>
    //         <p>Email:{user?.email}</p>
    //       </div>
    //       <div>
    //         <p>Phone: {user?.phone}</p>
    //         <p>Role: {user?.role}</p>
    //       </div>
    //     </section>
    //   </section>
    // </main>
    <main className="bg-gray-100">
      <div className="flex bg-white align-middle justify-center w-[100%] h-[100vh] mt-20">
        <div className="mb-7 animated fadeIn">
          <div className="p-10 border border-black/80 hover:shadow hover:shadow-black/80">
            <div className="font-semibold">
              <div className="w-36 m-auto">
                <img
                  className="border border-transparent rounded-full hover:border w-[120px] h-28 border-[rgba(99,204,131)]"
                  src={user.profilePic}
                  alt={user.name}
                />
              </div>
              <h5 className="mt-5 text-xl">{user.name}</h5>
              <h5 className="mt-5 text-xl">{user.email}</h5>
              {/* <h5 className="card-title">
                {user.email}
              </h5> */}
              <p className="text-2xl flex">
                Role: {user.role}
                <br />
                <select className="ml-5" id="role">
                  <option defaultValue="Role">role</option>
                  <option value="seller">user</option>
                  <option value="seller">seller</option>
                </select>
              </p>
              <p className="phone">Phone:{user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
