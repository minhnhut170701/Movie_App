import React, {useState, useEffect} from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {Link ,useNavigate} from "react-router-dom";

import { login, reset } from '../../features/auth/authSlice';

import Spiner from '../Spiner';


const LoginPage = () => {
    const [formData, setFormData] = useState({
        email:'',
        password: '',
    })

    const { email, password} = formData
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess} = useSelector((state) => state.auth) 

    useEffect(() =>{
        if(isError){
            toast.error("Sai tài khoản hoặc mật khẩu")
        }
        if(isSuccess){
            toast.success("Đăng nhập thành công")
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError, isSuccess, navigate, dispatch])

    const onChange = (e) =>{
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) =>{
        e.preventDefault()

        const userData = {
            email,
            password
        }
        dispatch(login(userData))
        
    }

    if(isLoading){
       return <Spiner />
    }
    return (
    <div className='bg-background-login bg-center bg-no-repeat bg-cover w-full h-[900px] relative'>
        <div className="bg-[#14141480] backdrop-blur-xl lg:w-[600px] h-[600px] 
        margin-center relative top-40 text-white p-10">
            <form onSubmit={onSubmit}>
                <Link to="/">
                    <h1 className='text-center text-4xl text-red-600 font-bold'>Movie Best</h1>
                </Link>
                <div className='mt-10 space-y-4'>
                    <h2>Username or Email</h2>
                    <input type="text" placeholder='input username...' 
                    className='p-4 w-full bg-[#191919]'
                    name="email"
                     value={email}
                     required
                     onChange={onChange} />

                </div>
                <div className='mt-10 space-y-4'>
                    <h2>Password</h2>
                    <input type="password" placeholder='input password...' 
                    className='p-4 w-full bg-[#191919]'
                    name="password"
                    value={password}
                    onChange={onChange} />
                </div>
                <div className='space-x-2 flex mt-4'>
                    <input type="checkbox" name='remember' className='w-4 h-4 mt-2' />
                    <label for="remember" className='mt-1'>Remember Me</label>
                    <div className='flex  space-x-3 '>
                        <span>Username: admin@gmail.com</span>
                        <span>Password: 123456</span>
                        <p>You can using it 🥰</p>
                    </div>
                    
                </div>

                <button type='submit' 
                className='uppercase p-4 w-full text-center bg-red-600 hover:bg-red-700 mt-10'>
                    Log in
                </button>
            </form>
            {/* register */}
            <section className='flex items-center justify-between'>
                <div className='flex items-center lg:space-x-3 space-x-6 mt-6'>
                    <h3>Register</h3>
                    <p>|</p>
                    <Link to="/register" className='text-md text-red-600'>you don't have account?</Link>
                </div>
                <div className='mt-5'>
                    <Link to="/" className='text-md text-red-600'>Forgot password?</Link>
                </div>
            </section>
            
        </div>
        
    </div>
  )
}

export default LoginPage