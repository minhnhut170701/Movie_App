import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";

const Episode = () => {
  return (
      <div className='lg:w-[1200px] lg:margin-center'>
            <table className='w-full lg:table-fixed  border-separate border-spacing'>
                <thead className='bg-[#0f0f0f]'>
                    <tr>
                        <th className='md:p-10 p-4 text-left'>Links</th>
                        <th className='md:p-10 p-4'>Quality</th>
                        <th className='md:p-10 p-4'>Language</th>
                        <th className='md:p-10 p-4 lg:block hidden'>Player</th>
                        <th className='md:p-10 p-4 lg:block hidden'>Date Added</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='md:p-10  items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='md:p-10 p-4 '><p>720p</p></td>
                        <td className='md:p-10 p-4'><p>English</p></td>
                        <td className='md:p-10 p-4 lg:block hidden'><p>MediaMonkey</p></td>
                        <td className='md:p-10 p-4 lg:block hidden'><p>2022-20-04</p></td>
                    </tr>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='md:p-10  items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='md:p-10 p-4 '><p>720p</p></td>
                        <td className='md:p-10 p-4'><p>English</p></td>
                        <td className='md:p-10 p-4 lg:block hidden'><p>MediaMonkey</p></td>
                        <td className='md:p-10 p-4 lg:block hidden'><p>2022-20-04</p></td>
                    </tr>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='md:p-10 items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='md:p-10 p-4 '><p>720p</p></td>
                        <td className='md:p-10 p-4'><p>English</p></td>
                        <td className='md:p-10 p-4 lg:block hidden'><p>MediaMonkey</p></td>
                        <td className='md:p-10 p-4 lg:block hidden'><p>2022-20-04</p></td>
                    </tr>
                </tbody>
                
            
            
            </table>
      </div>
    
  )
}

export default Episode