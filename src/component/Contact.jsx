import Lottie from 'lottie-react';
import contact from '../anim/contact.json';
import '../sass/Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef(null);
    const timeRef = useRef(null);


    const sendEmail = (e) => {
        e.preventDefault();

        if (timeRef.current) {
            timeRef.current.value = new Date().toLocaleString();
        }

        Swal.fire({
            title: 'Sending...',
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    // console.log('Email sent:', result.text);
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Your message has been sent successfully.',
                    });
                },
                (error) => {
                    console.error('Error:', error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Send',
                        text: 'Something went wrong. Please try again later.',
                    });
                }
            );

        e.target.reset();
    };

    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <div className="innercontact">
                <div className="formContent">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="name" className="name" required />
                        <input type="tel" placeholder="Phone" name="phone" className="userPhone" required />
                        <input type="email" placeholder="Email" name="email" className="email" required />
                        <textarea placeholder="Message" name="message" className="msg" required />
                        <input type="hidden" name="time" ref={timeRef} />
                        <button type="submit" className="desktop-send-btn" style={{ position: 'relative' }}>
                            Send
                        </button>
                    </form>
                </div>
                <div className="animationContent">
                    <Lottie loop={true} animationData={contact} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
