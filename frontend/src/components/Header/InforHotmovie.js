import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Pagination, Navigation } from "swiper";
import Banner from './Banner';
import { movie } from '../../data/topmovie';
const InforHotmovie = () => {
    const [dataMovie, setDataMovie] = useState(movie)
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {dataMovie.slice(3,7).map((item) =>(
            <SwiperSlide key={item.id}
            style={{background: `url(${item.imageLarge})`, height: '700px'}}
            className='relative bg-no-repeat bg-cover bg-center '>
            <div>
              <Banner title={item.title} ep={item.ep} des={item.description} vote={item.rate} />
              <div className='absolute w-full h-full bg-gradient-to-r from-black opacity-80 top-0 z-10'/>
            </div>    
          </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default InforHotmovie