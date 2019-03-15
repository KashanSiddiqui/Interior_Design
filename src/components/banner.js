import React, { Component } from 'react';
import '../asssets/css/typewritterEffect.css'
import ContainedButtons from './shared/button'
// import logo from './logo.svg';
// import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner" >
        {/* <!-- /banner --> */}
        <div className="main-content" id="home">
          <div className="layer" style={{ height: '100vh' }}>

            <div className="container ">
              <div className="banner-info-w3layouts ">
                <h3 style={{ fontSize: '300%' }}>Style and DECOR</h3>
                <div className="css-typing"><p className="my-3 " style={{ fontSize: "150%" }}>Bringing Creative interiors into life</p></div>
                {/* <a href="single.html" className="read-more mt-3 btn">Read More </a> */}
                <div ><p>Style & Decor is a design firm having expertise in interior designing, Product & 3D designing, Architecture & Construction. Feel free to contact us for further assistance.
                <div  ><a href='#plans' ><ContainedButtons text="Get A Quote" color='black' Textcolor='white' margin='10px' /></a></div>
                </p></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- //banner --> */}
      </div>
    );
  }
}

export default Banner;
