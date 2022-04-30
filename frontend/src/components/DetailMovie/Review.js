import React from 'react';
import user from "../../images/protofie.jpg";


//icons
import {AiFillStar,AiOutlineStar,AiFillLike} from "react-icons/ai";
import {BsChatDots} from "react-icons/bs"

const Review = () => {
  return (
      <div>
          {/* other review */}
          <div className='flex space-x-4'>
                <img src={user} alt="error" className='w-24 h-24 rounded-full' />
                <div className='space-y-4'>
                    <section className='flex items-center space-x-2'>
                        <h5>Thanh Thảo - </h5>
                        <h5>JANUARY 8, 2022</h5>
                        <div className='flex items-center space-x-2 text-red-600'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                    </section>
                    <p className='text-neutral-500'>Thật mong tới ngày chiếu quá điii</p>
                    <section className='flex items-center space-x-2 text-xl'>
                        <p><AiFillLike /></p>
                        <p><BsChatDots /></p>
                    </section>
                </div>
            </div>
            {/* your contact */}
            <div className='mt-5 space-y-5'>
                <h2 className='text-2xl font-bold'>Add a review</h2>
                <p className='text-neutral-500'>Your email address will not be published. Required fields are marked *</p>
                <section className='flex items-center space-x-4'>
                    <p className='text-neutral-500'>You rating</p>
                    <div className='flex items-center space-x-2 text-red-600'>
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                    </div>
                </section>
                <form className='space-y-5'>
                    <p className='text-neutral-500'>Your review*</p>
                    <input type="text" className='outline-none border-2 border-neutral-800 
                     pb-44 p-2 w-[1200px] bg-transparent 
                    focus:border-red-600' />
                    <div className='flex items-center space-x-6'>
                        <aside className=' w-[50%]'>
                            <p className='text-neutral-500'>Name*</p>
                            <input type="text" className='outline-none border-2 border-neutral-800 
                            pb-44 p-2 bg-transparent w-full
                            focus:border-red-600' />
                        </aside>
                        <aside className=' w-[50%]'>
                            <p className='text-neutral-500'>Email*</p>
                            <input type="text" className='outline-none border-2 border-neutral-800 
                            pb-44 p-2 bg-transparent w-full
                            focus:border-red-600' />
                        </aside>
                    </div>

                    <button type='submit' className='p-4 bg-red-600 hover:bg-red-700'>Submit</button>
                </form>

            </div>
      </div>
    
  )
}

export default Review