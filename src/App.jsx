import React ,{ useState } from 'react'
import './App.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  return (
    <>
      <div>
        
        <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        </Routes>


      </div>
    </>
  )
}

export default App
