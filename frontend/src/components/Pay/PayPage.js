import React from 'react';
import {Link} from "react-router-dom";
import CheckoutForm from './CheckoutContain';
import { useSelector} from 'react-redux';

const PayPage = () => {
  const {user} = useSelector((state) => state.auth)
  return (
    <div className='max-w-full'>
        <div className='w-full bg-background-login h-[300px] text-center'>
            <section className='text-white justify-center relative top-[40%]'>
                <h1 className='text-3xl uppercase font-bold'>Checkout Page</h1>
                <Link to="/" className='text-xl text-red-600'>Home</Link>
            </section>
        </div>
        {user ? (<div className='max-w-4xl mt-20 margin-center text-white p-10'>
            <CheckoutForm />
          </div>) : (
            <div className='max-w-4xl mt-20 margin-center text-white p-10'>
              <h3>Vui lòng đăng nhập trước khi thanh toán</h3>
              <Link to='/login'>
                 <h3 className='text-2xl bg-red-600 p-4 text-white mt-10 w-[30%] text-center'>Login</h3>
              </Link>
            </div>
        ) }
        


    </div>
  )
}

export default PayPage