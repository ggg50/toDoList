import React from 'react';

export default class ForgotPassword extends React.Component{
  render() {
    return (
      <div className="forgotPassword">
        <h3>重置密码</h3>
        <form className="forgotPassword" onSubmit={this.props.onSubmit}>
          <div className="inputWrapper">
            <div className="iconWrapper">
              <svg class="icon" aria-hidden="true">
                <use xlinkHref="#icon-youxiang1"></use>
              </svg>
              <svg class="icon" aria-hidden="true">
                <use xlinkHref="#icon-fs-line"></use>
              </svg>
            </div>
            <input type="text" value={this.props.formData.email} placeholder="请输入您的邮箱" onChange={this.props.onChange.bind(null, "email")} />
          </div>
          <div className="actions">
            <button type="submit">发送重置邮箱</button>
          </div>
          <div className="switcher">
            <a className="toRight" href="#" onClick={this.props.onSignIn}>返回登录</a>
          </div>
        </form>
      </div>
    )
  }
}
