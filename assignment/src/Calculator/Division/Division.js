import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../Calculator.css';

class Division extends Component {

  constructor(props) {
    super();
    this.state = {
      calculatedValue: 0,     
    }
  }
 
  Add(event) {
    event.preventDefault();
    // check props values are available 
    if(this.props.firstValue && this.props.secondValue )
    {
      let value1 = this.props.firstValue;
      let value2 = this.props.secondValue;
      //Check is second value is 0
      if(value2 == 0){
        this.setState({
          calculatedValue : 0,
        })

        swal("Number cannot divide by 0")

      }else{
      var calculatedValue = parseInt(value1) / parseInt(value2);
      this.setState({
        calculatedValue : calculatedValue,
        },()=>{
          this.props.calculateOperationData(this.state.calculatedValue);
        })
      }

    }else{
      swal("Please enter values before calculation")
    }
  }

  render() {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 operatorBack " title="Division" onClick={this.Add.bind(this)}>    
          <b>/</b>
        </div>
    );
  }
}

// Send updated calculated value to state
const mapStateToProps = (state) => {
  return {
    calculatedValue: state.calculatedValue,
  }

};

// Call redux action
const mapDispatchToProps = (dispatch) => {
  return {
    calculateOperationData: (calculatedValue) => dispatch({
      type: "DIVISION",
      calculatedValue: calculatedValue,
    }),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Division);



