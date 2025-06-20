import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Myprofile from './pages/Myprofile';
import Myappointments from './pages/Myappointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import AppContextProvider from './context/AppContext';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forget from './pages/Forget';
import Reset from './pages/Reset';
import Otp from './pages/Otp';


const App = () => {
  return (
    <div className='font-primary'>
      <AppContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:speciality' element={<Doctors />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/forget' element={<Forget/>} />
            <Route path='/reset' element={<Reset/>} />
            <Route path='/Otp' element={<Otp/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/my-profile' element={<Myprofile />} />
            <Route path='/my-appointments' element={<Myappointments />} />
            <Route path='/appointments/:docId' element={<Appointment />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContextProvider>
    </div>
  )
}

export default App;
 