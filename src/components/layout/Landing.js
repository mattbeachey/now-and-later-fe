import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/auth";

export default function ({ history }) {

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/dashboard" + window.location.search);
    }
  }, [user, history]);

  return (
    <div className="mainCont3">
      <div style={{ height: "75vh" }}>
        <div className="headerBig">Now </div>
        <div className="headerBig">and Later</div>
        <h2 className="landing">A place to store all the things you learn on youtube.</h2>
        <div className="landingBox">
          <h4 className="landing">Ever find a valuable tidbit 30 minutes into a two hour video? Now and Later allows you to easily save the exact part of a video you want to return to with a click (after you’ve installed the Chrome plugin). </h4>
          <h3 className="landingLink">Get the Chrome Extension!</h3>
        </div>
        <br />
        <div>
          <Link
            className="landingLink"
            to="/register"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
          >
            Register
          </Link>
        </div>
        <div>
          <Link
            className="landingLink"
            to="/login"
            style={{
              width: "140px",
              borderRadius: "3px",
              letterSpacing: "1.5px"
            }}
          >
            Log In
          </Link>
        </div>
      </div>
    </div>

  );
}
