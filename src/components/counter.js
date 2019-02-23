import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        {/* <!--/counter--> */}
        <section className="stats" id="plans">
                    <div className="container">
                        <div className="row text-center stats-content-w3pvt">
                            <div className="col-lg-6 text-left pr-lg-5">
                                <h3 className="tittle two mb-lg-5 mb-4">Stats & Pricing Plans<span>.</span></h3>
                                <p><strong className="text-capitalize"> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit.</strong>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. </p>
                            </div>
                            <div className="col-md-6 stats-left">
                                <div className="row">
                                    <div className="col-md-6 counter-gd">
                                        <div className="counter">
                                            <h3 className="timer count-title count-number">312</h3>
                                            <p className="count-text">Fresh Ideas</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 counter-gd">
                                        <div className="counter">
                                            <h3 className="timer count-title count-number">1980</h3>
                                            <p className="count-text">Project Completed</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 counter-gd">
                                        <div className="counter">
                                            <h3 className="timer count-title count-number">600</h3>
                                            <p className="count-text">Hours Of Work</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 counter-gd">
                                        <div className="counter">
                                            <h3 className="timer count-title count-number">550</h3>
                                            <p className="count-text">Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ab-info mt-lg-5">
                            <div className="col-lg-3 price-main text-center">
                                <div className="pricing-grid card">
                                    <div className="card-body">
                                        <h4 className="text-uppercase mb-3">ECONOMY</h4>
                                        <h5 className="card-title pricing-card-title">
                                            <span className="align-top">$</span>199
                                <label>Per Month</label>
                                        </h5>
                                        <ul className="price-in list-unstyled mt-3 mb-4">
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>

                                        </ul>
                                        <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase scroll" href="#contact">
                                                Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 price-main text-center">
                                <div className="pricing-grid card">
                                    <div className="card-body">
                                        <h4 className="text-uppercase mb-3">BUSINESS</h4>
                                        <h5 className="card-title pricing-card-title">
                                            <span className="align-top">$</span>199
                                <label>Per Month</label>
                                        </h5>
                                        <ul className="price-in list-unstyled mt-3 mb-4">
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>

                                        </ul>
                                        <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase scroll" href="#contact">
                                                Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 price-main text-center">
                                <div className="pricing-grid card">
                                    <div className="card-body">
                                        <h4 className="text-uppercase mb-3">GOLD</h4>
                                        <h5 className="card-title pricing-card-title">
                                            <span className="align-top">$</span>199
                                <label>Per Month</label>

                                        </h5>
                                        <ul className="price-in list-unstyled mt-3 mb-4">
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>

                                        </ul>
                                        <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase scroll" href="#contact">
                                                Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 price-main text-center">
                                <div className="pricing-grid card">
                                    <div className="card-body">
                                        <h4 className="text-uppercase mb-3">PLATINUM</h4>
                                        <h5 className="card-title pricing-card-title">
                                            <span className="align-top">$</span>199
                                <label>Per Month</label>
                                        </h5>
                                        <ul className="price-in list-unstyled mt-3 mb-4">
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                            <li>Lorem Ipsum</li>
                                        </ul>
                                        <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase scroll" href="#contact">
                                                Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!--//counter--> */}
      </div>
    );
  }
}

export default Counter;