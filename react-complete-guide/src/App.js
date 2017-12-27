import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello...</h1>
        <Person name="Max" age="28" />
        <Person name="Stephanie" age="26" />
        <Person name="Manu" age="29">My hobbies?</Person>
      </div>
    );
  }
}

export default App;
