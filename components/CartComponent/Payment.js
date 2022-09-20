import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React,{useState} from 'react'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#0ad12f",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#080708" }
		},
		invalid: {
			iconColor: "#d10a0a",
			color: "#d10a0a"
		}
	}
}

export default function Payment() {
    const [success,setSuccess]=useState(false);
    const stripe=useStripe()
    const elements=useElements()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:"card",
            card:elements.getElement(CardElement)
        })
        if(!error){
            try{
                const {id}=paymentMethod
                const response= await axios.post("http://localhost:4000/payment",{
                    amount:1000,
                    id
                    
                    
                })
                console.log(id)

                if(response.data.success){
                    console.log("payment successful")
                    setSuccess(true)
                }
            }catch(error){
            console.log("error",error)
        }
    }else{
        console.log(error.message)
    }
    }
  return (
    <>
    {!success?
    <form className='m-5' onSubmit={handleSubmit}>
    <fieldset>
        <div>
            <CardElement options={CARD_OPTIONS}/>
        </div>
    </fieldset>
    <button className='btn border btn-outline-primary p-3 mt-5 w-100 '  height={50}><h3><em>PAY-NOW</em></h3></button>
</form>
    :
    <div>
        <h1 className='display-5 h2 p-5'><center>Your order was sucessfully Placed</center></h1>
    </div>
    
    
    }
    </>
  )
  }