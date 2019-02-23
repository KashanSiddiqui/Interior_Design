import React, { Component } from 'react';
import '../asssets/css/typewritterEffect.css'
// import logo from './logo.svg';
// import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        {/* <!-- /banner --> */}
        <div className="main-content" id="home">
          <div className="layer">

            <div className="container ">
              <div className="banner-info-w3layouts ">
                <h3 style={{fontSize:'300%'}}>Style and DCOR</h3>
                <div className="css-typing"><p className="my-3 " style={{fontSize:"150%"}}>Bringing Creative interiors into life</p></div>
                {/* <a href="single.html" className="read-more mt-3 btn">Read More </a> */}
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
