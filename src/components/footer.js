import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        {/* <!-- footer --> */}
        <footer className="footer-content">
                    <div className="layer footer">
                        <div className="container-fluid">
                            <div className="row footer-top-inner-w3ls">
                                <div className="col-lg-4 col-md-6 footer-top mt-md-0 mt-sm-5">
                                    <h2>
                                        <a className="navbar-brand" href="index.html"><span className="fa fa-gg" aria-hidden="true"></span>
                                          Style &  Decor
                        </a>
                                    </h2>
                                    <p className="my-3">Style and Decor is a most innovative designing firm based in Karachi. We design custom homes and renovations. Our firm is full service from concept through construction.</p>
                                    {/* <p>
                                        Id quod possimusapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci.
                        </p> */}
                                </div>
                                <div className="col-lg-2 col-md-6 mt-md-0 mt-5">
                                    <div className="footer-w3pvt">
                                        <h3 className="mb-3 w3pvt_title">Navigation</h3>
                                        <hr />
                                        <ul className="list-info-w3pvt">
                                            <li>
                                                <Link to="/" className="scroll">
                                                    Home
                                </Link>
                                            </li>
                                            <li className="my-2">
                                                <Link to="/about" className="scroll">
                                                    About Us
                                </Link>
                                            </li>
                                            <li className="my-2">
                                                <a href="#gallery" className="scroll">
                                                    Gallery
                                </a>
                                            </li>
                                            <li className="mb-2">
                                                <a href="#services" className="scroll">
                                                    Services
                                </a>
                                            </li>
                                            <li>
                                                <Link to="/contact" className="scroll">
                                                    Contact Us
                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    {/* <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                        <div className="footer-w3pvt">
                                            <h3 className="mb-3 w3pvt_title">Links</h3>
                                            <hr />
                                            <ul className="list-info-w3pvt">
                                                <li>
                                                    <a href="#about" className="scroll">
                                                        Our Mission
                                    </a>
                                                </li>
                                                <li className="my-2">
                                                    <a href="#blog" className="scroll">
                                                        Latest Posts
                                    </a>
                                                </li>
                                                <li className="my-2">
                                                    <a href="#">
                                                        Explore
                                    </a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#contact" className="scroll">
                                                        Find us
                                    </a>
                                                </li>
                                                <li>
                                                    <a href="index.html">
                                                        Privacy Policy
                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}
                                <div className="col-lg-3 col-md-6 mt-lg-0 mt-5">
                                    <div className="footer-w3pvt">
                                        <h3 className="mb-3 w3pvt_title">Contact Us</h3>
                                        <hr />
                                        <div className="last-w3ls-contact">
                                            <p>
                                                <a href="#">Styledecor786@gmail.com</a>
                                            </p>
                                        </div>
                                        <div className="last-w3ls-contact my-2">
                                            <p>02136673223</p>
                                        </div>
                                        <div className="last-w3ls-contact my-2">
                                            <p>03131021018</p>
                                        </div>
                                        <div className="last-w3ls-contact my-2">
                                            <p>03171248909</p>
                                        </div>
                                        <div className="last-w3ls-contact">
                                            <p>1,2 ground floor Blue sky Residency,
                                    <br /> Block H, North Nazimabad</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <p className="copy-right-grids text-li text-center my-sm-4 my-4">© 2019 Decor. All Rights Reserved | Design by
                    <a href="#"> Oculend </a>
                            </p>
                            <div className="w3ls-footer text-center mt-4">
                                <ul className="list-unstyled w3ls-icons">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-facebook-f"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-dribbble"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-vk"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="move-top text-right"><a href="#home" className="move-top"> <span className="fa fa-angle-up  mb-3" aria-hidden="true"></span></a></div>
                        </div>
                        {/* <!-- //footer bottom --> */}
                    </div>
                </footer>
                {/* <!-- //footer --> */}
      </div>
    );
  }
}

export default Footer;