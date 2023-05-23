import React from 'react'

const List = ({lista}) => {
  return (
    <div>
      { lista.length > 0 && lista.map(ch => (
        <h3 key={ch.id}>{ch.name}</h3>
      ))}
    </div>
  )
}

export default List