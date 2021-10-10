import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <input type="text" className="form-control" placeholder="Email Address *" /><br />
                        <input type="text" className="form-control" placeholder="Subject *" /><br />
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea><br />
                        <div className="submit-btn">
                            <button type="button" className="btn-brand"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;