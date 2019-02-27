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
          <div className="layer" style={{height:'100vh'}}>

            <div className="container ">
              <div className="banner-info-w3layouts ">
                <h3 style={{fontSize:'300%'}}>Style and DCOR</h3>
                <div className="css-typing"><p className="my-3 " style={{fontSize:"150%"}}>Bringing Creative interiors into life</p></div>
                {/* <a href="single.html" className="read-more mt-3 btn">Read More </a> */}
                <div><p>Décor Interior Design, Inc. is a turnkey commercial interior design firm that specializes in tenant improvements, office furniture solutions, and facility support services.
                <div ><a href='#plans' ><ContainedButtons text="Get A Quote" color='#96684F' margin='10px'/></a></div>
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
