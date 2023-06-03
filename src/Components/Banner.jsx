import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../axios';
import requests from '../requests';
import './Style/Banner.css'
function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchAllMovie)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1)
                ]
            );
            return request;
        }
        fetchData()
    } , [])
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "...":str;
    }
    // console.log(movie)
  return (
    <>
    <header className='banner'
       style = {{
        backgroundSize:"cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
        )`,
        backgroundPosition:"center-center",
       
        
       }}   
    > 
        {/* Rating */}
       <h4>Movie Rating:-{movie?.vote_average}</h4>
       {/* release_date */}
       <h4>Release Date:-{movie?.release_date}</h4>
        {/* title */}
        <h2> {movie?.title || movie?.name || movie?.original_name} </h2> <br/>
         
        {/* 2 buttons */}
        <button className='banner_button' >Play</button>
       <button className='banner_button' >My List</button>
        {/* description */}
       
        <h3>Overview -- <br/> {truncate(movie?.overview, 150)} </h3> <br/><br/>
        
        
    </header>
    <div className='banner--fadeBottom'></div>
    </>
  )
}

export default Banner;