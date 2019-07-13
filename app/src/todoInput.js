import React from 'react';

class TodoInput extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return <input type="text" className="todoInput" value={this.props.content}
    onChange={this.change.bind(this)}
    onKeyPress={this.submit.bind(this)}/>
  }

  submit(e) {
    if(e.key === "Enter") {
      this.props.onSubmit(e);
    }
  }

  change(e) {
    this.props.onChange(e);
  }
}
export default TodoInput
