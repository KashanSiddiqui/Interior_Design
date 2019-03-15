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
                                        <p>Style & Decor is a most innovative designing firm based in Karachi. We design custom homes and renovations. Our firm is full service from concept through construction.</p>
                                    </div>
                                </div>
                                <div className="row my-4">
                                    <div className="col-md-4 mid-left-img">
                                        <img src={require("../asssets/images/6.jpg")} alt="news image" className="img-fluid" />
                                    </div>
                                    <div className="col-md-8 mid-right-info">
                                        {/* <h5 className="mb-4">RESIDENTIAL INTERIOR</h5> */}
                                        <p>Style & Decor comprises of skilled workers ,who got styling and crafting in their blood. The dedicated management are always seeking for the highest output by the designers and the diligent laborers . Style & Decor foresee the trends and are very much capable to conceive the real need of the customers and that is the reason that style & decor completely attracted by the genuine customers.</p>
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