import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { verify } from '../../Redux/Action';

const Verify = () => {
    
    const [regotp,setRegotp]=useState('');
   const history=useHistory();
    const dispatch=useDispatch();

    const handleSubmit=e=>{
        e.preventDefault();
        if(regotp!==''){
            dispatch(verify(regotp,history));
        }else{
            alert('plzz enter otp')
        }
    }
    
  return (
      <>
    <div>EmailVerify</div>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter otp" value={regotp} onChange={e=>setRegotp(e.target.value)} autoComplete="off"/>EmailVerify<br/><br/>
        <button className='btn btn-outline-dark'>verifyOtp</button>
    </form>
    </>
  )
}
export default Verify;