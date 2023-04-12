// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect } from "react";
import { CiGlass } from "react-icons/ci";

function Provider() {
  const SendData = (data) => {
    axios.post("http://localhost:5000/auth/google", data);
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
