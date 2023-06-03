import React from 'react'
import Popular from './Components/Popular';
import TopRated from './Components/TopRated';
import UpComing from './Components/UpComing';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Banner from './Components/Banner';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Banner/>
    <Routes>
      <Route path = '/' element = {<Home/>} />
      <Route path = '/popular' element = {<Popular/>} />
      <Route path = '/toprated' element = {<TopRated/>} />
      <Route path = '/upcoming' element = {<UpComing/>} />
    </Routes>
    </BrowserRouter>
  )
} 

export default App