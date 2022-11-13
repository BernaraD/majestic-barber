import './Hero.css';
import { Link } from "react-router-dom";
import heroImg from '../assets/barbershopHero.jpg';
import { BiMap } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";

function Hero() {
    return (
        <div className='hero' name='home'>
            <img src={heroImg} alt="hero-img" id='img'/>

            <div className='content'>

                <h1>Majestic Barber Shop</h1>
                <div className='hero-button'>
                    <Link to="https://booksy.com/widget/code.js?id=871647&country=us&lang=en"
                          className='button'>Make an appointment</Link>
                </div>

                <div className='address'>
                    <p><BiMap/>159-04 Hillside Avenue, Jamaica, New York 11432</p>
                    <p><AiFillPhone/>347 617 9697</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;