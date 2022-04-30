import React from 'react';

import profile from "../../images/protofie.jpg";


const InforUser = () => {
  return (
    <div className='text-white bg-[#191919] p-4'>
       <div className='flex items-center justify-between'>
            <section className='flex space-x-3 items-center'>
                <img src={profile} alt='error' className='w-24 h-24 rounded-full' />
                <div>
                    <h2>Thanh Thảo</h2>
                    <p>Thành viên từ ngày 18/4/2022</p>
                    <p>VIP</p>
                </div>
            </section>
            <ul className='flex items-center space-x-3'>
                    <li>Sưu tập</li>
                    <li>Phim đặt trước</li>
                    <li>Cài đặt</li>
                    <li className='text-red-600'>Đăng xuất</li>
            </ul>
       </div>

       
    </div>
  )
}

export default InforUser