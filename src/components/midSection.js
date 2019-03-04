import React, { Component } from 'react';

class MidSection extends Component {
  render() {
    return (
      <div className="MidSection">
        {/* <!--/mid-sec--> */}
        <section className="mid-sec py-5" id="mid">
                    <div className="container py-lg-5">
                                <div className="header pb-lg-3 pb-3 text-center">
                            <h3 className="tittle mb-lg-3 mb-3"> Who We Are<span>.</span></h3>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mid-right-content text-left mt-4">
                                <div className="row">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/5.jpg")} alt="news image" className="img-fluid"  />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        {/* <h5 className="mb-4">Commercial Interior</h5> */}
                                        <p>Decor Interior Design Inc. is a turnkey commercial interior design firm that specializes in tenant improvements and packaged office furniture solutions. We have proven our ability to create spaces that combine the ergonomic, functional, and aesthetic components that contribute to a productive work environment.</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/6.jpg")} alt="news image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        {/* <h5 className="mb-4">RESIDENTIAL INTERIOR</h5> */}
                                        <p>As a single source for turnkey commercial interior projects, we have the distinct advantage of offering specialty construction services, design, installation, and nationally recognized furniture brands through various procurement vehicles, such as GSA Contract and SBA 8(a).</p>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/7.jpg")} alt="news image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        <h5 className="mb-4">Workplace INTERIOR</h5>
                                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-md-6 mid-left-content text-left pl-lg-4">
                                <img src={require("../asssets/images/whoweare.png")} alt="news image" className="img-fluid" style={{backgroundColor:'transparent'}} />
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--//mid-sec--> */}
      </div>
    );
  }
}

export default MidSection;