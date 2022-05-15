import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {Link} from "react-router-dom"

const MovieResult = ({ data, key}) => {
 

  return (
      <div className='mt-3 w-[100%] h-[300px] relative bg-no-repeat bg-cover hover-show' 
      style={{backgroundImage: `url(${data.imageSmall})`}} key={key}>
          <Link to={`/${data.id}`} key={data.id}>
              {/* inforMovie */}
              <div className='absolute top-[50%]  md:p-4 p-2 w-full space-y-2 z-10'>
                <h3 className='p-2 bg-gradient-to-r from-red-600 text-white w-28 show-category font-bold'>
                  {data.category}
                </h3>
                <h1 className='line-clamp-1'>{data.title}</h1>
                <div className='flex items-center space-x-2'>
                    <button className='p-2 border rounded-full bg-white text-black text-xl'><BsFillPlayFill /></button>
                    <div>
                      <p>Vote: {data.rate}</p>
                      <div className='text-red-600 flex items-center space-x-2'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                      </div>
                    </div>
                    
                </div>
              </div>
              <div className='absolute w-full h-full top-0 bg-gradient-to-t from-black opacity-80'/>
          </Link>
      </div>
  )
}

export default MovieResult