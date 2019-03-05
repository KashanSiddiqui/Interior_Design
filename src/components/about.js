import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import '../asssets/css/about.css'

class About extends Component {
    render() {
        return (
            <div className="About">
                <Header />
                <div className="about-content" id="home">
                    <div className="about-layer" style={{ height: '40vh' }}>
                    <div className=" about-head ">
                                <h3 className="tittle" style={{ color: 'white' }}>About Us<span>.</span></h3>
                            </div>
                    </div>
                </div>

                {/* <!-- banner-bottom-wthree --> */}
                <section className="banner-bottom-wthree " id="about">
                    {/* <img src={require('../asssets/images/contact.jpg')}/> */}
                    <div className="container py-md-5 px-lg-5">

                        <div className="content-right-bottom mt-md-0 mt-3 text-center">
                            <p><strong className="text-capitalize">style & decor</strong> is a most innovative designing firm based in Karachi. We design custom homes and renovations. Our firm is full service from concept through construction.</p>
                            {/* <p className="mt-2">Integer pulvinar leo id viverra feugiat.<strong className="text-capitalize"> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit.</strong> Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.</p>
                            <p className="mt-3"><strong className="text-capitalize">Integer pulvinar leo id viverra feugiat.</strong> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula.</p> */}
                        </div>
                        <div className="row banner-grids mt-lg-5">
                            <div className="col-lg-4 banner-grid">
                                <div className="content-grid-info">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <span className="fa fa-user" aria-hidden="true"></span>
                                        </div>
                                        <div className="col-lg-10">
                                            <h4 className="mb-3">Mission</h4>
                                            <p>Our mission is to provide creative and timeless interiors by bringing together inspiration and imagination.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 banner-grid">
                                <div className="content-grid-info">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <span className="fa fa-eye" aria-hidden="true"></span>
                                        </div>
                                        <div className="col-lg-10">
                                            <h4 className="mb-3">Vision</h4>
                                            <p>Style & Decor have the simple goal of connecting life and style. Finding that enviable mix of style and warmth that exudes your true aesthetic and sticks to your budget - it's what we do best!.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 banner-grid">
                                <div className="content-grid-info">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <span className="fa fa-tasks" aria-hidden="true"></span>
                                        </div>
                                        <div className="col-lg-10">
                                            <h4 className="mb-3">Work</h4>
                                            <p>style & decor comprises of skilled workers working 24 hour ,who got styling and crafting in their blood.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- //banner-bottom-wthree --> */}
                <Footer />
            </div>
        );
    }
}

export default About;