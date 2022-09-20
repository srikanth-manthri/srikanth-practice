import axios from 'axios';

var baseUrl = "https://fakestoreapi.com/products";

export const addCart =(product)=>{
    return{
        type:"CART_LIST",
        payload:product
    }
}
export const incrementAction =(product)=>{
    return{
        type:"CART_INCRIMENT",
        payload:product
    }
}
export const decrementAction =(product)=>{
    return{
        type:"CART_DECREMENT",
        payload:product
    }
}
export const deleteAction =(product)=>{
    return{
        type:"CART_DELETE",
        payload:product
    }
}
export const Log =(formData,history)=>{
    return async (dispatch)=>{
      const url ="https://e-prathibha.com/apis/login";
      await axios.post(url,formData).then((res)=>{
        console.log(res,"response login");
        if(res.data.status===200){
          console.log(res)
          
          alert('logged in sucessfully')
          history.push("/home")
          // dispatch({type:"LOGIN",payload:res.data});
        }else{
          alert("enter valid email")
        }dispatch({type:"LOGIN",payload:res.data});
      })
    }
  }
  
  
  export const SingUp=(email,name,password,confirm,phone,history)=>{
    const Fdata={
      email:email,
      name:name,
      password:password,
      confirmPassword:confirm,
      phone:phone,
  };
    return async (dispatch)=>{
        const url ="https://e-prathibha.com/apis/register";
        await axios.post(url,Fdata)
        .then((res)=>{
            console.log(res,'res');
            if(res.data.status===200){
                history.push("/verify")
                alert("Redirecting To OTP verify page");
                dispatch({type:"REGISTER",payload:res.data});
            }else{
                alert("enter valid input")
            }
        })
    }
  }
  
  
  export const verify=(regotp,history)=>{
    const OData={
        reg_code:regotp
    }
    console.log('regoyp: ',regotp);
    return async (dispatch)=>{
        const url="https://e-prathibha.com/apis/verifyEmail";
        await axios.post(url,OData)
        .then((res)=>{console.log(res,"response")
        if(res.data.status===200){
            console.log('otpResponse',res);
            history.push("/Verify")
            alert('emailverify completed');
            dispatch({type:"OTP",payload:res.data});
        }
    });
    }
  }


export const sorting = (target) => {
    return async dispatch => {
        axios.get(`https://fakestoreapi.com/${target}`)
            .then(res => {
                console.log(res)
                dispatch({
                    type: "SORTING_ITEM",
                    payload: res.data
                })
            })
            .catch(error => {
                console.log("error message", error)
            })
    }
};


  
  