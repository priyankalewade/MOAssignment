import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

// import componennt
import Addition       from './Addition/Addition.js';
import Subtraction    from './Subtraction/Subtraction.js';
import Multiplication from './Multiplication/Multiplication.js';
import Division       from './Division/Division.js';
import Result         from './Result/Result.js';

class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      firstValue: 0,
      secondValue: 0,
    }
  }

 // Get changed values from input field
  handleChange(event) {
    const name = event.target.name;
    var value = event.target.value; 
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div  className="col-lg-4 col-lg-offset-4  col-md-12 col-sm-12 col-xs-12 calculatorBack">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt15 inputBack">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>Enter Value 1</label>
              <input type="number" className="form-control" onChange={this.handleChange.bind(this)}  id="firstValue" min="0" name="firstValue" value={this.state.firstValue} placeholder="Enter value"  />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt15">
              <label>Enter Value 2</label>
              <input type="number" className="form-control" onChange={this.handleChange.bind(this)} min="0" value={this.state.secondValue} id="secondValue" name="secondValue" placeholder="Enter value"  />
          </div>
        </div>
        {/* Pass values to child component*/}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt15">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">      
            <Addition firstValue={this.state.firstValue} secondValue={this.state.secondValue}/>      
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"> 
            <Subtraction firstValue={this.state.firstValue} secondValue={this.state.secondValue}/>      
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt15">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"> 
            <Multiplication firstValue={this.state.firstValue} secondValue={this.state.secondValue}/>      
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12"> 
            <Division firstValue={this.state.firstValue} secondValue={this.state.secondValue}/>      
          </div>
        </div>
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt15">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
            <Result />      
          </div>
        </div>
        {/*<h1>Here:{this.props.calculatedValue}</h1>*/}

      </div>
    );
  }
}




 export default Calculator;




