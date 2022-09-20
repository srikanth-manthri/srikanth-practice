import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function Login(props) {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword:"",
  });

  const { email, password,confirmPassword } = formData;
  function hangleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  }
  const refConfirmPassword = useRef();
  function showPassword() {
    setShowPass(!showPass);
    refConfirmPassword.current.type = showPass ? "password" : "text";
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: "",
      confirmPassword:"",
    });
    setShowPass(false);
  };
  const canSignUp =
  [email, password, confirmPassword].every(Boolean); 
  return (
    <div className="login-wrapper ">
      <form onSubmit={handleSubmit} className="common-background">
      <h2>Sign Up</h2>
          <label htmlFor="email">Email:</label>
          <input
            onChange={hangleChange}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            autoFocus
            required
          />
        <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={hangleChange}
            id="password"
            name="password"
            autoComplete
            value={password}
            required
          />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <div className="eye">
          <input
            ref={refConfirmPassword}
            type="password"
            onChange={hangleChange}
            id="confirmPassword"
            name="confirmPassword"
            autoComplete
            value={confirmPassword}
            required
          />
          {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )}
        </div>
        <button className="loginButton" type="submit" disabled={!canSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Login;
