import React from 'react'
import { useRouter } from 'next/router'

const DetailProductPage = () => {
  const {query} = useRouter()
  
  return (
    <div>
      <h1>DetailProductPage</h1>
      <p>
        Detail Product : {query.id}
      </p>
    </div>
  )
}

export default DetailProductPage