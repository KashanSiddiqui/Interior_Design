import React, { Component } from 'react';
import '../asssets/css/font-awesome.css';
import '../asssets/css/style.css';
import '../asssets/css/bootstrap.css';
import Footer from './footer.js';

class SingleListing extends Component {
  render() {
    return (
      <div className="SingleListing">
      <div class="main-content page-inner" id="home">
        {/* <!-- header --> */}
        <header>
            <div className="container-fluid px-lg-5">
                {/* <!-- nav --> */}
                <nav className="py-4 d-lg-flex">
                    <div id="logo">
                        <h1> <a href="index.html"><span className="fa fa-gg" aria-hidden="true"></span> Dcor</a></h1>
                    </div>
                    <label for="drop" className="toggle">Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-2 ml-auto">
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="#about" className="scroll">About</a></li>
                        <li><a href="#blog" className="scroll">Blogs</a></li>
                        <li>
                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                            <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                            <input type="checkbox" id="drop-2" />
                            <ul className="inner-ul">
                                <li><a className="scroll" href="#gallery">Gallery</a></li>
                                <li><a href="#plans" className="scroll">Plans</a></li>
                                <li><a href="#blog" className="scroll">Events</a></li>
                            </ul>
                        </li>
                        <li><a href="#contact" className="scroll">Contact</a></li>
                    </ul>
                </nav>
                {/* <!-- //nav --> */}
            </div>
        </header>
        {/* <!-- //header --> */}
</div>
        {/* <!-- //banner --> */}
        {/* <!--// mian-content --> */}
    


    
    <section className="banner-bottom-wthree py-5" id="about">
    {/* <!-- banner-bottom-wthree --> */}
        <div className="container py-md-5 px-lg-5">
            <div className="content-left-bottom text-center">
                <h3 className="tittle mb-lg-5 mb-4">Single Page<span>.</span></h3>
            </div>
            <div className="content-right-bottom mt-md-0 mt-3 text-left">
                <img src={require("../asssets/images/banner1.jpg")} alt="news image" className="img-fluid"/>
                <p className="mt-4 text-left">Sed porttitor orci vel fermentum elit maximus. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Integer pulvinar leo id viverra feugiat.<strong className="text-capitalize"> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit.</strong> Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.</p>
                <p className="mt-3 text-left"><strong className="text-capitalize ">Integer pulvinar leo id viverra feugiat.</strong> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula.</p>
            </div>
            <div className="row banner-grids mt-lg-5">
                <div className="col-lg-8 mid-right-info-single">
                    <div className="mid-right-info">
                        <h4 className="mb-3 text-uppercase">Donec consequat sam libero tempore</h4>
                        <p className="mt-2">Integer pulvinar leo id viverra feugiat.<strong className="text-capitalize"> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit.</strong> Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.</p>
                    </div>
                </div>
                <div className="col-lg-4 single-page-img">
                    <img src={require("../asssets/images/g3.jpg")} alt="news image" className="img-fluid"/>
                </div>

            </div>
        </div>
        {/* <!-- //banner-bottom-wthree --> */}
    </section>

    <Footer/>

      </div>
    );
  }
}

export default SingleListing;