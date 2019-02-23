import React, { Component } from 'react';

class MidSection extends Component {
  render() {
    return (
      <div className="MidSection">
        {/* <!--/mid-sec--> */}
        <section className="mid-sec py-5" id="mid">
                    <div className="container py-lg-5">
                        <div className="row">
                            <div className="col-md-6 mid-right-content text-left mt-4">
                                <div className="row">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/5.jpg")} alt="news image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        <h5 className="mb-4">AGENCY INTERIOR</h5>
                                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/6.jpg")} alt="news image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        <h5 className="mb-4">RESIDENTIAL INTERIOR</h5>
                                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/7.jpg")} alt="news image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        <h5 className="mb-4">COFFESHOP INTERIOR</h5>
                                        <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mid-left-content text-left pl-lg-4">
                                <img src={require("../asssets/images/mid.jpg")} alt="news image" className="img-fluid" />
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