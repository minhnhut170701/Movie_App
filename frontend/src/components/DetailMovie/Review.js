import React, {useState, useRef} from 'react';

import Rate from './Rate';
import UserReview from './UserReview';
//icons
import { commnet } from '../../data/comment';

const Review = () => {
    
    const [reviews, setReviews] = useState(commnet)
    const [rating, setRating] = useState(null)
    const [form, setForm] = useState({
        name: '',
        review: '',
        rate: '',
        email: ''
    })
    const userReview = useRef()
    const userName = useRef()
    const userRating = useRef()

   
    const handleSubmit =(e) =>{
        e.preventDefault()
        let copy = [...reviews]
        copy = reviews.concat({
            name: userName.current.value, 
            review: userReview.current.value,
            rate: rating})
        setReviews(copy)
        setForm({
            name: '',
            review: '',
            rate: '',
            email: ''
        })
        
    }

    
  return (
      <div>
          {/* other review */}
          <article className='space-y-5'>
                {reviews.map((item, index) =>(
                    <UserReview 
                        key={index}  
                        data={item} 
                    />
                    
                ))}
          </article>
          
            {/* your contact */}
            <div className='mt-5 space-y-5 w-[100%]'>
                <h2 className='text-2xl font-bold'>Add a review</h2>
                <p className='text-neutral-500'>Your email address will not be published. Required fields are marked *</p>
                <form className='space-y-5' onSubmit={handleSubmit}>
                    <section className='flex items-center space-x-4'>
                        <p className='text-neutral-500'>You rating</p>
                        <div className='flex items-center space-x-2'>
                            <Rate count={5} setRating={setRating} rating={rating} userRating={userRating} />
                        </div>
                    </section>
                    <p className='text-neutral-500'>Your review*</p>
                    <input 
                        type="text" 
                        name='review'
                        value={form.review}
                        onChange={(e) => setForm({review: e.target.value})}
                        ref={userReview}
                        className='outline-none border-2 border-neutral-800 
                        pb-44 p-2 md:w-[1200px] w-full bg-transparent 
                        focus:border-red-600' />
                    <div className='flex items-center space-x-6'>
                        <aside className=' w-[50%]'>
                            <p className='text-neutral-500'>Name*</p>
                            <input 
                                type="text" 
                                name='name'
                                value={form.name}
                                ref={userName}
                                onChange={(e) => setForm({name: e.target.value})}
                                className='outline-none border-2 border-neutral-800 
                                pb-44 p-2 bg-transparent w-full
                                focus:border-red-600' />
                        </aside>
                        <aside className=' w-[50%]'>
                            <p className='text-neutral-500'>Email*</p>
                            <input 
                                type="text" 
                                name='email'
                                value={form.email}
                                onChange={(e) => setForm({email: e.target.value})}
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