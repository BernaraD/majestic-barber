import './Hero.css';
import { Link } from "react-router-dom";
import heroImg from '../assets/hero 2.jpg';

function Hero() {
    return (
        <div className='hero' name='home'>
            <img src={heroImg} alt="hero-img" id='img'/>

            <div className='content'>
                <h1>Majestic Barber Shop</h1>
                <div className='hero-button'>
                    <Link to='/' className='button'>Learn More</Link>
                    <Link to='https://booksy.com/widget/code.js?id=871647&country=us&lang=en' className='button'>Make an appointment</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;