import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //connect with input button
  const handleEmailWithOnblur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordWithOnblur = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <div className="input-group">
        <form onSubmit={handleLogIn}>
          <label htmlFor="email">Email</label> <br />
          <input onBlur={handleEmailWithOnblur} type="email" required /> <br />
          <label htmlFor="">Password</label> <br />
          <input onBlur={handlePasswordWithOnblur} type="password" required />
          <label style={{ color: "red" }}>{error?.message}</label>
          <label>{loading && <p>Loading...</p>}</label>
          <button className="button"> Login</button>
          <p className="create-new">
            New to Ema john? <Link to={"/signup"}> Create new account</Link>
          </p>
          <p className="or">_______________ or _________________</p>
          <button className="google-sign">
            <i
              style={{ fontSize: "22px", paddingRight: "5px" }}
              className="fa-brands fa-google"
            ></i>{" "}
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
