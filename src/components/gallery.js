import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import { db } from '../config/firebaseConfig';
import { connect } from 'react-redux';
import { PROJECT_DATA } from '../redux/actions/root.action';
import history from '../config/history'
// import Bounce from 'react-reveal/Bounce';


class Gallery extends Component {

    state={
        projects:[]
    }

componentDidMount(){
    let that=this;
    db.collection('projects').get()
    .then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            console.log(doc.data())
            let arr=this.state.projects
            arr.push(doc.data())
            this.setState({
                projects:arr
            })
        })
        
    })
}


  render() {
    return (
      <div className="Gallery">
        {/* <!-- Gallery --> */}
        <section className="gallery py-5" id="gallery">
                    <div className="container py-md-5">
                        <div className="header text-center">
                            <h3 className="tittle mb-lg-5 mb-3">How we Do<span>.</span></h3>
                        </div>
                        <div className="row news-grids text-center" >
                        {this.state.projects.slice(0, 6).map((item,index)=>{
                            return(
                                
                                ((index+1)%2==0)?
                                (<Bounce left >
                                    <div className="col-md-4 gal-img" onClick={()=>
                                        {this.props.PROJECT_DATA(item)
                                        history.push('/singleListing')
                                        } }>
                                  <a href="#">      <img  src={item.banner_image_url} alt="news image" className="img-fluid" /></a>
                                    </div>
                                    </Bounce>):
                                    (<Bounce right >
                                        <div className="col-md-4 gal-img" onClick={()=>
                                            {this.props.PROJECT_DATA(item)
                                            history.push('/singleListing')
                                            } }>
                                         <a href='#'><img  src={item.banner_image_url} alt="news image" className="img-fluid" /></a>
                                        </div>
                                        </Bounce>)
                            
                        
                         )   
                        })}
                        </div>
                       
                       
                       

                        {/* <!-- popup--> */}
                        <div id="gal1" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g1.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Beautiful golden lamps hanging from the rooftop, making a great contrast with the wall color. </p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}

                        {/* <!-- popup--> */}
                        <div id="gal2" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g2.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Blue is the color of sky and sea. It symbolizes confidence, faith, truth and heaven. Combining it with the white makes it more beautiful.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}
                        {/* <!-- popup--> */}
                        <div id="gal3" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g3.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Even the smallest things matter ! Dining tables must be sleek and comfortable.</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup3 --> */}
                        {/* <!-- popup--> */}
                        <div id="gal4" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g4.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Shiny white tiles creating an eye soothing view of the kitchen with a small touch of brown patterned wallpaper</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}
                        {/* <!-- popup--> */}
                        <div id="gal5" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g5.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Wake up every day with a refreshing view of the wallpaper in your bed room, hence making the start of your day perfect</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}
                        {/* <!-- popup--> */}
                        <div id="gal6" className="pop-overlay animate">
                            <div className="popup">
                                <img src={require("../asssets/images/g6.jpg")} alt="Popup Image" className="img-fluid" />
                                <p className="mt-4">Green interior always makes a soul touching enviornment !</p>
                                <a className="close" href="#gallery">&times;</a>
                            </div>
                        </div>
                        {/* <!-- //popup --> */}

                    </div>
                </section>
                {/* <!--// gallery --> */}
      </div>
    );
  }
}


function mapDispatchToProp(dispatch) {
    return ({
        PROJECT_DATA: (user) => {
            dispatch(PROJECT_DATA(user))
        },
    })
}


export default connect(null,mapDispatchToProp)(Gallery);
// export default Gallery;