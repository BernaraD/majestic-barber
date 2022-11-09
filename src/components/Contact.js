import './Contact.css';

function Contact () {
    return (
            <div className='contact'>
                <form method='POST' action="https://getform.io/f/e2e6a2db-b9d8-486b-9e78-e2b173f9b80b">

                    <h1>Lets be in touch</h1>
                    <label>Your Name</label>
                    <input type='text'></input>
                    <label>Email</label>
                    <input type='email'></input>
                    <label>Subject</label>
                    <input type='text'></input>
                    <label>Details</label>
                    <textarea rows='6' placeholder='Type a short message here' />
                    <button className='btn'>Submit</button>
                </form>
            </div>

    );
};

export default Contact;