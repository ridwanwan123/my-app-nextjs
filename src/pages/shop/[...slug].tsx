import React from 'react'
import { useRouter } from 'next/router'

const ShopPage = () => {
  const { query } = useRouter()
  // console.log(query);
  return (
    <div>
      <h1>ShopPage</h1>
      <p>Shop : {query.slug}</p>
    </div>
  )
}

export default ShopPage