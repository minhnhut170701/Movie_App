import React from 'react';
import {Link} from "react-router-dom";
import CheckoutForm from './CheckoutContain';

const PayPage = () => {
  return (
    <div className='max-w-full'>
        <div className='w-full bg-background-login h-[300px] text-center'>
            <section className='text-white justify-center relative top-[40%]'>
                <h1 className='text-3xl uppercase font-bold'>Checkout Page</h1>
                <Link to="/" className='text-xl text-red-600'>Home</Link>
            </section>
        </div>
        <div className='max-w-4xl mt-20 margin-center text-white p-10'>
            <CheckoutForm />
        </div>


    </div>
  )
}

export default PayPage