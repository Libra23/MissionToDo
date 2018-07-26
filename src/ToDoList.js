import React, { Component } from 'react';
import ToDo from './ToDo';

export default class ToDoList extends Component {

  render() {
    console.log(this.props.list)
    const html = this.props.list.map((e) => {
      return(
        <ToDo
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
