import React from 'react'
import {Link} from "react-router-dom"
const Setting = () => {
  return (
    <div className='text-white bg-[#191919] p-20 pt-5 pb-5'>
        <ul className=' flex flex-col space-y-4'>
            <li className='hover:underline'>Thông Tin</li>
            <li className='hover:underline'>Admin</li>
            <li className='hover:underline'>
              <Link to="/dashboard">DashBoard</Link>
            </li>
        </ul>

    </div>
  )
}

export default Setting