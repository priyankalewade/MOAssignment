import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../Calculator.css';

class Subtraction extends Component {

  constructor(props) {
    super();
    this.state = {
      calculatedValue: 0,     
    }
  }
   
  Add(event) {
    event.preventDefault();
    if(this.props.firstValue && this.props.secondValue )
    {
      let value1 = this.props.firstValue;
      let value2 = this.props.secondValue;
      var calculatedValue = parseInt(value1) - parseInt(value2);
      this.setState({
        calculatedValue : calculatedValue,
      },()=>{
        this.props.calculateOperationData(this.state.calculatedValue);
      })

    }else{
      swal("Please enter values before calculation")
    }
  }

  render() {
    return (
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 operatorBack " title="Subtraction" onClick={this.Add.bind(this)}>    
          <i className="fa fa-minus" aria-hidden="true"></i>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    calculatedValue: state.calculatedValue,
  }

};


const mapDispatchToProps = (dispatch) => {
  return {
    calculateOperationData: (calculatedValue) => dispatch({
      type: "SUBTRACTION",
      calculatedValue: calculatedValue,
    }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Subtraction);



