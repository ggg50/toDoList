import React from 'react';

export default function(props) {
    return (
      <form className="signIn" onSubmit={props.onSubmit}>
        <div className="inputWrapper">
          <div className="iconWrapper">
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-denglu-copy"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-fs-line"></use>
            </svg>
          </div>
          <input type="text" value={props.formData.username} placeholder="请输入您的账号" onChange={props.onChange.bind(null, "username")} />
        </div>
        <div className="inputWrapper">
          <div className="iconWrapper">
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-mima"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-fs-line"></use>
            </svg>
          </div>
          <input type="password" value={props.formData.password} placeholder="请输入您的密码" onChange={props.onChange.bind(null, "password")} />
        </div>
        <div className="actions">
          <button type="submit">登录</button>
        </div>
        <div className="switcher">
          <a className="toLeft" href="#" onClick={props.onForgetPassword}>忘记密码了？</a>
          <span className="toRight">还没有账号？<a href="#" onClick={props.onSwitch.bind(null, "signUp")}>注册</a></span>
        </div>
      </form>)
  }
