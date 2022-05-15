import React, {useEffect, useState} from 'react';
import MovieResult from './MovieResult';
import { useSelector, useDispatch } from 'react-redux';
import {  getData } from '../../features/movie/movieSlice'; 

const FillterMovie = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.movie)
    
    useEffect(() =>{
        dispatch(getData())
    }, [dispatch])

   
   
  return (
    <div className='max-w-7xl margin-center'>
        <div className='mt-36'>
            <form className='flex items-center space-x-3'>
                <input 
                className='w-[50%] p-4 bg-[#191919] text-zinc-200'
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Searching movie you want...' />
                <button type='submit' className='bg-red-600 text-white hover:bg-red-700 p-4'>Submit</button>
            </form>
           
        </div>
        <h1 className='text-white mt-16 text-3xl font-bold uppercase'>Top Reuslt: </h1>
        <div className='mt-5 grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-4 p-4 max-w-7xl 
        text-white'>
           {data.filter((item) => {
                if(search === ""){
                    return item
                }
                // cùng đổi kích cỡ chữ tìm kiếm giống nhau để dễ nhận diện
                else if(item.title.toUpperCase().includes(search.toUpperCase())){
                    return item
                }}).map((item) =>(
                    <MovieResult  data={item} key={item.id} />
                ))
            }
        </div>
        
    </div>
  )
}

export default FillterMovie