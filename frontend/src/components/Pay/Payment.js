import React, {useState, useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
const delay = 2;
const Payment = ({handleNext}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    let timer1 = setTimeout(() => setLoading(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [])
  return (
    <div>
       {loading ? (
         <div className='p-6'>
            <button className='p-4 bg-red-600'
            onClick={() => handleNext()}>Click to Finish</button>
       </div>

      ):(
        <div className='flex items-center justify-center space-x-3 p-6'>
          <p><CircularProgress color="inherit" /></p>
          <p>Waiting...</p>
        </div>
        
      )}
      

    </div>
   
    
  )
}

export default Payment