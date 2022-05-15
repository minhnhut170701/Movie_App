import React, {useMemo, useState} from 'react'

import {AiFillStar} from "react-icons/ai";
const Rate = ({count, setRating, rating, userRating}) => {

    
    const [hoverRating, setHoverRating] = useState(null)

    const handleText = () =>{
        switch (rating){
            case 0:
                return "Quá tệ";
            case 1: 
                return "Tệ";
            case 2: 
                return "Bình thường";
            case 3: 
                return "Hay";
            case 4: 
                return "Rất Hay";
            case 5: 
                return "Yêu thích";

            default:
                return "Đánh giá!"
        }
        
    }

    const starRating = useMemo(() => {
        return [...Array(count)].map((star, i) =>{
            const ratingValue = i + 1
            return (
                <label>
                    <input 
                    type="radio" 
                    name="rating" 
                    ref={userRating}
                    value={ratingValue} 
                    className="hidden"
                    onClick={() => setRating(ratingValue)}
                    />
                    <AiFillStar 
                        className='cursor-pointer'
                        color={ratingValue <= (hoverRating || rating) ? "#dc2626" : "#5a5a5a"}
                        size={20}
                        onMouseEnter={() => setHoverRating(ratingValue)}
                        onMouseLeave={() => setHoverRating(null)}
                     />
                   
                </label>
            );
        })
      }, [rating, hoverRating, count]);
  return (
    <div className='flex items-center space-x-2'>
        {starRating}
        <h3 className='ml-5'>{handleText()}</h3>
        
    </div>
  )
}


export default Rate