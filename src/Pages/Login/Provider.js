// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CiGlass } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../../contextApi/Authcontext";

function Provider() {
  const { setuser, setloading, setisLogin, setLodding } = useContext(myContext);
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const SendData = (data) => {
    axios.post("https://agrohub.vercel.app/auth/google", data);
    // axios.post("https://agrohub.vercel.app/auth/google_login", data);
    axios
      .post("https://agrohub.vercel.app/auth/login", data)
      .then((res) => {
        console.log(res)
        if (res.data.message === "Login Successful") {
          const token = res.data.data;
          localStorage.setItem("accessToken", token);
          setisLogin(true);
          setLodding(false);
          Navigate(from, { replace: true });
        }
        if (res.data.message === "password not Match") {
          setError("password not Match");
        }
        if (res.data.message === "user not Valid") {
          setError("user not Valid");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // get the user data
    // axios
    //   .post(`https://agrohub.vercel.app/auth/google-user-info`, data)
    //   .then((res) => {
    //     if (res.data.message === "successfull") {
    //       setuser(res.data.data);
    //       setloading(false);
    //     }
    //   })
    //   .catch((e) => console.log(e));
    Navigate("/");
  };

  //  function onSignIn(googleUser) {
  //   console.log(googleUser)
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }
  return (
    <div className="App">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const res = await credentialResponse;
          SendData(res);
          // onSignIn(credentialResponse)
        }}
        onError={() => {
          alert("Login failed");
        }}
      />
    </div>
  );
}
export default Provider;
