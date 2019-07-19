import React from 'react';

export default function(props){
    return (
     <form className="signUp" onSubmit={props.onSubmit} >

      <div className="inputWrapper">
        <div className="iconWrapper">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-denglu-copy"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-fs-line"></use>
          </svg>
        </div>
        <input type="text" value={props.formData.username} placeholder="请输入您的账号" onChange={props.onChange.bind(null, "username")} />
      </div>

      <div className="inputWrapper">
        <div className="iconWrapper">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-mima"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-fs-line"></use>
          </svg>
        </div>
        <input type="password" value={props.formData.password} placeholder="请输入您的密码" onChange={props.onChange.bind(null, "password")} />
      </div>

      <div className="inputWrapper">
        <div className="iconWrapper">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-youxiang1"></use>
          </svg>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-fs-line"></use>
          </svg>
        </div>
        <input type="text" value={props.formData.email} placeholder="请输入您的邮箱" onChange={props.onChange.bind(null, "email")} />
      </div>

      <div className="actions">
        <button type="submit">注册</button>
      </div>
      <div className="switcher">
        <a className="toRight" href="#" onClick={props.onSwitch.bind(null, "signIn")}>返回注册</a>
      </div>
    </form>);
  }
