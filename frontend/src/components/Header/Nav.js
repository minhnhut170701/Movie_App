import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";

import { useSelector, useDispatch} from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';
import {AiOutlineUser,AiOutlineSearch,AiOutlineCloseCircle} from "react-icons/ai"
const Nav = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const [menu, setMenu] = useState(false)

  useEffect(() =>{
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])

  const onLogout = () =>{
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }

  const setModalMenu = () =>{
    onLogout()
    setMenu(!menu)
  }

  return (
    <nav className=' bg-[#14141480] w-full h-[70px] text-white absolute top-0 z-20 backdrop-blur-sm'>
      {menu && (
        <div className='p-6 absolute top-0 left-0 w-full h-[500px] bg-black  z-50 '>
          <section className='flex items-center justify-between'>
              <h1 className='text-3xl text-red-600'>Movie Best</h1>
              <button onClick={() => setMenu(false)} className='text-3xl'><AiOutlineCloseCircle /></button>
          </section>
          <ul className='mt-[40px]'>
              <li className='p-4 border-t-2 '><Link to='/'>Home</Link></li>
              <li className='p-4 border-t-2 '><Link to='/pricing' >Price</Link></li>
              <li className='p-4 border-t-2 '><p>Blog</p></li>
              <li className='p-4 border-t-2'><Link to='/search'>Movie</Link></li>
          </ul>
          <button className='text-center w-full mt-10 p-4 bg-red-600'
          onClick={setModalMenu}>{user ? 'Logout' : 'Login'}</button>
        </div>

      )}
        
        <div className='max-w-7xl margin-center p-5 flex items-center lg:space-x-64 justify-between  '>
        <Link to="/" className='uppercase text-red-600 font-bold text-3xl'>Movie Best</Link>
        <button onClick={() => setMenu(!menu)} className='flex flex-col space-y-2 lg:hidden md:flex'>
          <span className='h-[5px] w-10 bg-white'></span>
          <span className='h-[5px] w-10 bg-white'></span>
          <span className='h-[5px] w-10 bg-white'></span>
        </button>
        
          {user ? (
          <div className='hidden lg:space-x-44 items-center md:hidden lg:flex '>
              <ul className='uppercase flex items-center space-x-4'>
                  <Link to='/' className='hover:text-red-600 transition-colors duration-300 ease-linear'>Home</Link>
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
              <ul className='uppercase hidden items-center space-x-4 md:flex'>
                  <Link to='/' className='hover:text-red-600 transition-colors duration-300 ease-linear'>Home</Link>
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