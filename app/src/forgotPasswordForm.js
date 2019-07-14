import React from 'react';

export default class ForgotPassword extends React.Component{
  render() {
    return (
      <div className="forgotPassword">
        <h3>重置密码</h3>
        <form className="forgotPassword" onSubmit={this.props.onSubmit}>
          <div className="row">
            <label>邮箱</label>
            <input type="text" onChange={this.props.onChange.bind(null, "email")} value={this.props.formData.email} />
          </div>
          <div className="row actions">
            <button type="submit">发送重置邮箱</button>
            <a href="#" onClick={this.props.onSignIn}>返回登录</a>
          </div>
        </form>
      </div>
    )
  }
}
