import { InforMovieDetail } from './InforMovieDetail';
import { TabEp } from './Tab';
import React, {useEffect, useState} from 'react';
import Movie from '../Movie/Movie';
import { movie } from '../../data/topmovie';

import { useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../features/movie/movieSlice';
import Spiner from '../Spiner';


const Detail = () => {
    const {detail} = useParams()
    const dispatch = useDispatch()
    const {data} = useSelector((state) => state.movie)

    useEffect(() =>{ 
       dispatch(getData())
    },[dispatch])
    
    const movieDetail = data.find(movie => movie._id === detail)

   
  
  return (
    <div className='relative text-white'>
        <div className='max-w-7xl margin-center' >
            <iframe width="1280" height="615" 
            className="w-full"
            src={`${movieDetail?.url}?autoplay=0&rel=0`}
            title="trailer movie" frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen />
        </div>
        {/* infor movie */}
            <InforMovieDetail data={movieDetail}     />
        {/* Review */}
        <div className='max-w-7xl margin-center mt-16'>
           <TabEp  data={movieDetail}  />
        </div>

        <div className='w-[70%] mt-16 bg-gradient-to-r from-[#141414] via-slate-200 to-[#141414] 
        h-[1px] margin-center' />

        {/* action */}
        <h2 className='max-w-7xl margin-center mt-20 text-3xl font-bold pl-4'>Action</h2>
        <div className='mt-4 max-w-7xl margin-center flex md:items-center md:space-y-0 space-y-4
        md:space-x-6 md:flex-row flex-col p-4'>
            {/* Đạo diễn */}
            <div>
                <section className='flex'>
                    <img className='w-[50%] h-32 object-cover '
                    src="https://vnn-imgs-f.vgcloud.vn/2019/12/30/23/bat-gap-thu-suong-hen-ho-luc-nua-dem-voi-dan-ong-trung-nien-10.jpg"
                    alt="error" />
                    <div className='bg-[#191919] w-[50%] p-4 flex flex-col justify-center'>
                        <h3>Đạo Diễn</h3>
                        <p>Doãn Đào</p>
                    </div>
                </section>
            </div>
            {/* Diễn viên */}
            <div>
                <section className='flex'>
                    <img className='w-[50%] h-32'
                    src="https://thegioidienanh.vn/stores/news_dataimages/yenlinh/112021/16/16/0749_anh-bia-3-1636560607425486624184.jpg?rt=20211116160752"
                    alt="error" />
                    <div className='bg-[#191919] w-[50%] p-4 flex flex-col justify-center'>
                        <h3>Diễn viên chính</h3>
                        <p>Triệu Lộ Tư</p>
                    </div>
                </section>
            </div>
            <div>
                <section className='flex'>
                    <img className='w-[50%] h-32'
                    src="https://image.thanhnien.vn/w660/Uploaded/2022/zxaijr/2021_08_07/duongduongphunhanhenhofan1_hzqz.png"
                    alt="error" />
                    <div className='bg-[#191919] w-[50%] p-4 flex flex-col justify-center'>
                        <h3>Diễn viên chính</h3>
                        <p>Dương Dương</p>
                    </div>
                </section>
            </div>

        </div>

        <div className='mt-20 max-w-7xl margin-center'>
            <Movie title="Recomend" data={data.slice(0,5)} />
            <Movie title="Ralated" data={data.slice(5,9)} />
            <Movie title="Upcoming" data={data.slice(3,8)} />
        </div>

    </div>
  )
}

export default Detail