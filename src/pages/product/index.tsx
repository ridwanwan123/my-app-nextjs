import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

type productType = {
  id: number,
  name: string,
  price: number,
  size: string
}

const index = () => {
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   if (!isLogin) {
  //     push('/auth/login')
  //   }
  // }, [])

  useEffect(() => {
    fetch('/api/product')
      .then((res) => res.json())
      .then((response) => {
        setProducts(response.data)
      })
  }, [])


  return (
    <div>
      {products.map((product: productType) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default index