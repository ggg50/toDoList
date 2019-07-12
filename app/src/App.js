import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './todoInput';
import TodoItem from './todoItem';
import 'normalize.css';
import './reset.css';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo: "",
      todoList: [
        {id: 1, title: "First events", status: "completed", deleted: false},
        {id: 2, title: "Second events", status: "completed", deleted: false},
        {id: 3, title: "Third events", status: "completed", deleted: false},
      ]
    }
  }
  render(){
    let todos = this.state.todoList.map(todo => {
      return (
        <li key={todo.id}>
          <TodoItem item={todo} onToggle={this.toggle.bind(this)}/>
        </li>
      )
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <TodoInput content={this.state.newTodo} onSubmit={this.addTodo.bind(this)}/>
        <ul>{todos}</ul>
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
      toDoList: this.state.toDoList
    })
  }

  toggle(e, todoItem) {
    todoItem.status = todoItem.status === "completed" ? "" : "completed";
    this.setState(this.state);
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
