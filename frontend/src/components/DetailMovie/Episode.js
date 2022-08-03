import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";

const Episode = () => {
  return (
      <div className='lg:w-[1300px] md:w-full sm:w-full w-[300px] lg:margin-center overflow-x-auto'>
            <table className='w-full table-auto  border-separate border-spacing'>
                <thead className='bg-[#0f0f0f]'>
                    <tr>
                        <th className='lg:p-10 p-4 text-left'>Links</th>
                        <th className='lg:p-10 p-4'>Quality</th>
                        <th className='lg:p-10 p-4'>Language</th>
                        <th className='lg:p-10 p-4 '>Player</th>
                        <th className='lg:p-10 p-4'>Date Added</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='lg:p-10  items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='md:p-10 p-4 '><p>720p</p></td>
                        <td className='md:p-10 p-4'><p>English</p></td>
                        <td className='md:p-10 p-4 '><p>MediaMonkey</p></td>
                        <td className='md:p-10 p-4'><p>2022-20-04</p></td>
                    </tr>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='lg:p-10  items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='lg:p-10 p-4 '><p>720p</p></td>
                        <td className='lg:p-10 p-4'><p>English</p></td>
                        <td className='lg:p-10 p-4 '><p>MediaMonkey</p></td>
                        <td className='lg:p-10 p-4 '><p>2022-20-04</p></td>
                    </tr>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='lg:p-10 items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='lg:p-10 p-4 '><p>720p</p></td>
                        <td className='lg:p-10 p-4'><p>English</p></td>
                        <td className='lg:p-10 p-4'><p>MediaMonkey</p></td>
                        <td className='lg:p-10 p-4 '><p>2022-20-04</p></td>
                    </tr>
                </tbody>
                
            
            
            </table>
      </div>
    
  )
}

export default Episode