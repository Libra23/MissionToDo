import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {

  render() {
    return(
      <li className='todo'>
        <div>
          <span>{this.props.content}</span>
          <button id={this.props.id} onClick={this.props.onClickEditListener}>Edit!!</button>
        </div>
        <div>
          <span>{this.props.deadline}</span>
          <button id={this.props.id} onClick={this.props.onClickCompleteListener}>Complete!!</button>
        </div>
      </li>)
    }
  }

  export default ToDo
