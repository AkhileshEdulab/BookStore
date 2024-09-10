import React from 'react'
import Home from './home/Home'
import Courses from './course/Courses'
import { Navigate, Route, Routes} from "react-router-dom"
import SignUp from './components/SignUp'
import Contact from './components/Contact'
import Login from './components/Login'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import About from './components/about'


function App() {

  const [authUser,setAuthUser]=useAuth()
   console.log(authUser)

  return (
   
    <>
    
   <Toaster />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course' element={authUser? <Courses /> : <Navigate to="/signup" />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About/>} />
    </Routes>
   
     </>
  )
}

export default App

