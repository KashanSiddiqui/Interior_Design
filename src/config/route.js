import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  HashRouter
} from 'react-router-dom';
import About from '../components/about'
import Contact from '../components/contact'
import Home from '../components/home'
import Projects from '../components/projects'
import SingleListing from '../components/singleListing'
import history from './history';
import ScrollToTop from 'react-router-scroll-top';
// history={history}

// const Routing = () => {
//   return (
//     <HashRouter>
//       <Structure/>
//     </HashRouter>
//   )
// }

// const Structure = () => {
//   return( <div>
//   <BasicRouting/>
//   </div>
//   )
// }

// componentDidUpdate() {
//   window.scrollTo(0,0);
// }
// onUpdate={() => window.scrollTo(0, 0)}
const BasicRouting = () => {
  // history.listen(_ => {
  //     window.scrollTo(0, 0)  
  //     })
  return ( 
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <div>
       
        
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/singleListing" component={SingleListing} />
          <ScrollToTop/>
            
        
        </div>
    </Router>
  )
}

export default (BasicRouting);