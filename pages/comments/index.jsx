import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <p>hello there!</p>
  </div>
)

export async function getServerSideProps({ res }) => {
  const res = await fetch(`/api/comment/${req.query}`)
  const { data } = await res.json()

  console.log(data)

  return  {
    props: {comments: data}
  }

}