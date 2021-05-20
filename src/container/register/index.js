import React from "react";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import Card from "../../components/UI/card";
import { signup } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";

/**
 * @author
 * @function RegisterPage
 **/

const RegisterPage = (props) => {
  const [firstName, setFIrstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const registerUser = (e) => {
    e.preventDefault();
    
    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(signup(user));
  };
  const auth = useSelector((state) => state.auth);
  if (auth.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="registerContainer">
        <Card>
          <form onSubmit={registerUser}>
            <h2>Signup</h2>
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFIrstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />

            <input
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <div>
              <button>Sign up</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default RegisterPage;
