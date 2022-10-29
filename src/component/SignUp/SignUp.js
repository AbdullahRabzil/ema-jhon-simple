import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  //for email, password, confirm password input
  const handleEmailWithOnblur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordWithOnblur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordWithOnblur = (e) => {
    setConfirmPassword(e.target.value);
  };

  // when i am sign up then show the shop button
  if (user) {
    navigate("/login");
  }

  //sign up button
  const handleSubmitWithOnSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did not match");
      return;
    }
    if (password.length !== 6) {
      setError("Please Atleast type a 6 latter ");
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="input-group">
        <form onSubmit={handleSubmitWithOnSubmit}>
          <label htmlFor="email">Email</label> <br />
          <input onBlur={handleEmailWithOnblur} type="email" required /> <br />
          <label htmlFor="">Password</label> <br />
          <input onBlur={handlePasswordWithOnblur} type="password" required />
          <label htmlFor="">Confirm Password</label> <br />
          <input
            onBlur={handleConfirmPasswordWithOnblur}
            type="password"
            required
          />
          <label className="" style={{ color: "red" }}>
            {error}
          </label>
          <button className="button"> Sign up</button>
          <p className="create-new">
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p className="or">_______________ or _________________</p>
          <button className="google-sign">
            <i
              style={{ fontSize: "22px", paddingRight: "5px" }}
              class="fa-brands fa-google"
            ></i>{" "}
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
