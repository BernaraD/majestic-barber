import './Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <form method='POST' action="https://getform.io/f/ff3b7f0c-bb9f-4204-813a-ebd44563b8ff">

                <h1>Lets be in touch</h1>
                <label>Your Name</label>
                <input type='text' placeholder='Name' name='name'/>
                <label>Email</label>
                <input type='email' placeholder='Email' name='email'/>
                <label>Subject</label>
                <input type='text' placeholder='Subject' name='subject'/>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here' name='details'/>
                <button className='btn'>Submit</button>
            </form>

        </div>

    );
}

export default Contact;