import React from 'react';
import InforHotmovie from './InforHotmovie';
import Nav from './Nav';


// Import Swiper React components


const Header = () => {
 
 
  return (
    <header className='max-w-full h-auto relative'>
       <Nav />
        <InforHotmovie />

    </header>
  )
}

export default Header