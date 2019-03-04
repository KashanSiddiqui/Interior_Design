import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../asssets/css/contact.css'


class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Header />
                <div className="contact-content" id="home">
                    <div className="contact-layer" style={{ height: '40vh' }}>
                    <div className=" about-head ">
                                <h3 className="tittle" style={{ color: 'white' }}>Contact Us<span>.</span></h3>
                            </div>
                    </div>
                </div>
                {/* <!-- contact --> */}
                <section className="contact py-5" id="contact">
                    <div className="container pb-5">
                        {/* <div className="header py-lg-5 pb-3 text-center">
                            <h3 className="tittle mb-lg-5 mb-3"> Contact Us<span>.</span></h3>
                        </div> */}
                        <ul className="list-unstyled row text-left mb-lg-5 mb-3">
                            <li className="col-lg-4 adress-info">
                                <div className="row">
                                    <div className="col-md-3 text-lg-center adress-icon">
                                        <span className="fa fa-map-marker"></span>
                                    </div>
                                    <div className="col-md-9 text-left">
                                        <h6>Location</h6>
                                        <p>The company name
                                <br />New York City. </p>
                                    </div>
                                </div>
                            </li>

                            <li className="col-lg-4 adress-info">
                                <div className="row">
                                    <div className="col-md-3 text-lg-center adress-icon">
                                        <span className="fa fa-envelope-open-o"></span>
                                    </div>
                                    <div className="col-md-9 text-left">
                                        <h6>Email</h6>
                                        <a href="mailto:info@example.com">mail@example.com</a>
                                        <br />
                                        <a href="mailto:info@example.com">mail2@example.com</a>
                                    </div>
                                </div>
                            </li>
                            <li className="col-lg-4 adress-info">
                                <div className="row">
                                    <div className="col-md-3 text-lg-center adress-icon">
                                        <span className="fa fa-mobile"></span>
                                    </div>
                                    <div className="col-md-9 text-left">
                                        <h6>Phone Number</h6>
                                        <p>+ 1234567890</p>
                                        <p>+ 0987654321</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="contact-form mx-auto text-left mt-lg-5 mt-4">
                            <form name="contactform" id="contactform1" method="post" action="#">
                                <div style={{ textAlign: 'center', margin: '0 auto' }}>
                                    <h1 style={{ marginBottom: '50px', color: '#F4BB7D' }}><b>Work With Style & Decor!</b></h1>
                                    <p style={{ marginBottom: '50px' }}> If you are interested in working with us, please fill out the following introductory questionnaire. By filling this out, you tell us about you and your design needs. From there, our team will give you a call to quickly chat about how we can help and to set up your initial consultation.
                                    </p>
                                    <h6 style={{ marginBottom: '50px',color:'#F4BB7D' }}>WE ARE EXCITED TO WORK WITH YOU!</h6>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 con-gd">
                                        <div className="form-group" data-aos="fade-up">
                                            <label>Name *</label>
                                            <input type="text" className="form-control" id="name" placeholder="" name="name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 con-gd">
                                        <div className="form-group" data-aos="fade-up">
                                            <label>Email *</label>
                                            <input type="email" className="form-control" id="email" placeholder="" name="email" required="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 con-gd">
                                        <div className="form-group" data-aos="fade-up">
                                            <label>Phone No. *</label>
                                            <input type="text" className="form-control" id="phone" placeholder="" name="phone" required="" />
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group mb-5">
                                    <label>How can we help?</label>
                                    <textarea name="issues" className="form-control" id="iq" placeholder="" required=""></textarea>
                                </div>
                                <div className="contact-page">
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="map mt-md-5 mt-4">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783" className="map" style={{ border: "0", allowfullscreen: "" }}></iframe> </div>
                    </div>

                </section>
                {/* <!-- //contact --> */}
                <Footer />
            </div>
        );
    }
}

export default Contact;
