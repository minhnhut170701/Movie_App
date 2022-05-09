import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

import { useSelector, useDispatch} from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import {AiOutlineUser,AiOutlineSearch} from "react-icons/ai"
const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  
  const onLogout = () =>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  return (
    <nav className=' bg-[#14141480] w-full h-[70px] text-white absolute top-0 z-20 backdrop-blur-sm'>
        <div className='max-w-7xl margin-center p-5 flex items-center space-x-64 '>
        <Link to="/" className='uppercase text-red-600 font-bold text-3xl'>Movie Best</Link>
          {user ? (
          <div className='flex space-x-44 items-center'>
              <ul className='uppercase flex items-center space-x-4'>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Home</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Movie</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>TV Shows</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>
                  <Link to='/pricing'> Price</Link>
                  </li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Pages</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Blogs</li>
              </ul>
              <div className='flex items-center space-x-4'>
                <Link to="/login" className='text-2xl'><AiOutlineSearch /></Link>
                <Link to="/profile">{user.name}</Link>
                <button onClick={onLogout} >Logout</button>
                
              </div>
          </div>
            
            

          ) : (
              <ul className='uppercase flex items-center space-x-4'>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Home</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Movie</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>TV Shows</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>
                  <Link to='/pricing'> Price</Link>
                  </li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Pages</li>
                  <li className='hover:text-red-600 transition-colors duration-300 ease-linear'>Blogs</li>
                  <div className='flex items-center space-x-4'>
                    <Link to="/search" className='text-2xl'><AiOutlineSearch /></Link>
                    <Link to="/login" className='text-2xl'><AiOutlineUser /></Link>
                  </div>
              </ul>
             
            
           
          )}
            
        </div>
    </nav>
  )
}

export default Nav