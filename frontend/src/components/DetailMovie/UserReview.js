
import React from 'react'
import {AiFillLike} from "react-icons/ai";
import {BsChatDots} from "react-icons/bs"
const UserReview = ({data}) => {
  return (
    <div className='flex space-x-4 w-[100%]'>
                    <div className='space-y-4'>
                        <section className='flex md:items-center md:space-x-2 md:flex-row flex-col'>
                            <h5>{data.name}</h5>
                            <h5 className='text-neutral-600'>{data.time}</h5>
                            <div className='flex items-center space-x-2 text-red-600'>
                                <h2>{data.rate}</h2>
                            </div>
                        </section>
                        <p className='text-neutral-500 w-[300px] line-clamp-2 p-4 border border-gray-500'>{data.comment}</p>
                        <section className='flex items-center space-x-2 text-xl'>
                            <p><AiFillLike /></p>
                            <p><BsChatDots /></p>
                        </section>
                    </div>
    </div>
  )
}

export default UserReview