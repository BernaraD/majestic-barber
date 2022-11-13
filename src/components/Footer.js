import './Footer.css';
import { AiFillFacebook, AiFillInstagram, AiFillPhone } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { FaYelp } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>


            <ul>
                <li><a href="https://www.instagram.com/"><AiFillInstagram/></a></li>
                <li><a href="https://www.facebook.com/"></a><AiFillFacebook/></li>
                <li><a href="https://www.yelp.com/biz/majestic-barbershop-and-nail-salon-jamaica"><FaYelp/></a></li>
            </ul>


            <p><BiMap/>159-04 Hillside Avenue, Jamaica, New York 11432</p>
            <p><AiFillPhone/>347 617 9697</p>
        </div>
    );
};

export default Footer;