import React from 'react';

const Rainbow = (WrappedComponent) => { // WrappedComponent helyére rakhatunk egy komponenst és visszadja a rainbow fv. egy supercharged componensé
  const colours =  ['red', 'orange', 'blue', 'green', 'yellow'];
  const randomColours = colours[Math.floor(Math.random() * 5)]
  const className = randomColours + '-text';
  //
  return (props) => {
    return(
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow;
