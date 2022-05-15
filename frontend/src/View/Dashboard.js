import { MenuDashBoard } from '../components/Dashboard/MenuDashBoard';
import React from 'react'

const Dashboard = () => {
  return (
    <div className='max-w-full  h-[900px] mt-20 flex justify-around'>
        {/* left */}
        <MenuDashBoard     />
       {/* center */}
       <div className='text-white p-5 w-[60%] border rounded-xl mt-20 flex'>
          <div className='w-[30%] bg-[#ff8906] h-[400px]'>

          </div>
          <div className='w-[70%]'>

            </div>
       </div>

       {/* right */}
       <div className='text-white p-10 w-[20%]'>
           <h1>center</h1>
       </div>

    </div>
  )
}

export default Dashboard