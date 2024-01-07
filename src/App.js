import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landingpage';
import BookingForm from './components/BookingForm'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Landing/>} />
    <Route path="Header" element={<Header/>} />
    <Route path="Nav" element={<Nav/>} />
    <Route path="Footer" element={<Footer/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
