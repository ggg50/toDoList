import React from 'react';


export default class UserDialog extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="userDialogWrapper">
      <div className="userDialog">
        <nav>
          <input type="radio" />注册
          <input type="radio" />登录
        </nav>
        <div className="panes">
          <form className="signUp">
            <div className="row">
              <label>用户名</label>
              <input type="text" />
            </div>
            <div className="row">
              <label>密码</label>
              <input type="password" />
            </div>
            <div className="row actions">
              <button type="submit">注册</button>
            </div>
          </form>

          <form className="signIp">
            <div className="row">
              <label>用户名</label>
              <input type="text" />
            </div>
            <div className="row">
              <label>密码</label>
              <input type="password" />
            </div>
            <div className="row actions">
              <button type="submit">登录</button>
            </div>
          </form>

        </div>
      </div>
    </div>
    )
  }
}
