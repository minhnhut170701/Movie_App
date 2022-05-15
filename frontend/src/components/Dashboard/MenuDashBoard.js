import React from "react";
import {AiOutlineAreaChart,AiOutlineUser} from "react-icons/ai"
import {RiMovie2Line} from "react-icons/ri"
export function MenuDashBoard({}) {
  return <div className='text-white p-10 w-[20%]'>
           <h1 className=' text-3xl font-bold text-center mb-5'>DashBoard</h1>
           <ul className=' flex flex-col space-y-5 text-center'>
               <li className='p-2 rounded-xl  hover:bg-[#f25f4c] border border-[#f25f4c]
               flex space-x-2 items-center justify-center'>
                   <h2 className='text-2xl'><AiOutlineAreaChart /></h2>
                   <h2>Thông số</h2>
                </li>
               <li className='p-2 rounded-xl  hover:bg-[#f25f4c] border border-[#f25f4c]
               flex space-x-2 items-center justify-center'>
                <h2 className='text-2xl'><RiMovie2Line /></h2>
                   <h2>Phim</h2>
               </li>
               <li className='p-2 rounded-xl  hover:bg-[#f25f4c] border border-[#f25f4c]
               flex space-x-2 items-center justify-center'>
                   <h2 className='text-2xl'><AiOutlineUser /></h2>
                   <h2>User</h2>
                </li> 
               <li className='p-2 rounded-xl  hover:bg-[#f25f4c] border border-[#f25f4c]'>Text 2</li>
               <li className='p-2 rounded-xl  hover:bg-[#f25f4c] border border-[#f25f4c]'>Text 3</li>
               <li className='p-2 rounded-xl  hover:bg-[#f25f4c] border border-[#f25f4c]'>Text 4</li>
           </ul>
       </div>;
}
  