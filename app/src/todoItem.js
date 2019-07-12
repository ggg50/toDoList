import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props);
  }
  render () {
    return  (
      <div>
        <input type="checkbox" checked={this.props.item.status === "completed"} onChange={this.toggle.bind(this)}/> {this.props.item.title}
        <button onClick={this.delete.bind(this)}>删除</button>
      </div>
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
