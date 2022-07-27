import React, {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, Pagination, Navigation } from "swiper";
import Banner from './Banner';

import { useSelector} from 'react-redux';
import "./Header.css"

const InforHotmovie = () => {
    const [effectText, setEffectText] = useState(false)
    const {data} = useSelector((state) => state.movie)
    
    
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={() => setEffectText(!effectText)}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.slice(3,7).map((item) =>(
            <SwiperSlide key={item.id}
              style={{background: `url(${item.imageLarge})`, height: '700px'}}
              className='relative bg-no-repeat bg-cover bg-center '>
              <div>
                <Banner title={item.title} ep={item.ep} des={item.description} vote={item.rate} text={effectText} id={item._id} />
                <div className='absolute w-full h-full bg-gradient-to-r from-black opacity-80 top-0 z-10'/>
              </div>  
          </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default InforHotmovie