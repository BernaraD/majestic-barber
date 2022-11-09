import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import TopNavBar from "./components/TopNavbar";
import Contact from "./components/Contact";


function App() {
    return (
        <>

            <Navbar/>
            <TopNavBar />
            <Hero/>
            <About />
            <Contact />
        </>
    );
}

export default App;
