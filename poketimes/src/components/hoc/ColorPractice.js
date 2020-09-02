import React from 'react'

function ColorPractice(WrappedComponent) {
  const colours = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
  const randomColour = colours[Math.floor(Math.random() * 7)];
  const className = randomColour + '-text';

  return (props) => {
    return(
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
    )
  }
}

export default ColorPractice
