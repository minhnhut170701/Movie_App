import React from 'react';

// icon
import {FaTwitter, FaFacebook, FaGithub, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-[#191919] mt-16'>
        <div className=' margin-center md:p-20 p-4 text-white flex md:space-x-10 md:flex-row flex-col space-y-6'>
            <nav className='md:w-[60%] md:space-y-4 space-y-6'>
                <ul className='flex items-center md:space-x-4 md:flex-row flex-col'>
                    <li>Terms Of Use</li>
                    <li> Privacy-Policy</li>
                    <li> Blog</li>
                    <li> FAQ</li>
                    <li> Watch List</li>
                </ul>
                <h5>
                © 2022 BestMovie. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
                </h5>
            </nav>
            {/* contact */}
            <div>
                <h4 className='text-lg'>Follow Us :</h4>
                <div className='flex items-center w-[90%] text-xl flex-wrap'>
                    <p className='m-2 border-transparent border-2 p-3 rounded-full bg-[#292929c2] box-shadow'>
                        <FaFacebook />
                    </p>
                    <p className='m-2 border-transparent p-3 rounded-full bg-[#292929c2] box-shadow'>
                        <FaGithub />
                    </p>
                    <p className='m-2 border-transparent p-3 rounded-full bg-[#292929c2] box-shadow'>
                        <FaTwitter />
                    </p>
                    <p className='m-2 border-transparent p-3 rounded-full bg-[#292929c2] box-shadow'>
                        <FaInstagram />
                    </p>
                </div>
            </div>
            {/* app on mobile */}
            <div className='space-y-4'>
                <h4 className='text-lg'>Mobile App:</h4>
                <div className='flex items-center lg:space-x-2 md:flex-col md:space-y-2 lg:flex-row lg:space-y-0'>
                    <img src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/022.png"
                    alt='error' className='w-[200px] h-[50px]'  />
                    <img src="https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2020/12/011.png"
                    alt='error' className='w-[200px] h-[50px]' />
                    
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer