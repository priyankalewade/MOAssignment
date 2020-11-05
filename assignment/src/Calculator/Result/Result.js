import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../Calculator.css';

class Result extends Component {

  constructor(props) {
    super();
    this.state = {
      calculatedValue: 0,     
    }
  }
  
 
  render() {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">    
          <h1>Result : {this.props.calculatedValue}</h1>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state = ", state)
  return {
    calculatedValue: state.calculatedValue,
  }

};


export default (Result);



