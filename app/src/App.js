import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import UserDialog from './userDialog';
import {getCurrentUser, signOut} from './leanCloud';
import 'normalize.css';
import './reset.css';
import './todoItem.css';
import './todoInput.css';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user: getCurrentUser() || {},
      newTodo: "",
      todoList: []
      // todoList: localStore.load("todoList") || []
    }
  }
  render(){
    let todos = this.state.todoList
    .filter(todo => !todo.delete)
    .map(todo => {
      return (
        <li key={todo.id}>
          <TodoItem item={todo} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>{this.state.user.username || "我"}的代办</h1>
        {this.state.user.id ? <button onClick={this.userSignOut.bind(this)}>登出</button> : null}
        <TodoInput content={this.state.newTodo} onChange={this.changeTitle.bind(this)} onSubmit={this.addTodo.bind(this)} />
        <ul className="todoList">{todos}</ul>
        {this.state.user.id ? null : <UserDialog onSignUp={this.onSignUpOrSignIn.bind(this)} onSignIn={this.onSignUpOrSignIn.bind(this)}/>}
      </div>
    )
  }

  onSignUpOrSignIn(user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    stateCopy.user = user
    this.setState(stateCopy)
  }

  userSignOut() {
    signOut();
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = {};
    this.setState(stateCopy);
  }

  addTodo(e) {
    let newTodo = {
      id: this.state.todoList.length + 1,
      title: e.target.value,
      status: null,
      deleted: false
    };
    this.state.todoList.push(newTodo);
    this.setState({
      newTodo: "",
      todoList: this.state.todoList
    });
  }

  toggle(e, todoItem) {
    todoItem.status = todoItem.status === "completed" ? "" : "completed";
    this.setState(this.state);
  }

  delete(e, todoItem) {
    todoItem.delete = true;
    this.setState(this.state);
  }
  changeTitle(e, todoItem) {
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }

  componentDidUpdate(){
    // localStore.save("todoList", this.state.todoList);
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
