import React from 'react';

class TodoInput extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return <input type="text" className="todoInput" defaultValue={this.props.content}
    onKeyPress={this.submit.bind(this)}/>
  }

  submit(e) {
    if(e.key === "Enter") {
      this.props.onSubmit(e);
    }
  }
}
export default TodoInput
