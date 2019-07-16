import React from 'react';
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud';
import ForgotPassword from './forgotPasswordForm';
import SignInOrSignUp from './signInOrSignUp'
import './userDialog.css';

export default class UserDialog extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "signInOrSignUp",
      formData: {
        username:"",
        password:"",
        email:""
      }
    }
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
      this.props.onSignIn.call(null, user);
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
    let success = ()=> {alert("邮件已发送，请在邮箱中查看并修改密码")};
    let error = (error) => {alert(error)};
    sendPasswordResetEmail(this.state.formData.email, success, error);
  };

  returnToSignIn() {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.selectedTab = 'signInOrSignUp';
    this.setState(stateCopy)
  }



  render(){
    return (
      <div className="userDialogWrapper">
        <div className="userDialog">
          {this.state.selectedTab === "signInOrSignUp" ?
          <SignInOrSignUp formData={this.state.formData}
          onChange={this.changeFormData.bind(this)}
          onSignUp={this.signUp.bind(this)}
          onSignIn={this.signIn.bind(this)}
          onForgetPassword={this.showForgotPassword.bind(this)}
          /> :
          <ForgotPassword formData={this.state.formData}
          onChange={this.changeFormData.bind(this)}
          onSubmit={this.resetPassword.bind(this)}
          onSignIn={this.returnToSignIn.bind(this)}/>}
        </div>
      </div>
    )
  }


}
