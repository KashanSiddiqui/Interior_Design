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
                            <h3 className="tittle mb-lg-3 mb-3"> Who We Are<span>.</span></h3>
                        </div>
                        <div className="row ab-info second mt-lg-4">
                        <Fade bottom>
                            <div className="col-lg-3 ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/2.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Floor Design</h4>
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
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
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
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
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                            <Fade top>
                            <div className="col-lg-3 ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/4.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Architecture Design</h4>
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
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