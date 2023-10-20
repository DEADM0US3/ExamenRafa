import React from 'react';
import AboutUs from './AboutUs';
import Categorias from './Categorias';
import Footer from "./Footer";
import Header from './Header';
import Navbar from './Navbar';
function Index() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <Categorias/>
            <div  className=' m-10'></div>
            <Footer />
        </div>
    )
}

export default Index