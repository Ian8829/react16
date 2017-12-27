import React from 'react';

const person = (props) => {
  const { name, age } = props;
  return <p>I'm a {name}, I'm {age} years old.</p>
};

// when using class-based components, it's {this.props}

export default person;