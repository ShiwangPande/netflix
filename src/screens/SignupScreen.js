import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("The email address is already in use");
        } else if (error.code === "auth/invalid-email") {
          alert("The email address is not valid.");
        } else if (error.code === "auth/operation-not-allowed") {
          alert("Operation not allowed.");
        } else if (error.code === "auth/weak-password") {
          alert("The password is too weak.");
        }
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("The email address is already in use");
        } else if (error.code === "auth/invalid-email") {
          alert("The email address is not valid.");
        } else if (error.code === "auth/operation-not-allowed") {
          alert("Operation not allowed.");
        } else if (error.code === "auth/weak-password") {
          alert("The password is too weak.");
        }
      });
  };
  return (
    <div className="sigupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="singupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
// signupScreen__link;
