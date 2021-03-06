import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return  (
      <label className="todoItem">
        <input type="checkbox" checked={this.props.item.status === "completed"} onChange={this.toggle.bind(this)}/>
        <span className={"title" + " " + this.props.item.status}>{this.props.item.title}</span>
        <button onClick={this.delete.bind(this)}></button>
      </label>
    )
  }

  toggle(e) {
    this.props.onToggle(e, this.props.item);
  }
  delete(e) {
    this.props.onDelete(e, this.props.item);
  }
}

export default TodoItem
