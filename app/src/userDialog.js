import React from 'react';
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud';
import SignUpForm from './signUpForm';
import SignInForm from './signInForm';
import ForgotPassword from './forgotPasswordForm';
import './userDialog.css';

export default class UserDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selected: "signUp",
      selectedTab: "signInOrSignUp",
      formData: {
        username:"",
        password:"",
        email:""
      }
    }
  };
  switch(e) {
    this.setState({
      selected: e.target.value
    })
  };

  changeFormData(key, e){
    let newState = JSON.parse(JSON.stringify(this.state));
    newState.formData[key] = e.target.value;
    this.setState(newState)
  };

  signUp(e) {
    e.preventDefault();
    let {username, password, email} = this.state.formData;
    let success = (user) => {
      this.props.onSignUp.call(null, user);
    };
    let error = (error) => {
      if(error.code === 202) {
        alert("用户名已经被占用");
      } else {
        alert(error);
      }

    };
    signUp(username, password, email, success, error);
  };

  signIn(e) {
    e.preventDefault();
    let {username, password} = this.state.formData;
    let success = (user) => {
      this.props.onSignUp.call(null, user);
    };
    let error = (error) => {
      console.log(error);
      if(error.code === 211) {
        alert("找不到用户");
      } else if (error.code === 210) {
        alert("用户名与密码不匹配");
      }
      else {
        alert(error);
      }
    };
    signIn(username, password, success, error);
  };

  showForgotPassword() {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.selectedTab = "forgotPassword";
    this.setState(stateCopy);
  };

  resetPassword(e){
    e.preventDefault();
    sendPasswordResetEmail(this.state.formData.email);
  };

  returnToSignIn() {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.selectedTab = 'signInOrSignUp';
    this.setState(stateCopy)
  }




  render(){

    let signInOrSignUp = (
        <div className="signInOrSignUp">
          <nav>
            <label><input type="radio" value="signUp" checked={this.state.selected === "signUp"} onChange={this.switch.bind(this)}/>注册</label>
            <label><input type="radio" value="signIn" checked={this.state.selected === "signIn"} onChange={this.switch.bind(this)}/>登录</label>
          </nav>
          <div className="panes">
          {this.state.selected === "signUp" ?
            <SignUpForm formData={this.state.formData}
            onSubmit={this.signUp.bind(this)}
            onChange={this.changeFormData.bind(this)}
            /> : <SignInForm
            formData={this.state.formData}
            onSubmit={this.signIn.bind(this)}
            onChange={this.changeFormData.bind(this)}
            onForgetPassword={this.showForgotPassword.bind(this)} />}
          </div>
        </div>
    )

    return (
      <div className="userDialogWrapper">
        <div className="userDialog">
          {this.state.selectedTab === "signInOrSignUp" ? signInOrSignUp : <ForgotPassword
          formData={this.state.formData}
          onChange={this.changeFormData.bind(this)}
          onSubmit={this.resetPassword.bind(this)}
          onSignIn={this.returnToSignIn.bind(this)}/>}
        </div>
      </div>
    )
  }


}
