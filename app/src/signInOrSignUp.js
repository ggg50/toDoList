import React from 'react';
import SignUpForm from './signUpForm';
import SignInForm from './signInForm';

export default class SignInOrSignUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: "signIn"
    }
  };

  switch(state) {
    this.setState({
      selected: state
    })
  };

  tt(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }

  render() {
    return (
      <div className="signInOrSignUp">
        <h1>Justdo</h1>
        <div className="panes">
        {this.state.selected === "signUp" ?
          <SignUpForm formData={this.props.formData}
                    tt={this.tt.bind(this)}
          onSubmit={this.props.onSignUp}
          onChange={this.props.onChange}
          onSwitch={this.switch.bind(this)}
          /> : <SignInForm
          formData={this.props.formData}
          onSubmit={this.props.onSignIn}
          onChange={this.props.onChange}
          onForgetPassword={this.props.onForgetPassword} onSwitch={this.switch.bind(this)} />}
        </div>
      </div>
    )
  }
}
