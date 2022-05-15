import { InforMovieDetail } from './InforMovieDetail';
import { TabEp } from './Tab';
import React from 'react';
import Movie from '../Movie/Movie';
import { movie } from '../../data/topmovie';

import { useParams } from 'react-router-dom';
import { getMovie } from '../../data/topmovie';



const Detail = () => {

    const parmas = useParams();
    const data =  getMovie(parseInt(parmas.detail, 10));

  return (
    <div className='relative text-white'>
        <div className='max-w-7xl margin-center' >
            <iframe width="1280" height="615" 
            className="w-full"
            src={`${data.url}?autoplay=0&rel=0`}
            title="trailer movie" frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen />
        </div>
        {/* infor movie */}
            <InforMovieDetail data={data}     />
        {/* Review */}
        <div className='max-w-7xl margin-center mt-16'>
           <TabEp   />
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
                    src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.6435-9/41487140_340725713336695_8012734078824480768_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=hqhgaFc9bd0AX8lRe2J&tn=P76TQ7TL9jd3w68d&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT_5vEypUKOG8DLchhczzeQL15AR6t9TWR2wYEVxrLdETg&oe=628064A4"
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
            <Movie title="Recomend" data={movie.slice(0,5)} />
            <Movie title="Ralated" data={movie.slice(5,9)} />
            <Movie title="Upcoming" data={movie.slice(3,8)} />
        </div>

    </div>
  )
}

export default Detail