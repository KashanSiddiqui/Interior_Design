import React, { Component } from 'react';
import OutlinedTextFields from './shared/textfield'

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        {/* <!--/counter--> */}
        <section className="stats" id="plans" >
        <div style={{textAlign:'center',color:'white'}}><h3>Ready to get your workplace started?</h3>
        <h2>Lets Talk</h2> </div>
        <div style={{width:'300px',margin:'0 auto'}}>
        <div style={{display:'inline-flex'}}>
        <OutlinedTextFields text='Full Name'/>
        <OutlinedTextFields text='Company Name'/>
        </div>
        <div style={{display:'flex'}}>
        <OutlinedTextFields text='Email'/>
        <OutlinedTextFields text='Phone Number'/>
        </div>
        <div >
        <OutlinedTextFields text='brief description' className="bharwa"/>
        </div>
         </div>          
                </section>
                {/* <!--//counter--> */}
      </div>
    );
  }
}

export default Counter;