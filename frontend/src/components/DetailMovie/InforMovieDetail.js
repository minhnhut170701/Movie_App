import React from "react";
import {AiFillStar, AiOutlineEye} from "react-icons/ai";
export function InforMovieDetail({data}) {
  return <div className='max-w-7xl margin-center mt-20 flex items-center'>
            <section className='space-y-10 w-[60%]'>
                <div className='flex items-center space-x-4'>
                    <h2 className='text-3xl'>{data.title}</h2>
                    <div className='flex items-center space-x-2 text-red-600 text-xl'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>9.2</p>
                </div>
                <h5 className='text-lg bg-gradient p-2 w-[20%]'>{data.category}</h5>
                <div className='flex items-center space-x-4'>
                    <p className='p-2 bg-amber-500 text-black rounded-md uppercase'>Vip</p>
                    <p>Time: 45p</p>
                    <p>May 2022</p>
                    <aside className='flex items-center text-white space-x-2'>
                        <p><AiOutlineEye /></p> 
                        <p>7460 views</p>
                    </aside>
                </div>

                <h4 className='w-[70%]'>
                    {data.description}
                </h4>
                <button className='p-4 bg-red-600 border border-transparent font-bold transition-colors duration-300 ease-in
                uppercase rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600'>
                    Add your list
                </button>
            </section>
            <section className='w-[40%]'>
                <img src={data.imageSmall} alt='error'  />
            </section>
        </div>;
}
  