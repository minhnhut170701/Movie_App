import React  from 'react';
import {BsFillPlayFill} from "react-icons/bs";
import {AiFillStar} from "react-icons/ai";
import {Link} from "react-router-dom"

const Movie = ({title, data, isTop}) => {
  
  return (
    <div className='text-white max-w-7xl  margin-center mt-16'>
      <div role="group" className='flex items-center justify-between p-4'>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <Link to="/search" className='text-lg text-red-600 font-bold'>View All</Link>
      </div>
      <div className='mt-3 md:flex md:items-center md:space-x-4 relative grid grid-cols-2 gap-2 p-4'>
        {data.map((item) => (
          <Link to={`/${item._id}`} key={item._id}
            className={isTop ? "md:w-[20%] w-[100%] h-[360px] relative bg-no-repeat bg-cover bg-center hover-show":
            "md:w-[20%] w-[100%] h-[250px] relative  bg-no-repeat bg-cover bg-center hover-show"}
          style={{backgroundImage: `url(${item.imageSmall})`}}>
              {/* inforMovie */}
              <div className={isTop ? 'absolute top-[60%] md:p-4 p-2 w-full space-y-2 z-10' :
            'absolute top-[40%] md:p-4 p-2 w-full space-y-2 z-10'}>
                <h3 className='p-2 bg-gradient-to-r from-red-600 text-white w-28 show-category font-bold'>
                  {item.category}
                </h3>
                <h1 className='line-clamp-1'>{item.title}</h1>
                <div className='flex items-center space-x-2'>
                    <button className='p-2 border rounded-full bg-white text-black text-xl'><BsFillPlayFill /></button>
                    <div>
                      <p>Vote: {item.rate}</p>
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
              {/* modal */}
              <div className='w-[300px] h-auto pb-2 bg-[#141414] absolute top-0 z-30 hidden modal
                scale-100 hover:scale-105 transition-transform duration-500 ease-in-out '>
                  <div className='relative'>
                      <img src={item.imageLarge} alt={item.title} className="w-full h-[200px]" />
                      <button className='absolute top-16 rounded-full left-[40%] bg-white text-black hover:bg-red-600
                       p-4 text-xl'>
                        <BsFillPlayFill />
                      </button>
                  </div>
                  <section className='text-sm pl-4 pr-4'>
                    {/* name movie */}
                    <div className='space-y-3 mt-2'>
                      <h3 className='p-2 bg-gradient-to-r from-red-600 text-white w-28 show-category font-bold'>
                        {item.category}
                      </h3>
                      <h1 className='line-clamp-2'>{item.title}</h1>
                    </div>
                    </section>
                  {/* Description */}
                  <p className='line-clamp-3 text-sm p-4 h-[80px]'>{item.description}</p>
                </div>

              <div className='absolute w-full h-full top-0 bg-gradient-to-t from-black opacity-80'/>
          </Link>
        ))}
      </div>
        
    </div>
  )
}

export default Movie