import React from 'react';

const person = (props) => {
  const { name, age, children, click, changed } = props;

  return (
    <div>
      <p onClick={click}>I'm a {name}, I'm {age} years old.</p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  );
};

// when using class-based components, it's {this.props}

export default person;