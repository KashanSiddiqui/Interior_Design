import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        {/* <!-- blog --> */}
        <section className="blog_w3ls py-5" id="blog">
                    <div className="container py-xl-5 py-lg-3">
                        <div className="header text-center">
                            <h3 className="tittle mb-lg-5 mb-4">Other Services<span>.</span></h3>
                        </div>
                        <div className="row">
                            {/* <!-- blog grid --> */}
                            <div className="col-lg-4 col-md-6">
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
                                        {/* <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase" href="single.html">
                                                Read More</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //blog grid --> */}
                            {/* <!-- blog grid --> */}
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
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
                                        {/* <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase" href="single.html">
                                                Read More</a>
                                        </div> */}
                                    </div>
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g3.jpg")} alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //blog grid --> */}
                            {/* <!-- blog grid --> */}
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
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
                                        {/* <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase" href="single.html">
                                                Read More</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //blog grid --> */}
                        </div>
                        <div className="row mt-5">
                            {/* <!-- blog grid --> */}
                            <div className="col-lg-4 col-md-6">
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
                                        {/* <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase" href="single.html">
                                                Read More</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //blog grid --> */}
                            {/* <!-- blog grid --> */}
                            <div className="col-lg-4 col-md-6 mt-md-0 mt-5">
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
                                            {/* <div className="price-button mt-md-3 mt-2">
                                                <a className="btn text-uppercase" href="single.html">
                                                    Read More</a>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="card-header p-0">
                                        <a href="single.html">
                                            <img className="card-img-bottom" src={require("../asssets/images/g5.jpg")} alt="image" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //blog grid --> */}
                            {/* <!-- blog grid --> */}
                            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
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
                                        {/* <div className="price-button mt-md-3 mt-2">
                                            <a className="btn text-uppercase" href="single.html">
                                                Read More</a>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- //blog grid --> */}
                        </div>
                    </div>
                </section>
                {/* <!-- //blog --> */}
      </div>
    );
  }
}

export default Blog;