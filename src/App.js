import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";


function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
