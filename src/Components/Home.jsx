import React from 'react'
import Row from './Row';

import requests from '../requests';
const Home = () => {
  return (
  <>
  <Row title = "All Movies" fetchUrl = {requests.fetchAllMovie}  />
  <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}  />
  <Row title = "UpComing Movies" fetchUrl = {requests.fetchUpComing}  /> 
  <Row title = "Top Rated Movies" fetchUrl = {requests.fetchTopRated}  />

 
  </>
  )
}

export default Home
