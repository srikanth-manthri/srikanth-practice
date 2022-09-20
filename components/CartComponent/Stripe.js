import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import Payment from '../CartComponent/Payment';



const PUBLIC_KEY="pk_test_51LDKuNSHJJTrgoLAK9OCgXhzH6SsIadXaZtXhP2SiOPcxGkjPOHDsv1IrDcDc3h7H0T0NtMij5UH6eYHfxMH2ONw00dld2Io63";
const stripeTestPromise=loadStripe(PUBLIC_KEY);


export default function Stripe  ()  {

  return (
    <>
    <Elements stripe={stripeTestPromise}>
        <Payment/>
    </Elements>
    </>
  )
}