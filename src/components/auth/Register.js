import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { AuthContext } from "../../auth/auth";

export default function Register({ history }) {
  // todo: errors my friend...
  const { user, registerUser, errors = {} } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

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
      
        <Link to="/" className="landingLink">Back to home</Link>
        <div style={{ paddingLeft: "11.250px" }}>
        <h3 className="landing">
            Already have an account? <Link to="/login" className="landingLink">Log in</Link>
          </h3>
        </div>
        <form
          className="loginForms"
          noValidate
          onSubmit={e => {
            e.preventDefault();

            const newUser = {
              name,
              email,
              password,
              password2
            };

            registerUser(newUser, history);
          }}
        >
          <div>
            <form label="Name">
              <input
                placeholder="Name"
                onChange={event => setName(event.target.value)}
                value={name}
                error={errors.name}
                id="name"
                type="text"
                className={classnames("", {
                  invalid: errors.name
                })}
              />
            </form>
            <span style={{ color: "red" }}>{errors.name}</span>
          </div>
          <div>
            <form label="Email" className="loginForms">
              <input
                placeholder="Email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email
                })}
              />
            </form>
            <span style={{ color: "red" }}>{errors.email}</span>
          </div>
          <div>
            <form label="Password" className="loginForms">
              <input
                placeholder="Password"
                onChange={event => setPassword(event.target.value)}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password
                })}
              />
            </form>
            <span style={{ color: "red" }}>{errors.password}</span>
          </div>
          <div>
            <form label="Confirm Password" className="loginForms">
              <input
                placeholder="Confirm Password"
                onChange={event => setPassword2(event.target.value)}
                value={password2}
                error={errors.password2}
                id="password2"
                type="password"
                className={classnames("", {
                  invalid: errors.password2
                })}
              />
            </form>
            <span style={{ color: "red" }}>{errors.password2}</span>
          </div>
          <div style={{ paddingLeft: "11.250px" }}>
            <button type="submit" label="Sign up">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
