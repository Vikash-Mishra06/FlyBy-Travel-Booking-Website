import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import TourDetailPage from './Components/Pages/TourDetail'
import CartPage from './Components/Pages/Cart'
import BookingConfirmation from './Components/Pages/TourBookingSummary'
import CheckOutPage from './Components/Pages/ConfirmYourBooking'
import PaymentPage from './Components/Pages/PaymentPage'; // adjust path as needed
import Footer from './Components/Footer/Footer'
import Tours from './Components/Pages/Tours'
import Hotels from './Components/Pages/Hotels'
import Transports from './Components/Pages/Transports'
import Restaurants from './Components/Pages/Restaurants'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'


const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/TourDetail/:id' element={<TourDetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckOutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/transports" element={<Transports />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App