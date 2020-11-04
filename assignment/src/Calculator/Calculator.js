import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { BrowserRouter, Route, Switch, Link, location } from 'react-router-dom';
//import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';
//import $ from 'jquery';
//import axios from 'axios';
//import jQuery from 'jquery';
//import 'jquery-validation';
//import swal from 'sweetalert';

class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      firstValue: 0,
      secondValue: 0,
     
    }
  }
  componentDidMount() {
  }
  // userlogin(event) {
  //   event.preventDefault();
  //   var auth = {
  //     email: this.refs.loginusername.value,
  //     password: this.refs.loginpassword.value,
  //     role: "admin"
  //   }
  //   if ($("#login").valid()) {
  //     // document.getElementById("logInBtn").value = 'Please Wait...';
  //     document.getElementById("logInBtn").value =
  //       this.setState({ btnLoading: true });
  //     axios.post('/api/auth/post/login', auth)
  //       .then((response) => {
  //         // console.log("response login",response.data.userDetails.passwordreset);
  //         if (response.data.ID) {
  //           this.setState({ btnLoading: false });
  //           var userDetails = {
  //             firstName: response.data.userDetails.firstName,
  //             lastName: response.data.userDetails.lastName,
  //             email: response.data.userDetails.email,
  //             phone: response.data.userDetails.phone,
  //             companyID: parseInt(response.data.userDetails.companyID),
  //             pincode: response.data.userDetails.pincode,
  //             user_id: response.data.userDetails.user_id,
  //             roles: response.data.userDetails.roles,
  //             token: response.data.userDetails.token,
  //           }
  //           document.getElementById("logInBtn").value = 'Sign In';
  //           localStorage.setItem("token", response.data.token);
  //           localStorage.setItem("user_ID", response.data.ID);
  //           localStorage.setItem("roles", response.data.roles);
  //           localStorage.setItem("companyID", response.data.userDetails.companyID);
  //           localStorage.setItem("passwordreset", response.data.userDetails.passwordreset);
  //           localStorage.setItem('userDetails', JSON.stringify(userDetails));
  //           localStorage.setItem('corporateUrl', 'http://qafivebeescorporate.iassureit.com');
  //           localStorage.setItem('vendorUrl', 'http://qafivebeesvendor.iassureit.com');

  //           this.setState({
  //             loggedIn: true
  //           }, () => {
  //             console.log('response.data.userDetails.passwordreset in result==>>>', response.data.userDetails.passwordreset)

  //             if (response.data.userDetails.passwordreset) {
  //               this.props.history.push('/dashboard')
  //               window.location.reload();
  //               // this.props.history.push('/reset-password/'+response.data.ID);

  //             } else {
  //               console.log('response.data.ID in result==>>>', response.data.ID)
  //               axios.patch('/api/auth/patch/sendOTPwithemail/'+response.data.ID)
  //                 .then((sendotp) => {
  //                   console.log('verifyresetpwdornot in result==>>>', sendotp.data.otpEmail)
  //                   // var emailOTP = this.getRandomInt(1000, 9999);
  //                   var sendData = {
  //                     "event"     : "Event37", //Event Name
  //                     "toUserId"  : response.data.ID, //To user_id(ref:users)
  //                     "company_id": localStorage.getItem("corporate_ID"),
  //                     "variables" : {
  //                       "UserName": response.data.userDetails.firstName,
  //                       "OTP"     : sendotp.data.otpEmail,
  //                     }
  //                   }
                    
  //                   axios.post('/api/masternotifications/post/sendNotification', sendData)
  //                     .then((notificationres) => {})
  //                     .catch((error) => { console.log('notification error: ', error) })
  //                         this.props.history.push({
  //                           pathname: '/ssotpverifications/'+response.data.ID,
  //                           userID: response.data.ID,
  //                         });
  //                   window.location.reload();
  //                 })
  //                 .catch((error) => { console.log('notification error: ', error) })
  //             }

  //           })
  //         } else if (response.data.message === "USER_BLOCK") {
  //           swal({
  //             text: "You are blocked by admin. Please contact Admin."
  //           });
  //           document.getElementById("logInBtn").value = 'Sign In';
  //         } else if (response.data.message === "NOT_REGISTER") {
  //           swal({
  //             text: "This Email ID is not registered. Please try again."
  //           });
  //           document.getElementById("logInBtn").value = 'Sign In';
  //         } else if (response.data.message === "INVALID_PASSWORD") {
  //           swal({
  //             text: "You have entered wrong password. Please try again."
  //           });
  //           document.getElementById("logInBtn").value = 'Sign In';
  //         } else if (response.data.message === "USER_UNVERIFIED") {
  //           swal({
  //             text: "You have not verified your account. Please verify your account."
  //           })
  //             .then((value) => {
  //               var emailText = {
  //                 "emailSubject": "Email Verification",
  //                 "emailContent": "As part of our registration process, we screen every new profile to ensure its credibility by validating email provided by user. While screening the profile, we verify that details put in by user are correct and genuine.",
  //               }
  //               axios.patch('/api/auth/patch/setsendemailotpusingEmail/' + this.refs.loginusername.value, emailText)
  //                 .then((response) => {
  //                   swal("We send you a Verification Code to your registered email. Please verify your account.");
  //                   this.props.history.push("/confirm-otp/" + response.data.userID);
  //                 })
  //                 .catch((error) => {
  //                   swal(" Failed to sent OTP");
  //                 })
  //             });
  //           document.getElementById("logInBtn").value = 'Sign In';

  //         }
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //         swal({
  //           text: "Please enter valid Email ID and Password"
  //         })
  //         this.setState({ btnLoading: false });
  //         // document.getElementById("logInBtn").value = 'Sign In';
  //         // if (localStorage !== null) {
  //         // }
  //       });
  //   }
  // }
  handleChange(event) {
    const name = event.target.name;
    var value = event.target.value; 
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    return (
      <div  className="col-lg-3 col-lg-offset-3  col-md-12 col-sm-12 col-xs-12 calculatorBack">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>Enter Value 1</label>
              <input type="number" className="form-control" onChange={this.handleChange.bind(this)} ref="value1" id="value1" name="value1" placeholder="Enter value"  />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <label>Enter Value 2</label>
              <input type="number" className="form-control" onChange={this.handleChange.bind(this)} ref="value2" id="value2" name="value2" placeholder="Enter value"  />
          </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   console.log("state = ", state)
//   return {
//     userDetails: state.userDetails,
//   }
// };


// const mapDispatchToProps = (dispatch) => {
//   return {
//     setGlobalUser: (userDetails) => dispatch({
//       type: "SET_GLOBAL_USER",
//       userDetails: userDetails,
//     }),
//   }
// };


 export default Calculator;

// export default connect(mapStateToProps, mapDispatchToProps)(Login);



