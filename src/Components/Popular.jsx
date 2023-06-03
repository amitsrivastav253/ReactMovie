import React, { useState } from 'react'
import { useEffect } from 'react'
import MovieCard from './MovieCard';
import axios from '../axios';
import requests from '../requests';
import './Style/Popular.css'

function Popular() {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchAllMovie)
            setMovie(request.data.results); 
        }
        fetchData()
    } , [])
  
    console.log(movie)
  return (
    <>
    <h1 style = {{fontFamily:"Aharoni",color:"white"}}>POPULAR MOVIES</h1>
     <div className = "movies">
     
          {movie.map(movie =>{
          return (
        <MovieCard {...movie} key = {movie.id}/>
      )  
      })}
     </div>
    </>
  )
}

export default Popular;

