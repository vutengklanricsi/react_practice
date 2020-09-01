import React from 'react';

const Rainbow = (WrappedComponent) => {
  const Colours = ['red', 'blue', 'green', 'yellow'];
  const RandomColours = Colours[Math.floor(Math.random() * 4)];
  const ColourText = RandomColours + '-text';
  
  return(props) => {
    return(
      <div className={ColourText}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow;
