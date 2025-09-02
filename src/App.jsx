
import {  Routes, Route } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
// import Home from './pages/Home'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'

import Destinations from './pages/Destinations'
import Home1 from './pages/Home1'
import Blog from './pages/blog';


function App() {
  
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home1 />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="destinations" element={<Destinations />} />
          <Route path="home1" element={<Home1 />} />


          <Route path='blog' element={<Blog/>} />

        </Route>

      </Routes>
  
    </>
  )
}

export default App;
