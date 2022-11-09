import './Hero.css';
import { Link } from "react-router-dom";
import heroImg from '../assets/hero 2.jpg';

function Hero() {
    return (
        <div className='hero'>
            <img src={heroImg} alt="hero-img" id='img'/>

            <div className='content'>
                <h1>Majestic Barber Shop</h1>
                <div>
                    <Link to='/' className='btn'>Learn More</Link>
                    <Link to='/' className='btn btn-light'>Make an appointment</Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;