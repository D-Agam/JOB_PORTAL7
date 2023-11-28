import React from 'react'
import firebase from './firebase'
import HomePage from "./images/Home-page.png";
import Footer from './footer';
import Signup from './signup';
class Verify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: '',
      f: false,
    };
  }
  handleChange = (e) =>{
    const {name, value } = e.target
    this.setState({
        [name]: value
      })
  }
  configureCaptcha = () =>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    var phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log("OTP has been sent")
    
          // ...
        }).catch((error) => {
          alert("Wrong contact,otp not sent");
          // Error; SMS not sent
          // ...
          console.log("SMS not sent")
        });

  }
  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      this.setState({ f: true }); 
      // ...
    }).catch((error) => {
      alert("Wrong OTP");
      // User couldn't sign in (bad verification code?)
      // ...
    });

  }
  render() {
    return (
      <div>
        {this.state.f ? (<Signup contact={this.state.mobile} />) :
        (<div className="row g-0">
        <div className="col-md-8">
            <img
              src={HomePage}
              alt="Home-Page"
              style={{ height: "705px", width: "99.4%", maxWidth: "100%" }}
            />
        </div>
        <div className="col-md-4" style={{ backgroundColor: "#EDFFFF" }}>
              <h1
              style={{
                fontFamily: "cursive",
                marginTop: "15px",
                color: "#0D98BA",
                textAlign: "center",
              }}
              >
              CareerHub
            </h1>
            <h3
              style={{
                fontFamily: "cursive",
                marginTop: "15px",
                color: "#0DAA9A",
                textAlign: "center",
              }}
              >
              Verification
            </h3>
            <br></br>
            <br></br>
        <h2>Contact details</h2>
        <form onSubmit={this.onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input type="number" size="50" name="mobile"  placeholder="Mobile number" required onChange={this.handleChange}/>&nbsp;
          <button type="submit" style={{height:"35px",width:"80px",paddingLeft:"10px",paddingTop:"4.5px",borderRadius:"0",backgroundColor:"#378792"}}>Submit</button>
        </form>
        <br></br>
        <h2>Enter OTP</h2>
        <form onSubmit={this.onSubmitOTP}>
          <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>&nbsp;
          <button type="submit" style={{height:"35px",width:"80px",paddingLeft:"10px",paddingTop:"4px",borderRadius:"0",backgroundColor:"#379263"}}>Submit</button>
        </form>
        <Footer />
        </div>
        </div>)}
      </div>
    )
  }
}
export default Verify
