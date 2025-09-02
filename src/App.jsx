
import {  Routes, Route } from 'react-router-dom'
import UserLayout from './layout/UserLayout'
// import Home from './pages/Home'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import Home from './pages/Home'



function App() {
  
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />


        

        </Route>

      </Routes>
  
    </>
  )
}

export default App;
