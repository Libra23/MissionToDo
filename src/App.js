import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MakeToDo from './MakeToDo';
import ToDoList from './ToDoList';

export default　class App extends Component {

  constructor() {
    super()
    this.state={
      list: [],
    }
  }

  render() {
    return (
      <div className="App">
        <h1>What to do ?</h1>
        <ToDoList
        list={this.state.list}
        onClickCompleteListener={(e) => this.onClickCompleteListener(e)}
        onClickEditListener={(e) => this.onClickEditListener(e)}
        />
        <MakeToDo
        onSubmitListener={(e) => this.onSubmitListener(e)}
        />
      </div>
    )
  }

  onSubmitListener(e) {
    e.preventDefault();
    const id = this.setIdByDate();
    const content = e.target.content.value;
    const deadline = e.target.deadline.value;
    const new_list = this.state.list.slice()

    new_list.push({
      id: id,
      content: content,
      deadline: deadline
    });

    this.setState({
      list:new_list
    })
    e.target.content.value = '';
    e.target.deadline.value = '';
  }

  onClickCompleteListener(e) {
    e.preventDefault();
    const new_list = this.state.list.slice();
    const index=this.state.list.findIndex(element=>element.id==e.target.id)
    new_list.splice(index, 1);
    this.setState({
      list:new_list
    })
  }

  onClickEditListener(e) {
    e.preventDefault();

  }

  setIdByDate(){
    const date = new Date()
    return date.getTime()
  }
}
