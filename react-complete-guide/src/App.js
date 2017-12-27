import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // Don't do this!! this.state.persons[0].name = "Ariana"
    this.setState({
      persons: [
        { name: 'Fox', age: 28 },
        { name: 'Gino', age: 29 },
        { name: 'Billie', age: 27 },
      ]
    })
  };

  render() {
    return (
      <div className='App'>
        <h1>Hello...</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies?</Person>
      </div>
    );
  }
}

export default App;
