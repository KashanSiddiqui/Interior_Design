import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Home from './components/home';
import Contact from './components/contact';
import SingleListing from './components/singleListing'; 
// import * as serviceWorker from './serviceWorker';
import ClientReviews from './components/clientReviews';
import Gallery from './components/gallery';
import About from './components/about';
import Routing from './config/route';
import ContainedButtons from './components/shared/button' 
import OutlinedTextFields from './components/shared/textfield'
ReactDOM.render(<Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
