import React, {useEffect,useState} from 'react'
import './Banner.css'
import axiosInstance from '../axios'   // use axios instance correctly
import { API_KEY, baseUrl, imageUrl } from '../Contants/Contants'
function Banner() {
    const [movie, setMovie] = useState()
useEffect(() =>{
     axiosInstance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data.results[20]);
        setMovie(response.data.results[1]);
    })},[])
  return (
     <div
      className="Banner"
      style={{
        backgroundImage: movie
          ? `url(${imageUrl}${movie.backdrop_path})`
          : "" // fallback
      }}
    >
        <div className='content'>
           
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>

</div>
<div className='fadeBottom'></div>

    </div>
  )
}
export default Banner