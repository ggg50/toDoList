import React from 'react';
import {signUp, signIn, sendPasswordResetEmail} from './leanCloud';
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

  formSignUp(e) {
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

  formSignIn(e) {
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

    let signUpForm = (
      <form className="signUp" onSubmit={this.formSignUp.bind(this)} >
        <div className="row">
          <label>用户名</label>
          <input type="text" value={this.state.formData.username} onChange={this.changeFormData.bind(this, "username")} />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={this.state.formData.password} onChange={this.changeFormData.bind(this, "password")} />
        </div>
        <div className="row">
          <label>邮箱</label>
          <input type="text" value={this.state.formData.email} onChange={this.changeFormData.bind(this, "email")} />
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>);

    let signInForm = (
        <form className="signIn" onSubmit={this.formSignIn.bind(this)}>
          <div className="row">
            <label>用户名</label>
            <input type="text" value={this.state.formData.username} onChange={this.changeFormData.bind(this, "username")} />
          </div>
          <div className="row">
            <label>密码</label>
            <input type="password" value={this.state.formData.password} onChange={this.changeFormData.bind(this, "password")} />
          </div>
          <div className="row actions">
            <button type="submit">登录</button>
             <a href="#" onClick={this.showForgotPassword.bind(this)}>忘记密码了？</a>
          </div>
        </form>
      );


    let signInOrSignUp = (
        <div className="signInOrSignUp">
          <nav>
            <label><input type="radio" value="signUp" checked={this.state.selected === "signUp"} onChange={this.switch.bind(this)}/>注册</label>
            <label><input type="radio" value="signIn" checked={this.state.selected === "signIn"} onChange={this.switch.bind(this)}/>登录</label>
          </nav>
          <div className="panes">
          {this.state.selected === "signUp" ? signUpForm : signInForm}
          </div>
        </div>
    )

    let forgotPassword = (
      <div className="forgotPassword">
        <h3>重置密码</h3>
        <form className="forgotPassword" onSubmit={this.resetPassword.bind(this)}>
          <div className="row">
            <label>邮箱</label>
            <input type="text" onChange={this.changeFormData.bind(this, "email")} value={this.state.formData.email} />
          </div>
          <div className="row actions">
            <button type="submit">发送重置邮箱</button>
            <a href="#" onClick={this.returnToSignIn.bind(this)}>返回登录</a>
          </div>
        </form>
      </div>
    )

    return (
      <div className="userDialogWrapper">
        <div className="userDialog">
          {this.state.selectedTab === "signInOrSignUp" ? signInOrSignUp : forgotPassword}
        </div>
      </div>
    )
  }


}
