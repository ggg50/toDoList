import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return <li key={this.props.id}>{this.props.title}</li>
  }
}

export default TodoItem
