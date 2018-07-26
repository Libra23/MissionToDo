import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {

  render() {
    console.log(this.props.list)
    const html = this.props.list.map((e) => {
      return(
        <ToDo
          key={e.id}
          {...e}
          onClickCompleteListener={this.props.onClickCompleteListener}
          onClickEditListener={this.props.onClickEditListener}
        />)
    })
    console.log(html)
    return(
      <ul>
        {html}
      </ul>
    )
  }
}

export default ToDoList
