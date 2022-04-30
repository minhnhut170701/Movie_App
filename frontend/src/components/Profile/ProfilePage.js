import React from 'react'

import InforUser from './InforUser';
import Movie from '../Movie/Movie';
import { movie } from '../../data/topmovie';

const ProfilePage = () => {
  return (
    <div>
        <div className='bg-background-login h-[300px]'>
            <div className='flex flex-col text-white items-center pt-28 h-full'>
                <h1 className='text-4xl uppercase font-bold'>Your Profile</h1>
                <h1 className='text-2xl text-red-600'>Home</h1>
            </div>
        </div>

        <div className='max-w-4xl margin-center mt-10 p-4'>
                <InforUser />
        </div>
        <div className='max-w-7xl margin-center mt-10'>
            <h1 className='text-white font-bold text-3xl relative top-16'>Movies History: </h1>
            <Movie title="" data={movie.slice(0,5)} />
            <Movie title="" data={movie.slice(3,8)} />
        </div>
    </div>
    
  )
}

export default ProfilePage