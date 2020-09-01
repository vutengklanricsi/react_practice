import React from 'react';
import Practice from './hoc/Practice'


const Contact = (props) => {
  // console.log(props)
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)
  return(
    <div className="container">
      <h4 className="center">Contact Page</h4>
      <p>sum has been the industry's standard he</p>
    </div>
  )
}

export default Practice(Contact);
// Ha a függvénynek adunk egy Props paramétert akkor automatikusan hozzáadja props router információkat
// ez azért van, mert ez az egyik komponens router betölt. Eddig 