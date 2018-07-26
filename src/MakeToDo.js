import React, { Component } from 'react';
import './MakeToDo.css';

export default class MakeToDo extends Component {

  render() {
    return(
      <div className="form">
        <form onSubmit={this.props.onSubmitListener}>
          <input name="content" type="text" placeholder="Input what to do!!" />
          <input name="deadline" type="date" />
          <button type="submit">Make</button>
        </form>
      </div>
    )
  }
}
