import { fetcher } from '@/utils/swr/fetcher';
import ProductView from '@/views/product';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';


const index = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push('/auth/login')
  //   }
  // }, [])

  // useEffect(() => {
  //   fetch('/api/product')
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setProducts(response.data)
  //     })
  // }, [])

  const { data, error, isLoading } = useSWR('/api/product', fetcher);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  )
}

export default index