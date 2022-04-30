import React from 'react';

import {AiFillCloseCircle,AiFillCheckCircle} from "react-icons/ai";

import {Link} from "react-router-dom"
import "./Pricing.css"

const PricingForm = () => {
  return (
    <div className='text-white'>
        <form className='table-auto  w-[85%] margin-center border-collapse bg-[#191919]'>
            <thead>
                <tr>
                    <th className='p-4'></th>
                    <th className='p-4'>
                        <div className='bg-[#141414] p-16 relative' >
                            <h4>$0/month</h4>
                            <span className='absolute -top-4 left-12 p-5 pl-10 pr-10  bg-red-600  item'>
                                Free
                            </span>
                        </div>
                    </th>
                    <th className='p-4'> 
                        <div className='bg-red-600 p-16 relative' >
                            <h4>$33/3month</h4>
                            <span className='absolute -top-4 left-9 p-5 pl-10 pr-10  text-red-600 bg-white  item'>
                                Premium
                            </span>
                        </div>
                    </th>
                    <th className='p-4'>
                        <div className='bg-[#141414] p-16 relative'>
                            <h4>$19/month</h4>
                            <span className='absolute -top-4 left-12 p-5 pl-10 pr-10  bg-red-600  item'>
                                Basic
                            </span>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr className='margin-center border border-transparent border-b-[#141414]'>
                    <td className='p-14'>Ad Free Entertainment</td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                    <td className='p-14 text-red-600 text-3xl'>
                        <p className='relative left-10'><AiFillCheckCircle /></p>
                    </td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                </tr>
                <tr className='margin-center border border-transparent border-b-[#141414]'>
                    <td className='p-14'>Ad Free Entertainment</td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                    <td className='p-14 text-red-600 text-3xl'>
                        <p className='relative left-10'><AiFillCheckCircle /></p>
                    </td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                </tr>
                <tr className='margin-center border border-transparent border-b-[#141414]'>
                    <td className='p-14'>Ad Free Entertainment</td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                    <td className='p-14 text-red-600 text-3xl'>
                        <p className='relative left-10'><AiFillCheckCircle /></p>
                    </td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                </tr>
                <tr className='margin-center border border-transparent border-b-[#141414]'>
                    <td className='p-14'>Ad Free Entertainment</td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                    <td className='p-14 text-red-600 text-3xl'>
                        <p className='relative left-10'><AiFillCheckCircle /></p>
                    </td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                </tr>
                <tr className='margin-center border border-transparent border-b-[#141414]'>
                    <td className='p-14'>Ad Free Entertainment</td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                    <td className='p-14 text-red-600 text-3xl'>
                        <p className='relative left-10'><AiFillCheckCircle /></p>
                    </td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                </tr>
                <tr className='margin-center border border-transparent border-b-[#141414]'>
                    <td className='p-14'>Ad Free Entertainment</td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                    <td className='p-14 text-red-600 text-3xl'>
                        <p className='relative left-10'><AiFillCheckCircle /></p>
                    </td>
                    <td className='p-14 text-3xl'>
                        <p className='relative left-10'><AiFillCloseCircle /></p>
                    </td>
                </tr>
                <tr className='margin-center border border-transparent boder-b-[#141414]'>
                    <td className='p-14'></td>
                    <td className='p-14 text-3xl'>
                        <Link to='/checkout' className='p-4 bg-red-600 uppercase text-xl'>subscribe</Link>
                    </td>
                    <td className='p-14  text-3xl'>
                        <Link to='/checkout' className='p-4 bg-red-600 uppercase text-xl'>subscribe</Link>
                    </td>
                    <td className='p-14 text-3xl'>
                        <Link to='/checkout' className='p-4 bg-red-600 uppercase text-xl'>subscribe</Link>
                    </td>
                </tr>
            </tbody>
        </form>
    </div>
  )
}

export default PricingForm