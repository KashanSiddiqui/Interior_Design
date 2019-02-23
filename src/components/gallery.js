import React, { Component } from 'react';
import Roll from 'react-reveal/Roll';


class Gallery extends Component {
  render() {
    return (
      <div className="Gallery">
        {/* <!-- Gallery --> */}
        <section className="gallery py-5" id="gallery">
                    <div className="container py-md-5">
                        <div className="header text-center">
                            <h3 className="tittle mb-lg-5 mb-3">Our Gallery<span>.</span></h3>
                        </div>
                        <div className="row news-grids text-center">
                        <Roll left>
                            <div className="col-md-4 gal-img">
                                <a href="#gal1"><img src={require("../asssets/images/g1.jpg")} alt="news image" className="img-fluid" /></a>
                            </div>
                            </Roll>
                            <Roll right>
                            <div className="col-md-4 gal-img">
                                <a href="#gal2"><img src={require("../asssets/images/g2.jpg")} alt="news image" className="img-fluid" /></a>
                            </div>
                            </Roll>
                            <Roll left>
                            <div className="col-md-4 gal-img">
                                <a href="#gal3"><img src={require("../asssets/images/g3.jpg")} alt="news image" className="img-fluid" /></a>
                            </div>
                            </Roll>
                            <Roll right>
                            <div className="col-md-4 gal-img">
                                <a href="#gal4"><img src={require("../asssets/images/g4.jpg")} alt="news image" className="img-fluid" /></a>
                            </div>
                            </Roll>
                            <Roll left>
                            <div className="col-md-4 gal-img">
                                <a href="#gal5"><img src={require("../asssets/images/g5.jpg")} alt="news image" className="img-fluid" /></a>
                            </div>
                            </Roll>
                            <Roll right>
                            <div className="col-md-4 gal-img">
                                <a href="#gal6"><img src={require("../asssets/images/g6.jpg")} alt="news image" className="img-fluid" /></a>
                            </div>
                            </Roll>

                        </div>

                        {/* <!-- popup--> */}
                        <div id="gal1" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g1.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}

                        {/* <!-- popup--> */}
                        <div id="gal2" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g2.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}
                        {/* <!-- popup--> */}
                        <div id="gal3" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g3.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup3 --> */}
                        {/* <!-- popup--> */}
                        <div id="gal4" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g4.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}
                        {/* <!-- popup--> */}
                        <div id="gal5" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g5.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}
                        {/* <!-- popup--> */}
                        <div id="gal6" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g6.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Nulla viverra pharetra se, eget pulvinar neque pharetra ac int. placerat placerat dolor.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}

                    </div>
                </section>
                {/* <!--// gallery --> */}
      </div>
    );
  }
}

export default Gallery;