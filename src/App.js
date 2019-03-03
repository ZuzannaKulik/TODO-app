import React, { Component } from 'react';
import './App.css';
import { List } from './List';
import taskIcon from './task-icon-blue.png'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      id: 1,
      current: "",
    };
    this.changeCurrent = this.changeCurrent.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  changeCurrent(evt) {
    console.log("Funkcja changeCurrent");
    this.setState({ current: evt.target.value });
  }
  addTodo(e) {
    console.log(e.target.tagName);
    console.log(e.target.type);
    if (e.key === 'Enter' || e.target.tagName==='BUTTON') {
      
          const { id, current, tasks } = this.state;

    this.setState({
      current: "",
      tasks: [...tasks, `${id} ${current}`],
      id: id + 1,
    });
  }
  }

  deleteAll() {
    this.setState({ tasks: [], id: 1 });
  }

  deleteTodo() {
    const { tasks, id } = this.state;
    tasks.pop();
    this.setState({ tasks, id: id - 1 });
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <p></p>
      <div className="OuterBlock">
      <img src={taskIcon} className="App-logo" alt="logo" />
      </div>
      <div className="OuterBlock">
        <input type="text" onChange={this.changeCurrent} onKeyPress={this.addTodo} value={this.state.current} />
      </div>
      <div className="OuterBlock">
        <button onClick={this.addTodo}>Add</button>
        <button onClick={this.deleteTodo}>Remove</button>
        <button onClick={this.deleteAll}>Remove All</button>   
      </div>
        </header>
        <body className="list-background"> 
        <List tasks={this.state.tasks} id={this.state.id}/>
        </body>
      </div>
    );
  }
}

export default App;
