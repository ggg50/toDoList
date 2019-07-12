import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newTodo: "test",
      todoList: [
        {id: 1, title: "First events"}
      ]
    }
  }
  render(){
    let todos = this.state.todoList.map(todo => {
      return <li>{todo.title}</li>;
    })
    return (
      <div>
        <h1>我的代办</h1>
        <div><input /></div>
        <ul>{todos}</ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
