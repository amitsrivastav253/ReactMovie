import React, { useEffect, useState  } from 'react'
import axios from '../axios';
import './Style/Row.css'
const base_url = 'https://image.tmdb.org/t/p/original/'
function Row({title,fetchUrl}) {
    const [movie,setMovie] = useState([]);
    useEffect(()=>{
    async function fetchData(){
    const request = await axios.get(fetchUrl);
    setMovie(request.data.results);
    return request;
  }fetchData()
    },[fetchUrl])
    // console.log(movie)
  return (
    <div className='row'>
        <h1 style = {{fontFamily:"Aharoni",color:"white"}}>
            {title}
        </h1>
        <div className='row_posters'>
        {movie.map(movie =>{
    return (
      
     <img className = "row_poster" src = {`${base_url}${movie.poster_path}`} alt = {movie.original_title} key = {movie.id}
    />
      )
      })}
        </div>
    </div>
  )
}
export default Row;



