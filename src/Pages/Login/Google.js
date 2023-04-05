import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Provider from "./Provider";
const Google = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Provider />
    </GoogleOAuthProvider>
  );
};

export default Google;
