import './TopNavBar.css';
import { BiMap } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";

function TopNavBar() {
    return (
        <div className='top-navbar'>
            <p><BiMap/>159-04 Hillside Avenue, Jamaica, New York 11432</p>
            <p><AiFillPhone/>347 617 9697</p>
        </div>
    );
};

export default TopNavBar;