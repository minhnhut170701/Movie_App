import React from 'react';
import {AiFillStar} from "react-icons/ai";
import {BsFillPlayFill} from "react-icons/bs";

const Popular = () => {
  return (
    <div className='max-w-7xl margin-center mt-16 h-[600px] bg-fixed mb-4
    bg-popular  bg-cover bg-no-repeat relative'>
        <section className='max-w-5xl margin-center flex md:justify-between md:flex-row flex-col items-center 
        relative md:top-32 top-20 z-10 p-4'>
            <div className='text-white space-y-6 md:w-[50%] w-full'>
                <h1 className='text-4xl font-bold'>Hẹn Hò Chốn Công Sở</h1>
                <div className='flex items-center space-x-2 text-red-600'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <h2>9.2</h2>
                </div>
                <h2 className='text-2xl font-bold'>Movie of the month</h2>
                <p>
                Hẹn Hò Chốn Công Sở là câu chuyện giả làm bạn của mình, Ha Ri đến buổi xem mắt để xua đuổi đối tượng. Nhưng kế hoạch này đổ bể khi hóa ra anh lại là sếp của cô – và anh đưa ra một đề xuất.
                </p>
                <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                    <p className='text-2xl'><BsFillPlayFill /></p>
                    <p>Play Now</p>
                </button>
            </div>
            <img src="https://i.imgur.com/29JNd9G.jpg" className='w-[300px] h-[400px] p-4 md:block hidden' alt="error" />

        </section>
    
        <div className='bg-black absolute top-0  opacity-70 w-full h-full' />
    </div>
  )
}

export default Popular