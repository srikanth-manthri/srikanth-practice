import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { SingUp } from "../../Redux/Action";
import { useHistory } from "react-router-dom";

const Eye = <FontAwesomeIcon className="icon" icon={['fas','eye']} />;
const EyeSlash = <FontAwesomeIcon className="icon" icon={['fas','eye-slash']} />;

function Login() {
  const [email, setEmail] = useState("");
    const [name, setName] = useState("");
   
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [phone, setPhone] = useState("");

const history=useHistory();
    const dispatch=useDispatch();
  

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(email !== "" && 
        name !== "" &&
       
         password !==""  &&
         confirm !==""&&
         phone!==""


         ){  dispatch(SingUp(email,name,password,confirm,phone,history))

        }else{
            alert("enter details")
        }
    }
  
  return (
    <div>
        <h2>Enter your details</h2>
        <form onSubmit={handleSubmit} className="form-control">
            <input type="email" placeholder="enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
            <input type="text" placeholder="enter Name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
            {/* <input type="tel" placeholder="enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/> */}
            <input type="text" placeholder="enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
            <input type="text" placeholder="enter confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/><br/><br/>
            <input type="tel" placeholder="enter phone number" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
              
            <button className='btn btn-outline-danger'>SignUp</button><br/><br/>
            {/* <span>already have account   <a href='/'>Login Here </a></span> */}
        </form>
    </div>
  )
}
//   const [showPass, setShowPass] = useState(false);
//   const [formData, setFormData] = useState({
//     name:" ",
//     email:"",
//     password: "",
//     confirmPassword:"",
//     number:" "
//   });
// const dispatch=useDispatch();
// const history =useHistory();
// const state=useSelector(state=>state.signUp)
//   const { name,email, password,confirmPassword,number } = formData;
//   function hangleChange(e) {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     console.log(formData);
//   }
//   const refConfirmPassword = useRef();
//   function showPassword() {
//     setShowPass(!showPass);
//     refConfirmPassword.current.type = showPass ? "password" : "text";
//   }
// // if(state.status===200){
// //   history.push("/verify")
// // }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     dispatch(SingUp(formData,history))
//     setFormData({
     
//       name:"",
//       email,
//       password: "",
//       confirmPassword:"",
//       number:""
//     });
//     setShowPass(false);
//   };
//   const canSignUp =
//   [name,email, password, confirmPassword,number].every(Boolean); 
//   return (
//     <div className="login-wrapper ">
//       <form onSubmit={handleSubmit} className="common-background">
//       <h2>Sign Up</h2>
          
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             onChange={hangleChange}
//             id="name"
//             name="name"
//             autoComplete
//             value={name}
//             required
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             onChange={hangleChange}
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             placeholder="abc@example.com"
//             autoFocus
//             required
//           />
//         <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             onChange={hangleChange}
//             id="password"
//             name="password"
//             autoComplete
//             value={password}
//             required
//           />
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <div className="eye">
//           <input
//             ref={refConfirmPassword}
//             type="password"
//             onChange={hangleChange}
//             id="confirmPassword"
//             name="confirmPassword"
//             autoComplete
//             value={confirmPassword}
//             required
//           />
//           {showPass ? (
//             <i onClick={showPassword}>{Eye}</i>
//           ) : (
//             <i onClick={showPassword}>{EyeSlash}</i>
//           )}
//         </div>
//         <label htmlFor="number">Number:</label>
//           <input
//             type="tel"
//             onChange={hangleChange}
//             id="number"
//             name="number"
//             autoComplete
//             value={number}
//             required
//           />
//         <button className="loginButton" type="submit" disabled={!canSignUp}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

export default Login;
