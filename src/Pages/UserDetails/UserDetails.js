import React, { useContext } from "react";
import { myContext } from "../../contextApi/Authcontext";

const UserDetails = () => {
  const { user } = useContext(myContext);
  if(!user) return "Loading.."
  return (
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
                  <option defaultValue="Role">Role</option>
                  <option value="seller">user</option>
                  <option value="seller">seller</option>
                </select>
              </p>
              <p className="phone">Phone: {user.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserDetails;
