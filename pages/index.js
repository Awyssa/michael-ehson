import React from 'react'

const Index = () => {
  <h1>Welcome to the Homepage!</h1>
}
  
export async function getStaticProps({ res }) {

  if (res)
    console.log("THE RES====", res)
  
  const data = {
    name: "Michael Henderson",
    occupation: "Software Engineer",
    age: "old"
  }

  return {
    props: {data: data}
  }
}

export default Index