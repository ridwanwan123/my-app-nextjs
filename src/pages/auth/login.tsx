import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';


const LoginPage = () => {
  const { push } = useRouter()

  const handleLogin = () => {
    push('/product');
  }

  return (
    <>
      <div>
        <h1>LoginPage</h1>
        <button onClick={handleLogin}>Login</button>
        Belum punya akun ? <Link href="/auth/register"> Registrasi</Link>
      </div>
    </>

  )
}

export default LoginPage