import React, { Component } from 'react';
import '../asssets/css/style.css';
import '../asssets/css/bootstrap.css';
import '../asssets/css/font-awesome.css';
import '../asssets/css/typewritterEffect.css';
import Footer from './footer.js';
import Contact from './contact';
import ClientReviews from './clientReviews';
import Blog from './blog';
import Counter from './counter';
import Gallery from './gallery';
import MidSection from './midSection';
import MaintenanceServices from './maintenanceServices';
import About from './about';
import Header from './header';
import Banner from './banner';
// import Header1 from '../extra/Header';
// import '../asssets/css/font-awsome.css';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                        <Header />
                <Banner/>
                {/* <!--// mian-c//ontent --> */}
                
                <MaintenanceServices/>
                <MidSection/>
                <Gallery/>
                <Counter/>
                <Blog/>
                <ClientReviews/>
                
                <Footer />
            </div>
        );
    }
}

export default Home;