import React, { Component } from "react";
import Slider from "react-slick";
import Fade from 'react-reveal/Fade';


export default class SliderReactSlick extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: false,
      speed: 1000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <section className="services py-5" id="services">
                    <div className="container py-md-5">
                        <div className="header pb-lg-3 pb-3 text-center">
                            <h3 className="tittle mb-lg-3 mb-3"> Services We provide<span>.</span></h3>
                        </div>
                        <div className="row ab-info second mt-lg-12">
        <Slider {...settings}>
                        {/* <Fade bottom> */}
                            <div className=" ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/2.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Floor Design</h4>
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                                    </div>
                                </div>
                            </div>
                            {/* </Fade> */}
                            {/* <Fade top> */}
                            <div className=" ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/1.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Commercial Interior</h4>
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                                    </div>
                                </div>
                            </div>
                            {/* </Fade> */}
                            {/* <Fade bottom> */}
                            <div className=" ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/3.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Exterior Design</h4>
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                                    </div>
                                </div>
                            </div>
                            {/* </Fade>
                            <Fade top> */}
                            <div className=" ab-content">
                                <div className="ab-content-inner">
                                    <img src={require("../asssets/images/4.jpg")} alt="news image" className="img-fluid" />
                                    <div className="ab-info-con">
                                        <h4>Architecture Design</h4>
                                        <p>Integer sit amet mattis quam, sit amet ultricies velit ullamcorper.</p>
                                    </div>
                                </div>
                            </div>
                            {/* </Fade> */}
        </Slider>
                        </div>
                    </div>
                </section>
      </div>
    );
  }
}