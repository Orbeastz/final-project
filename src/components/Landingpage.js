import React from 'react';
import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import BookingForm from './BookingForm';

function Landing (){
    return (
       <>
       <Nav />
       <Header />
       <BookingForm/>
       <Footer />
       </>
    )
}

export default Landing;