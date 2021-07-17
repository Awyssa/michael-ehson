import React from 'react'

const Homepage = (props) => {

  const { name, occupation, age } = props;

  return (
    <div>
      <p>Home page!!!</p>
      <p>{name}</p>
      <p>{occupation}</p>
      <p>{age}</p>
    </div>
  )

}

export default Homepage