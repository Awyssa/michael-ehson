import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Comments = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <div>
      <h1>note: {id} </h1>
    </div>
  )
}

export default Comments