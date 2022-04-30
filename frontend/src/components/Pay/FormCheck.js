import React from 'react';
import {AiOutlineCreditCard} from "react-icons/ai"

const FormCheck = ({handleNext}) => {

    
  return (
    <form className='flex flex-col pb-10 ' onSubmit={() => handleNext()}>
        <div className='grid grid-cols-2 gap-4'>
            <label className='flex flex-col p-4 font-bold'>Email:*
            <input 
            className='p-4  border-b-gray-300 border border-transparent outline-none bg-transparent'
            type='email'
             placeholder='Input email' 
             id="name"  
             required
             />
            </label>
            <label className='flex flex-col p-4 font-bold'>Phone: *
            <input type='text' placeholder='Input number your phone' id="name" required
            className='p-4  border-b-gray-300 border border-transparent outline-none bg-transparent' />
            </label>
            <label className='flex flex-col p-4 font-bold'>Card Number: *
            <div className='flex items-center space-x-2'>
                <input type='text' placeholder='Input Number' id="name" maxLength='16' min='16' required
                className='p-4  border-b-gray-300 border border-transparent outline-none bg-transparent' />
                <p className='text-3xl mt-5'><AiOutlineCreditCard /></p>
            </div>
            
            </label>
            <div className='flex items-center space-x-3 text-white'>
                    <label className='flex flex-col p-2 font-bold'>Expiry: *
                    <input type='date' placeholder='Expiry' id="name" required
                className='p-4  border-b-gray-300 border w-full 
                 border-transparent outline-none bg-transparent' />
                    </label>
                    <label className='flex flex-col p-2 font-bold'>CVV: *
                    <input type='text' placeholder='CVV' id="name" maxLength='3' required
                className='p-4  border-b-gray-300 border border-transparent outline-none
                bg-transparent w-full' />
            </label>

            </div>
            

        </div>
       <button type='submit'
        className='mt-10 p-4 bg-red-600 
       text-white transition-all duration-300 ease-in-out
       '>CheckOut</button>
    </form>
  )
}

export default FormCheck