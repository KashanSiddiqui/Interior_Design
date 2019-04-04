import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';
import { Link } from 'react-router-dom';
import { db } from '../config/firebaseConfig';
import { connect } from 'react-redux';
import { PROJECT_DATA } from '../redux/actions/root.action';
import history from '../config/history'

class Projects extends Component {


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
      <div className="Blog">
      <Header/>
    
        <section className="blog_w3ls py-5" id="blog">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="header text-center">
                            <h3 className="tittle mb-lg-5 mb-4">Other Services<span>.</span></h3>
                        </div>
                        <div className="row">
                        {this.state.projects.map((item,index)=>{
                                return(
                                    ((index+1)%2==0)?(
                                        <div className="col-lg-4 col-md-6">
                                        {/* <Link to='/singleListing'>                             */}
                                        <div onClick={()=>
                                        {this.props.PROJECT_DATA(item)
                                        history.push('/singleListing')
                                        }
                                        }>
                                            <div className="card border-0 med-blog">
                                                <div className="card-header p-0">
                                                    <a href="#">
                                                        <img className="card-img-bottom" src={item.banner_image_url} alt="image" />
                                                    </a>
                                                </div>
                                                <div className="card-body border border-top-0 pb-5">
                                                    <div className="mb-3">
                                                        <h5 className="blog-title card-title font-weight-bold m-0">
                                                            <a href="#">{item.title}</a>
                                                        </h5>
                                                        {/* <div className="blog_w3icon">
                                                            <span>
                                                                Jan 12, 2019 - loremipsum</span>
                                                        </div> */}
                                                    </div>
                                                    <p className="mb-4">{item.description}</p>
                                                    
                                                </div>
                                            </div>
                                            </div>
                                        {/* </Link> */}
                                        </div>
                                    ):(
                                    <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                                    {/* <Link to='/singleListing'> */}
                                    <div onClick={()=>
                                        {this.props.PROJECT_DATA(item)
                                        history.push('/singleListing')
                                        }
                                        }>
                                        <div className="card border-0 med-blog">
                                            <div className="card-body border border-bottom-0 pb-5">
                                                <div className="mb-3">
                                                    <h5 className="blog-title card-title font-weight-bold m-0">
                                                        <a href="#">{item.title}</a>
                                                    </h5>
                                                    
                                                </div>
                                                <p className="mb-4">{item.description}</p>                                                
                                            </div>
                                            <div className="card-header p-0">
                                                <a href="#">
                                                    <img className="card-img-bottom" src={item.banner_image_url} alt="image" />
                                                </a>
                                            </div>
                                        </div>
                                        </div>
                                        {/* </Link> */}
                                    </div>)
                                 
                        )
                        })}
                            {/* <div className="col-lg-4 col-md-6">
                            <Link to='/singleListing'>                            
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g1.jpg")} alt="image" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0 pb-5">
                                        <div className="mb-3">
                                            <h5 className="blog-title card-title font-weight-bold m-0">
                                                <a href="single.html">Dictum porta auris</a>
                                            </h5>
                                            <div className="blog_w3icon">
                                                <span>
                                                    Jan 12, 2019 - loremipsum</span>
                                            </div>
                                        </div>
                                        <p className="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                                        
                                    </div>
                                </div>
                            </Link>
                            </div> */}
                            
                            {/* <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                            <Link to='/singleListing'>
                                <div className="card border-0 med-blog">
                                    <div className="card-body border border-bottom-0 pb-5">
                                        <div className="mb-3">
                                            <h5 className="blog-title card-title font-weight-bold m-0">
                                                <a href="single.html">Dictum porta auris</a>
                                            </h5>
                                            <div className="blog_w3icon">
                                                <span>
                                                    Jan 14, 2019 - loremipsum</span>
                                            </div>
                                        </div>
                                        <p className="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                                        
                                    </div>
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g3.jpg")} alt="image" />
                                        </a>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                            <Link to='/singleListing'>
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g2.jpg")} alt="image" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0 pb-5">
                                        <div className="mb-3">
                                            <h5 className="blog-title card-title font-weight-bold m-0">
                                                <a href="single.html">Dictum porta auris</a>
                                            </h5>
                                            <div className="blog_w3icon">
                                                <span>
                                                    Jan 16, 2019 - loremipsum</span>
                                            </div>
                                        </div>
                                        <p className="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                                        
                                    </div>
                                </div>
                                </Link>
                            </div> */}
                            
                        </div>
                        {/* <div className="row mt-5">
                            
                            <div className="col-lg-4 col-md-6">
                            <Link to='/singleListing'>
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g6.jpg")} alt="image" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0 pb-5">
                                        <div className="mb-3">
                                            <h5 className="blog-title card-title font-weight-bold m-0">
                                                <a href="single.html">Dictum porta auris</a>
                                            </h5>
                                            <div className="blog_w3icon">
                                                <span>
                                                    Jan 18, 2019 - loremipsum</span>
                                            </div>
                                        </div>
                                        <p className="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                                        
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
                            <Link to='/singleListing'>
                                <div className="card border-0 med-blog">
                                    <div className="card-body border border-bottom-0 pb-5">
                                        <div className="mb-3">
                                            <h5 className="blog-title card-title font-weight-bold m-0">
                                                <a href="single.html">Dictum porta auris</a>
                                            </h5>
                                            <div className="blog_w3icon">
                                                <span>
                                                    Jan 20, 2019 - loremipsum</span>
                                            </div>
                                        </div>
                                        <p className="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                                        <div className="price-button mt-md-3 mt-2">
                                            
                                        </div>
                                    </div>
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g5.jpg")} alt="image" />
                                        </a>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
                            <Link to='/singleListing'>
                                <div className="card border-0 med-blog">
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g4.jpg")} alt="image" />
                                        </a>
                                    </div>
                                    <div className="card-body border border-top-0 pb-5">
                                        <div className="mb-3">
                                            <h5 className="blog-title card-title font-weight-bold m-0">
                                                <a href="single.html">Dictum porta auris</a>
                                            </h5>
                                            <div className="blog_w3icon">
                                                <span>
                                                    Jan 24, 2019 - loremipsum</span>
                                            </div>
                                        </div>
                                        <p className="mb-4">Cras ultricies ligula sed magna dictum porta auris blandita.</p>
                                        
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                        </div> */}
                    </div>
                </section>
                {/* <!-- //blog --> */}
                <Footer/>
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


export default connect(null,mapDispatchToProp)(Projects);
// export default Projects;