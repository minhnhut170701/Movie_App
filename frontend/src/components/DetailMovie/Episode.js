import React from 'react';
import {BsFillPlayFill} from "react-icons/bs";

const Episode = () => {
  return (
      <div className='w-[1200px] margin-center'>
            <table className='w-full table-fixed border-separate border-spacing'>
                <thead className='bg-[#0f0f0f]'>
                    <tr>
                        <th className='p-10 text-left'>Links</th>
                        <th className='p-10'>Quality</th>
                        <th className='p-10'>Language</th>
                        <th className='p-10'>Player</th>
                        <th className='p-10'>Date Added</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='p-10 items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='p-10 '><p>720p</p></td>
                        <td className='p-10'><p>English</p></td>
                        <td className='p-10'><p>MediaMonkey</p></td>
                        <td className='p-10'><p>2022-20-04</p></td>
                    </tr>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='p-10 items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='p-10 '><p>720p</p></td>
                        <td className='p-10'><p>English</p></td>
                        <td className='p-10'><p>MediaMonkey</p></td>
                        <td className='p-10'><p>2022-20-04</p></td>
                    </tr>
                    <tr className='bg-[#191919] relative -top-4' >
                        <td className='p-10 items-center'>
                            <button className='css-button-shadow-border-sliding--rose flex items-center space-x-2'> 
                                <p className='text-2xl'><BsFillPlayFill /></p>
                                <p>Play</p>
                            </button>
                        </td> 
                        <td className='p-10 '><p>720p</p></td>
                        <td className='p-10'><p>English</p></td>
                        <td className='p-10'><p>MediaMonkey</p></td>
                        <td className='p-10'><p>2022-20-04</p></td>
                    </tr>
                </tbody>
                
            
            
            </table>
      </div>
    
  )
}

export default Episode