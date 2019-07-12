import React from 'react';

class TodoInput extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return <div> <input value={this.props.todo.title} /></div>
  }
}
export default TodoInput
