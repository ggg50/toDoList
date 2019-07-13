import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import * as localStore from './localStore'
import 'normalize.css';
import './reset.css';
import './todoItem.css';
import './todoInput.css';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo: "",
      todoList: localStore.load("todoList") || []
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
        <h1>我的代办</h1>
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)} />
        <ul className="todoList">{todos}</ul>
      </div>
    )
  }

  addTodo(e) {
    this.state.todoList.push({
      id: this.state.todoList.length + 1,
      title: e.target.value,
      status: null,
      deleted: false
    });
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

  componentDidUpdate(){
    localStore.save("todoList", this.state.todoList);
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
