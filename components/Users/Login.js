import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function Login(props) {
  // const [showPass, setShowPass] = useState(false);
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: ""
  // });

  // const { email, password } = formData;




  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);
// const handleEmail = (e) => {
  
//     setEmail(e.target.value);
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };
  const handleApi = async (email, password) => {
   const formData ={ "email":email,"password":password

   }
   const url = "https://test.e-prathibha.com/apis/login"
    await axios.post(url,formData
    )
      .then((result) => {
        console.log(result);
      })
      // .catch((error) => {
      //   console.log(error);
      // });
  };








  // function hangleChange(e) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  //   console.log(formData);
  // }
  // const refPassword = useRef();
  // function showPassword() {
  //   setShowPass(!showPass);
  //   refPassword.current.type = showPass ? "password" : "text";
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     email: "",
  //     password: ""
  //   });
  //   setShowPass(false);
  // };

  const canSignIn =
  [email, password].every(Boolean); 

  return (
    <div className="login-wrapper ">
      <form  className="common-background">
      <h2>Login</h2>
          <label htmlFor="email"  
         >Email:</label>
          <input
      onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="abc@example.com"
            autoFocus
            required
          />
        <label htmlFor="password"   
        
         >Password:</label>
        <div className="eye">
          <input
         
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            autoComplete
            value={password}
            required
          />
          {/* {showPass ? (
            <i onClick={showPassword}>{Eye}</i>
          ) : (
            <i onClick={showPassword}>{EyeSlash}</i>
          )} */}
        </div>
        <button className="loginButton" type="submit" onClick={handleApi(email,password)} disabled={!canSignIn}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
