import React, {useState, useEffect} from 'react';

import Movie from './Movie/Movie';
import About from './About/About';
import Popular from './Popular/Popular';
import InforHotmovie from './Header/InforHotmovie';



import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Spiner from './Spiner';
import { getData } from '../features/movie/movieSlice';




const Home = () => {
  const [cate, setCate] = useState(false)
  const [selec, setSelec] = useState('');

  const navigative =  useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)
  const {data, isLoading, isError, message} = useSelector((state) => state.movie)
  // check user have login
  useEffect(() =>{
    if(isError){
      console.log(message)
    }
    if(!user){
      navigative('/login')
    }
    dispatch(getData())
  }, [user,navigative, isError, message, dispatch])


  useEffect(() =>{
    setCate(false)
  }, [])

const fillterItem = (text) =>{
    if(text === 'Fillter'){
      setSelec(text)
      setCate(false)
      console.log(cate)

    }
    else if(text === 'huyen-ao'){
      setSelec(text)
      setCate(true)
      console.log(text)
    }
    else if(text === 'lang-man'){
      setSelec(text)
      setCate(true)
      console.log(text)
    }
    else if(text === 'hanh-dong'){
      setSelec(text)
      setCate(true)
      console.log(text)
    }
    else if(text === 'dramma'){
      setSelec(text)
      setCate(true)
      console.log(text)
    }
    else if(text === 'ky-ao'){
      setSelec(text)
      setCate(true)
      console.log(text)
    }
    else{
    
      setSelec(text)
      setCate(false)
    }
    
  }

  if(isLoading){
    return <Spiner />
  }
  return (
    <div className='relative'>
        <InforHotmovie />
        {/* categorize */}
        <select name="categorize" value={selec}
                onChange={(e) => fillterItem(e.target.value)}
               className="absolute top-24 left-[10%] z-20 bg-[#14141480] text-white p-2 outline-none">
                    <option value="Fillter">General</option>
                    <option value="huyen-ao">Huyền Ảo</option>
                    <option value="lang-man">Lãng Mạng</option>
                    <option value="hanh-dong">Hành Động</option>
                    <option value="dramma">Dramma</option>
                    <option value="ky-ao">Kỳ Ảo</option>
          </select>

        {cate ?  <Movie title="Top Movie" data={data.filter((item) => item.categoryforDev === selec)} isTop /> 
          : (
          <>
            <Movie title="Top Movie" data={data.slice(0,5)} isTop/>
            <About />
            <Movie title="Hot Today" data={data.slice(4,9)} />
            <Popular />
            <Movie title="Trending" data={data.slice(2,7)} />
          </>
        )}
        
    </div>
  )
}

export default Home