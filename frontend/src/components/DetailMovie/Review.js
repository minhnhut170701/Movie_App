import React, {useState, useRef, useEffect} from 'react';

import Rate from './Rate';
import UserReview from './UserReview';
import { commnet } from '../../data/comment';
import { useDispatch, useSelector} from 'react-redux';
import { setDataComment} from '../../features/movie/movieSlice';
import { useParams, useLocation } from 'react-router-dom';
import { getData } from '../../features/movie/movieSlice';

const Review = ({dataComment}) => {
    
    const rateRef = useRef()
    const [rating, setRating] = useState(null)
    const params = useParams()
    const [form, setForm] = useState({
        name: '',
        comment: '',
        email: '',
        rate: rating
    })
    const dispatch = useDispatch()
    
    const {name, email, comment} = form

    const {user} = useSelector((state) => state.auth)


    const onChange = (e) =>{
        setForm((prevState) =>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const handleSubmit =(e) =>{
        e.preventDefault()
        const userData = {
            name, 
            rate: rating, 
            comment,
        }
        dispatch(setDataComment({key: params.detail, data: userData}))
        setForm({
            name: '',
            comment: '',
            email: '',
        })

        window.location.reload()
       
        
    }
  return (
      <div>
          {/* other review */}
          <article className='space-y-5'>
                {dataComment.comment.map((item, index) =>(
                    <UserReview 
                        key={index}  
                        data={item}
                        userName={user}
                    />   
                ))}
          </article>
          
            {/* your contact */}
            <div className='mt-5 space-y-5 lg:w-[1200px] w-full'>
                <h2 className='text-2xl font-bold'>Add a review</h2>
                <p className='text-neutral-500'>Your email address will not be published. Required fields are marked *</p>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <section className='flex items-center space-x-4'>
                        <p className='text-neutral-500'>You rating</p>
                        <div className='flex items-center space-x-2'>
                            <Rate count={5} setRating={setRating} rating={rating} rate={rateRef}   />
                        </div>
                    </section>
                    <p className='text-neutral-500'>Your review*</p>
                    <input 
                        type="text" 
                        name='comment'
                        value={comment}
                        onChange={onChange}
                        className='outline-none border-2 border-neutral-800 
                        pb-44 p-2 w-full bg-transparent 
                        focus:border-red-600' />
                    <div className='flex items-center space-x-6'>
                        <aside className='w-[50%]'>
                            <p className='text-neutral-500'>Name*</p>
                            <input 
                                type="text" 
                                name='name'
                                value={name}
                                onChange={onChange}
                                className='outline-none border-2 border-neutral-800 
                                pb-44 p-2 bg-transparent w-full
                                focus:border-red-600' />
                        </aside>
                        <aside className=' w-[50%]'>
                            <p className='text-neutral-500'>Email*</p>
                            <input 
                                type="text" 
                                name='email'
                                value={email}
                                onChange={onChange}
                                className='outline-none border-2 border-neutral-800 
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