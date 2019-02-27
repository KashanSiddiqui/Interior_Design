import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
      }

      state = {
        isTop: true,
      };

      componentDidMount() {
    
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 500;
          if (isTop !== this.state.isTop) {
            console.log(isTop)
              this.setState({ isTop })
          }
        });
    }
    
  render() {
    // window.onscroll = function() {myFunction()};

    // var header = document.getElementById("myHeader");
    // var sticky = header.offsetTop;
    
    // function myFunction() {
    //   if (window.pageYOffset > sticky) {
    //     header.classList.add("sticky");
    //   } else {
    //     header.classList.remove("sticky");
    //   }
    // }style={{backgroundColor:'#000000',opacity:'0.6',position:'fixed'}}
    return (
      <div className="Header">
        <header  style = {(this.state.isTop) ? {backgroundColor : '#000000',position:'fixed',opacity:'0.6'} : {backgroundColor:'#000000',position:'fixed'}}  className='myHeader'>
                            <div className="container-fluid px-lg-5">
                                {/* <!-- nav --> */}
                                <nav className="py-4 d-lg-flex">
                                    <div id="logo">
                                        <h1> <a href="index.html"><span className="fa fa-gg" aria-hidden="true"></span> Style & Dcor</a></h1>
                                    </div>
                                    <label for="drop" className="toggle">Menu</label>
                                    <input type="checkbox" id="drop" />
                                    <ul className="menu mt-2 ml-auto">
                                        <li className="active"> <Link to="/">Home</Link></li> 
                                        <li><Link to="/about" className="scroll">About</Link></li>
                                        <li><a href="#blog" className="scroll">Blogs</a></li>
                                            {/* <!-- First Tier Drop Down --> */}
                                        {/* <li>
                                            <label for="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span> </label>
                                            <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true"></span></a>
                                            <input type="checkbox" id="drop-2" />
                                            <ul className="inner-ul">
                                                <li><a className="scroll" href="#gallery">Gallery</a></li>
                                                <li><a href="#plans" className="scroll">Plans</a></li>
                                                <li><a href="#blog" className="scroll">Events</a></li>
                                            </ul>
                                        </li> */}
                                        <li><Link to='/contact' className="scroll">Contact</Link></li>
                                    </ul>
                                </nav>
                                {/* <!-- //nav --> */}
                            </div>
                        </header>
      </div>
    );
  }
}

export default Header;