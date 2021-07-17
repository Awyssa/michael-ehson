import React from 'react'
import Homepage from '../src/components/Homepage'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'

const Index = (props) => {
  return (
    <Homepage {...props} />
  )
}
  
export async function getStaticProps() {
  
  const data = {
    name: 'Michael Henderson',
    occupation: 'Software Engineer',
    age: 'old'
  }

  return { props: data }
}

export default Index