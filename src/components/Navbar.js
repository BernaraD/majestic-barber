import './Navbar.css';
import MajesticBarberLogo from "../assets/Black and White Illustrated Barbershop Logo .png";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {

    const [color, setColor] = useState(false);

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

            <Link to='/'>
                <img src={ MajesticBarberLogo }
                     alt=""
                     className="logo"/>
            </Link>


            <ul className='nav-menu'>
                <li><Link to='home'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='services'>Services</Link></li>
                <li><Link to='products'>Products</Link></li>
                <li><Link to='testimonials'>Testimonials</Link></li>
                <li><Link to='contact'>Contact</Link></li>
            </ul>
        </div>

    );
};

export default Navbar;