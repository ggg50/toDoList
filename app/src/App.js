import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import UserDialog from './userDialog';
import 'normalize.css';
import './reset.css';
import './todoItem.css';
import './todoInput.css';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      user:{},
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
          <TodoInput content={this.state.newTodo} onChange={this.changeTitle.bind(this)} onSubmit={this.addTodo.bind(this)} />
        <ul className="todoList">{todos}</ul>
        <UserDialog onSignUp={this.onSignUp.bind(this)} />
      </div>
    )
  }

  onSignUp(user) {
    console.log("okok");
    this.state.user = user;
    this.setState(this.state);
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
