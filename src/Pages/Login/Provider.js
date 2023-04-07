// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { CiGlass } from "react-icons/ci";

function Provider() {
  const SendData = (data) => {
    axios.post("https://agrohub-b2b-backend.vercel.app/auth/google", data);
  };

  return (
    <div className="App">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const res = await credentialResponse;
          SendData(res);
        }}
        onError={() => {
          alert("Login failed");
        }}
      />
    </div>
  );
}
export default Provider;
