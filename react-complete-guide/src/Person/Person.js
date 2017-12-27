import React from 'react';

const person = (props) => {
  const { name, age, children } = props;

  return (
    <div>
      <p onClick={props.click}>I'm a {name}, I'm {age} years old.</p>
      <p>{children}</p>
      <input type='text' onChange={props.changed} />
    </div>
  );
};

// when using class-based components, it's {this.props}

export default person;