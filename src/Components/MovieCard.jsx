import React from 'react';
const base_url = "https://image.tmdb.org/t/p/original/";
const MovieCard = (props) => {
   
  return (
    <div className='card1'>
        <div className='poster'>
        <img  src = {`${base_url}${props.poster_path}`} alt = {props.poster} key = {props.id}
    />
        </div>
        <div className='info'>
            <p className='title'><b style = {{color:"white"}}>Movie Name - </b>{props.title}</p>
            <p className='vote'><b  style = {{color:"white"}}>Movie Rating - </b>{props.vote_average}</p>
        </div>
    </div>
  )
}

export default MovieCard