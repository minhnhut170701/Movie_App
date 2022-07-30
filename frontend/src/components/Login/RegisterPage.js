
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {Link ,useNavigate} from "react-router-dom";

import { register, reset } from '../../features/auth/authSlice';

import Spiner from '../Spiner';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        fistName: '',
        lastName: '',
        password: '',
        password2: '',
    })

    const {name, email, fistName, lastName, password, password2} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth) 

    useEffect(() =>{
        if(isError){
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) =>{
        setFormData((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const onSubmit = (e) =>{
        e.preventDefault()
        if(password !== password2){
            toast.error('Password do not match')
        }else{
            const userData = {
                name, 
                email, 
                password,
            }

            dispatch(register(userData))
        }
    }

    if(isLoading){
        return <Spiner />
    }
  return (
    <div className='bg-background-login bg-center bg-no-repeat bg-cover w-full h-[900px] relative'>
            <div className="bg-[#14141480] backdrop-blur-xl lg:w-[600px] h-[600px] overflow-x-hidden
        margin-center relative top-40 text-white p-10 scrollbar-thin scrollbar-thumb-slate-200">
             <Link to="/">
                    <h1 className='text-center text-4xl text-red-600 font-bold'>Movie Best</h1>
            </Link>
            <form className='mt-10' onSubmit={onSubmit}>
                <section className=' grid lg:grid-cols-2 grid-cols-1 gap-6 justify-items-center '>
                    <div>
                        <p>Username*</p>
                        <input type="text" className='p-2 bg-[#191919]' name="name" value={name} onChange={onChange} />
                    </div>
                    <div>
                        <p>FirstName*</p>
                        <input type="text" className='p-2 bg-[#191919]' name="fistName" value={fistName} onChange={onChange} />
                    </div>
                    <div>
                        <p>LastName*</p>
                        <input type="text" className='p-2 bg-[#191919]' name="lastName" value={lastName} onChange={onChange} />
                    </div>
                    <div>
                        <p>Email*</p>
                        <input type="email" className='p-2 bg-[#191919]' name="email" value={email} onChange={onChange} />
                    </div>
                    <div>
                        <p>Password*</p>
                        <input type="password" className='p-2 bg-[#191919]' name="password" value={password} onChange={onChange} />
                    </div>
                    <div>
                        <p>Repeat Password*</p>
                        <input type="password" className='p-2 bg-[#191919]' name="password2" value={password2} onChange={onChange} />
                    </div>
                </section>

                 <section className='mt-10 p-5'>
                     <div className='flex space-x-2 items-center'>
                         <input type="radio" />
                         <p>Premium- $39 / 3 Monthswith a 5 day free trial</p>
                     </div>
                     <div className='flex space-x-2 items-center'>
                         <input type="radio" />
                         <p>Basic- $19 / 1 Month</p>
                     </div>
                     <div className='flex space-x-2 items-center'>
                         <input type="radio" />
                         <p>Free- Free</p>
                     </div>
                     <div className='flex space-x-2 items-center'>
                         <input type="checkbox" />
                         <p>Automatically renew subscription</p>
                     </div>
                 </section>

                 <section className='p-5'>
                     <h1>Select a Payment Method</h1>
                     <div className='flex items-center space-x-2'>
                        <input type="radio" />
                        <p>Manual/Offline</p>
                     </div>
                 </section>

                 <button type='submit' className='uppercase text-xl bg-red-600 w-full p-4 ml-2'>Register</button>
            </form>
        </div>
    </div>
  )
}

export default RegisterPage