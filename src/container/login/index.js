import React from "react";
import Layout from "../../components/layout";
import Card from "../../components/UI/card";
import "./style.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isLoggerInUser, signin } from "../../action";
import { Redirect } from "react-router";
/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!auth.authenticated) {
  //     dispatch(isLoggerInUser());
  //   }
  // }, []);

  const userLogin = (e) => {
    e.preventDefault();
    if (email == "") {
      alert("email is required");
      return;
    }
    if (password == "") {
      alert("password is required");
      return;
    }

    dispatch(signin({ email, password }));
  };
  if (auth.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="loginContainer">
        <Card>
          <form onSubmit={userLogin}>
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
              <button>Login</button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
