import React from "react";
import signUpImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

function SignUp() {
  return (
    <>
      <h1>Create an account</h1>

      <div className="column">
        <Illustration image={signUpImage} alt="Sign Up" />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUp;
