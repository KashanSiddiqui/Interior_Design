import React, { Component } from 'react';
import '../asssets/css/font-awesome.css';
import '../asssets/css/style.css';
import '../asssets/css/bootstrap.css';
import Footer from './footer.js';
import Header from './header';
import { connect } from 'react-redux';

// import Modal from '@material-ui/core/Modal';
// import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';


  

class SingleListing extends Component {


    

    
      
  render() {
    return (
      <div className="SingleListing">
      <div class="main-content page-inner" id="home">
        {/* <!-- header --> */}
        <Header/>
        {/* <!-- //header --> */}
</div>
        {/* <!-- //banner --> */}
        {/* <!--// mian-content --> */}
    


        {console.log(this.props.projectdata)}
    <section className="banner-bottom-wthree py-5" id="about">
    {/* <!-- banner-bottom-wthree --> */}
        <div className="container py-md-5 px-lg-5">
            <div className="content-left-bottom text-center">
                <h3 className="tittle mb-lg-5 mb-4">{this.props.projectdata.title}<span>.</span></h3>
            </div>
            <div className="content-right-bottom mt-md-0 mt-3 text-left">
                <img src={this.props.projectdata.banner_image_url} alt="news image" className="img-fluid"/>
                <p className="mt-4 text-left">{this.props.projectdata.description}</p>
                {/* <p className="mt-3 text-left"><strong className="text-capitalize ">Integer pulvinar leo id viverra feugiat.</strong> Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula.</p> */}
            </div>
            {this.props.projectdata.items.map((item,key)=>{
                return(
            <div className="row banner-grids mt-lg-5">
                    <div className="col-lg-8 mid-right-info-single">
                    <div className="mid-right-info">
                        <h4 className="mb-3 text-uppercase">{item.title}</h4>
                        <p className="mt-2">{item.description}</p>
                    </div>
                </div>
                <div className="col-lg-4 single-page-img" onClick={this.handleOpen}>
                    <img src={item.img_url} alt="news image" className="img-fluid"/>
                </div>
            </div>
                )
            })}
                

        </div>
        {/* <!-- //banner-bottom-wthree --> */}
    </section>
    
    <Footer/>

      </div>
    );
  }
}


function mapStateToProp(state) {
    console.log(state)
    return ({
        projectdata: state.project_reducer.project_data,
    })
}

export default connect(mapStateToProp,null)(SingleListing);

// export default SingleListing;