import React from "react";
export function ItemAbout({title, des, img}) {
  return (
    <div role="article" className='flex items-center space-x-4'>
    <img className='w-24 h-24 bg-white p-2' src={img} alt="error" />
        <div className="space-y-4">
            <h3 className="text-xl font-bold">{title}</h3>
            <h4>{des}</h4>
        </div>
    </div>
  )
}
  