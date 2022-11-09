import './About.css'
import HairCut1 from '../assets/HairCut1.JPG';
import HairCut2 from '../assets/HairCut2.JPG';
import { Link } from "react-router-dom";
function About() {
    return (
        <div className='about' name='about' >
            <div className='left'>
                <h1>Welcome to the <br/> Majestic Barbershop</h1>
                <p>Located at the heart of the Queens, Majestic Barbershop is the ideal
                    barbershop to get all of your grooming needs fulfilled. From a well styled haircut,
                    to the perfect shape up, and a sharp shave, Majestic Barbershop only aims for excellence.
                    Our professional barbers were trained to take care of their client, and leave them with a
                    signature haircut that everyone will recognize.
                    Come in and grab a seat in our chair, express your desired haircut,
                    and unwind while we groom you to perfection..</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={HairCut1} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={HairCut2} className='img' alt='' />
                    </div>
                </div>
            </div>


            <p></p>

        </div>
    );
};

export default About;