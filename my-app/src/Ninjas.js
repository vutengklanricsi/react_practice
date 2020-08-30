import React from 'react';

// 10-ik sorban adni kell neki egy key-t
const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 21 ? 
      (<div className="ninja" key={ ninja.id }> 
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>delete</button>
      </div>) : null;
  }) 
  return (
    <div className="ninjaList">
      { ninjaList }
    </div>
  )
}

export default Ninjas;

//classoknál automatikusan rákapcsolódik a props és nem kell paraméterként megadni. Viszont functionöknél átkell adni a props-ot
// 24-es sorban az onclicknél azért raktuk egy anonim függvénybe, hogy az oldal betöltésénél ne triggerelődjön az esemény a click