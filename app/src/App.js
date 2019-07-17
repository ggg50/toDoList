import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import UserDialog from './userDialog';
import {getCurrentUser, signOut, TodoModel} from './leanCloud';
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
    };

    let user = getCurrentUser;
    if(user) {
      this.getUserTodoLists();
    }
  };
  render(){
    let todos = this.state.todoList
    .filter(todo => !todo.deleted)
    .map(todo => {
      return (
        <li key={todo.id}>
          <TodoItem item={todo} onToggle={this.toggle.bind(this)} onDelete={this.delete.bind(this)}/>
        </li>
      )
    });
    let useTag = ''

    return (
      <div className="App">
        <div className="backPage1"></div>
        <div className="backPage2"></div>
        <header>
          <h1>{this.state.user.username || "我"}的待办</h1>
          {this.state.user.id ? <span onClick={this.userSignOut.bind(this)}>
            <svg class="icon" aria-hidden="true">
              <use xlinkHref="#icon-logout"></use>
            </svg>
          </span> : null}
        </header>
        <TodoInput content={this.state.newTodo} onChange={this.changeTitle.bind(this)} onSubmit={this.addTodo.bind(this)} />
        <ul className="todoList">{todos}</ul>
        {this.state.user.id ? null : <UserDialog
          onSignUp={this.onSignUpOrSignIn.bind(this)}
          onSignIn={(user)=>{this.onSignUpOrSignIn.bind(this).call(null, user); this.getUserTodoLists.bind(this).call(null, user)}}/>}
      </div>
    )
  };

  getUserTodoLists(user) {
    TodoModel.getByUser(user, todos => {
      let stateCopy = JSON.parse(JSON.stringify(this.state));
      stateCopy.todoList = todos;
      this.setState(stateCopy);
    });
  }


  onSignUpOrSignIn(user) {
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = user;
    this.setState(stateCopy);
  };

  userSignOut() {
    signOut();
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = {};
    this.setState(stateCopy);
  };

  addTodo(e) {
    let newTodo = {
      title: e.target.value,
      status: "uncomplete",
      deleted: false
    };

    TodoModel.create(newTodo, todo=>{
      newTodo.id = todo.id;
      this.state.todoList.push(newTodo);
      this.setState({
        newTodo: "",
        todoList: this.state.todoList
      });
    }, error=> {
      console.log(error);
    })

  };

  toggle(e, todo) {
    let oldStatus = todo.status;
    todo.status = todo.status === "completed" ? "uncomplete" : "completed";
    TodoModel.update(todo, ()=> {
      this.setState(this.state);
    }, ()=>{
      todo.status = oldStatus;
      this.setState(this.state);
    })

  };

  delete(e, todo) {
    TodoModel.destroy(todo.id, ()=> {
      todo.deleted = true;
      this.setState(this.state);
    })
  };
  changeTitle(e, todoItem) {
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  };
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
