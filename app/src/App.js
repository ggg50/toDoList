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
      newTodo: "test",
      todoList: [
        {id: 1, title: "First events"},
        {id: 2, title: "Second events"},
        {id: 3, title: "Third events"},
      ]
    }
  }
  render(){
    let todos = this.state.todoList.map(todo => {
      return <TodoItem key={todo.id} id={todo.id} title={todo.title} />;
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <TodoInput todo={this.state.newTodo}/>
        <ul>{todos}</ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
