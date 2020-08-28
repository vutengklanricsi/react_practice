import React, {Component} from 'react';

// 10-ik sorban adni kell neki egy key-t
const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map(ninja => { 
    return (
      <div className="ninja" key={ ninja.id }> 
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
      </div>
    )
  })
  return (
    <div className="ninjaList">
      { ninjaList }
    </div>
  )
}

export default Ninjas;

//classoknál automatikusan rákapcsolódik a props és nem kell paraméterként megadni. Viszont functionöknél átkell adni a props-ot