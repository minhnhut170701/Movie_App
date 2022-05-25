import React from 'react';

import {BsFillPlayFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {Link} from "react-router-dom"
import "./Header.css"
const Banner = ({title, des, vote, ep, text}) => {
  
  return (
    <div className={text ? 'text-white relative z-20 max-w-full md:p-36 p-10 md:mt-5 mt-28 space-y-4 text-animation-2 ' :
    'text-white relative z-20 max-w-full md:p-36 p-10 md:mt-5 mt-28 space-y-4 text-animation'}>
        <div className='flex items-center bg-gradient-to-r from-red-600  md:w-[20%] w-[100%] space-x-4'>
            <div className='h-[45px] w-2 bg-red-900'/>
            <h1 className='uppercase md:text-4xl text-xl'>Movie</h1>
        </div>
            <h2 className='uppercase text-3xl md:text-5xl pt-5 pb-5'>
                {title}
            </h2>

        
        <div className='flex items-center space-x-4'>
            <div className='flex items-center space-x-2' >
                <p>Vote</p>
                <div className='text-red-600 flex items-center space-x-1 text-xl'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
            </div>
            <p>Ep: {ep}</p>
            <p>Time</p>
        </div>
        <div className='mt-5 max-w-4xl line-clamp-3'>
            <h3>{des}</h3>
        </div>
        <div className='text-md text-red-600 font-extrabold'>
            <h3>Actor: </h3>
            <h3>General:</h3>
            <h3>Tag:</h3>
        </div>
        <Link to="/detail">
            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2 mt-5'> 
                <p className='text-2xl'><BsFillPlayFill /></p>
                <p>Play Now</p>
            </button>
        </Link>
        
    </div>
  )
}

export default Banner