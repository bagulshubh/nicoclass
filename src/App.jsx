import React ,{ useState } from 'react'
import './App.css'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';


function App() {

  return (
    <>
      <div className='App'>
        
        <Routes>

        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/test' element={<Test></Test>}></Route>

        </Routes>


      </div>
    </>
  )
}

export default App
