import React from 'react'
import PricingForm from './PricingForm'
import {Link} from "react-router-dom"
const PricingPage = () => {
  return (
    <div className='max-w-full'>
        <div className='w-full bg-background-login h-[300px] text-center'>
            <section className='text-white justify-center relative top-[40%]'>
                <h1 className='text-3xl uppercase font-bold'>Pricing Page</h1>
                <Link to="/" className='text-xl text-red-600'>Home</Link>
            </section>
        </div>

        {/* pricing form */}
        <div className='lg:max-w-7xl mt-20 lg:margin-center p-4'>
            <PricingForm />
        </div>

    </div>
  )
}

export default PricingPage