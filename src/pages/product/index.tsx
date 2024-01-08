import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const index = () => {
  const [isLogin, setIsLogin] = useState();
  const { push } = useRouter()

  useEffect(() => {
    if (!isLogin) {
      push('/auth/login')
    }
  }, [])


  return (
    <div>index</div>
  )
}

export default index