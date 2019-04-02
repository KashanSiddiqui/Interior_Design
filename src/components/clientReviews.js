import React, { Component } from 'react';


class ClientReviews extends Component {
  render() {
    return (
      <div className="ClientReviews">
        {/* <!--/testimonials--> */}
        <section className="testimonials py-5" id="testimonials">
                    <div className="container py-md-3">
                        <div className="header-wthree text-center">
                            <h3 className="tittle mb-lg-5 mb-3"> Client Reviews<span>.</span></h3>
                        </div>
                        <div className="row">
                            <div className="col-md-6 test-info-w3ls text-left">
                                <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right"></span></p>

                                <div className="test-img text-right mb-3">
                                    <img src={require("../asssets/images/te2.jpg")} className="img-fluid" alt="user-image" />
                                </div>
                                <h3 className="my-md-2 my-3 text-right">Jenifer Burns</h3>

                                <ul className="list-unstyled w3ls-icons clients text-right">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star-half-o"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 test-info-w3ls text-left">
                                <p><span className="fa fa-quote-left"></span> Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.Nulla pellentesque mi non laoreet eleifend. Integer porttitor mollisar lorem, at molestie arcu pulvinar ut. <span className="fa fa-quote-right"></span></p>

                                <div className="test-img text-right mb-3">
                                    <img src={require("../asssets/images/te3.jpg")} className="img-fluid" alt="user-image" />
                                </div>
                                <h3 className="my-md-2 my-3 text-right"> Abraham Smith</h3>

                                <ul className="list-unstyled w3ls-icons clients text-right">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-star-half-o"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--//testimonials--> */}
      </div>
    );
  }
}

export default ClientReviews;
