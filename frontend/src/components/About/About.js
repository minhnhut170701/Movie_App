import { ItemAbout } from './ItemAbout';
import React from 'react'
import about from "../../images/about-01.png";
import icon1 from "../../images/icon01.png";
import icon2 from "../../images/icon02.png";
import icon3 from "../../images/icon03.png";

const About = () => {
  return (
    <div className='text-white max-w-7xl margin-center mt-24'>
       <div role="article" className='flex md:flex-row flex-col p-4 items-center space-x-10'>
           <img className='md:w-[50%] w-full'
           src={about} alt="banner" />
           <div className='space-y-20'>
               <h1 className='text-5xl font-bold'>Best pick for hassle-free streaming experience.</h1>
               {/* line 1 */}
               <ItemAbout  
               img={icon1}
               title="Access while traveling" 
               des="Keep access to your entertainment content while roaming the world.Pick from thousands."   />
               <ItemAbout  
               img={icon2}
               title="Stream with no interruptions" 
               des="Pause for snacks, not buffering. Stream smoothly with our lightning-fast NordLynx protocol network."   />
               <ItemAbout  
               img={icon3}
               title="Stay secure at all times" 
               des="Securely access and enjoy your favorite content, even on public Wi-Fi. Your connection"   />
           </div>

       </div>
    </div>
  )
}

export default About