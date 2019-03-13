import React, { Component } from 'react';
import OutlinedTextFields from './shared/textfield'
import ContainedButtons from './shared/button'
import '../asssets/css/homeContact.css'

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        {/* <!--/counter--> */}
        <section className="stats" id="plans" >
        <div style={{textAlign:'center',color:'white'}}><h3>Ready to get your workplace started?</h3>
        <h2>Lets Talk</h2> </div>
        <div className='mainDiv'>
        <div style={{display:'inline-flex'}}>
        {/* <OutlinedTextFields text='Full Name' require/>
        <OutlinedTextFields text='Phone Number' require/> */}
        <input type='text' className='customInputHalf ' placeholder="Full Name"/>
        <input type='text' className='customInputHalf' placeholder="Phone Number"/>
        </div>
                 
        <div >
      {/* <OutlinedTextFields text='Email'  require/>
        <OutlinedTextFields text='brief description' /> */}
          <input type='text' placeHolder='Email' className='customInputFull'/>
          <input type='text' placeHolder='Brief Description' className='customInputFull'/>
        </div>
        <div style={{marginTop:'25px',textAlign:'center'}}>
          <ContainedButtons text='Submit' color='#96684F' margin='10px' width='150px'/>
        </div>
         </div>          
                </section>
                {/* <!--//counter--> */}
      </div>
    );
  }
}

export default Counter;