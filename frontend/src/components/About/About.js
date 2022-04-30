import { ItemAbout } from './ItemAbout';
import React from 'react'

const About = () => {
  return (
    <div className='text-white max-w-7xl margin-center mt-24'>
       <div role="article" className='flex items-center space-x-10'>
           <img className='w-[50%]'
           src='http://digiflex.themezinho.net/wp-content/uploads/2020/12/side-image01.png' alt="error" />
           <div className='space-y-20'>
               <h1 className='text-5xl font-bold'>Best pick for hassle-free streaming experience.</h1>
               {/* line 1 */}
               <ItemAbout  
               img="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon01.png"
               title="Access while traveling" 
               des="Keep access to your entertainment content while roaming the world.Pick from thousands."   />
               <ItemAbout  
               img="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon02.png"
               title="Stream with no interruptions" 
               des="Pause for snacks, not buffering. Stream smoothly with our lightning-fast NordLynx protocol network."   />
               <ItemAbout  
               img="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon03.png"
               title="Stay secure at all times" 
               des="Securely access and enjoy your favorite content, even on public Wi-Fi. Your connection"   />
           </div>

       </div>
    </div>
  )
}

export default About