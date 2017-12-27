import React from 'react';

const person = (props) => {
  const { name, age, children } = props;

  return (
    <div>
      <p>I'm a {name}, I'm {age} years old.</p>
      <p>{children}</p>
    </div>
  );
};

// when using class-based components, it's {this.props}

export default person;