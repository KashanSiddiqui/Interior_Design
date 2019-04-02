import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class MaintenanceServices extends Component {
  render() {
    return (
      <div className="MaintenanceServices">
        {/* <!--/ about --> */}
        <section className="services py-5" id="services">
                    <div className="container py-md-5">
                        <div className="header pb-lg-3 pb-3 text-center">
                            <h3 className="tittle mb-lg-3 mb-3"> Services We provide<span>.</span></h3>
                        </div>
                        <div className="row ab-info second mt-lg-4">
                        <Fade bottom>
                            <div className="col-lg-3 ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/2.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Interior Design</h4>
                                        <p> We offer budget based personalized designs and lavishly built home designs for flats and bungalows.</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                            <Fade top>
                            <div className="col-lg-3 ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/1.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Commercial Interior</h4>
                                        <p>When you have a clear brand message that radiates through everything you do it helps to distinguish you from your competitors
We can help with that.</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                            <Fade bottom>
                            <div className="col-lg-3 ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/3.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Exterior Design</h4>
                                        <p>We can make important design decisions that are going to impact the appearance of your home.
When it comes to exteriors of home, symmetry and balance has a key role to play</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                            <Fade top>
                            <div className="col-lg-3 ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/4.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Work space Design</h4>
                                        <p>Great office design goes beyond the physical, practical concerns and takes into account the psychological and emotional well-being of the people using the space.</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </section>
                {/* <!--// about --> */}
      </div>
    );
  }
}

export default MaintenanceServices;