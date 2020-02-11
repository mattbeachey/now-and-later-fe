import React, {useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/auth";

export default function({ history }) {

  const { user } = useContext(AuthContext);

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/dashboard" + window.location.search);
    }
  }, [user, history]);

  return (
    <div style={{ height: "75vh" }}>
      <div align="center" justify="center">
        <h4>
          <b>Build</b> a login/auth app with the{" "}
          <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
          scratch
        </h4>
        <p>
          Create a (minimal) full-stack app with user authentication via
          passport and JWTs
        </p>
        <br />
        <div>
          <Link
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
