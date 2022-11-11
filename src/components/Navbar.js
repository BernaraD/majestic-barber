import './Navbar.css';
import MajesticBarberLogo from "../assets/Black and White Illustrated Barbershop Logo .png";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

    const [color, setColor] = useState(false);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className={ color ? 'header header-bg' : 'header' }>

            <Link to='hero'>
                <img src={ MajesticBarberLogo }
                     alt=""
                     className="logo"/>
            </Link>


            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><Link to='home'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='services'>Services</Link></li>
                <li><Link to='products'>Products</Link></li>
                <li><Link to='testimonials'>Testimonials</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>

            <div className='hamburger' onClick={ handleClick }>
                { click ? (<FaTimes size={ 20 } style={ { color: "#fff" } }/>) : (
                    <FaBars size={ 20 } style={ { color: "#fff" } }/>) }

            </div>
        </div>

    );
}

export default Navbar;