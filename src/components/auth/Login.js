import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "../../auth/auth";

export default function Login({ history }) {
  const { user, loginUser, errors = {} } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (user) {
      history.push("/dashboard" + window.location.search);
    }
  }, [user, history]);

  //register redirect location with query params intact
  const registerURL = "/register" + window.location.search

  return (
    <div justify="center" align="center" style={{ marginTop: "4rem" }}>
      <Link to="/">Back to home</Link>
      <div style={{ paddingLeft: "11.250px" }}>
        <h4>
          <b>Login</b> below
        </h4>
        <p>
          Don't have an account? <Link to={registerURL}>Register</Link>
        </p>
      </div>
      <form
        noValidate
        onSubmit={e => {
          e.preventDefault();

          const userData = {
            email,
            password
          };

          loginUser(userData);
        }}
      >
        <div>
          <form label="Email">
            <input
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
              value={email}
              error={errors.email}
              id="email"
              type="email"

            />
          </form>

          <span style={{ color: "red" }}>
            {errors.email}
            {errors.emailnotfound}
          </span>
        </div>
        <div>
          <form label="Password">
            <input
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              error={errors.password}
              id="password"
              type="password"

            />
          </form>

          <span style={{ color: "red" }}>
            {errors.password}
            {errors.passwordincorrect}
          </span>
        </div>
        <div style={{ paddingLeft: "11.250px" }}>
          <button type="submit" label="login">Login</button> 
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
