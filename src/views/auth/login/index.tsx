import React from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import loginCSS from './Login.module.scss'

const LoginViews = () => {
  const { push } = useRouter()
  // const handleLogin = () => {
  //   push('/product');
  // }

  return (
    <div className={loginCSS.login}>
      <h1 className="text-3xl uppercase">Login Page</h1>
      <button onClick={() => push('/product')}>Login</button>
      Belum punya akun ? <Link href="/auth/register"> Registrasi</Link>
    </div>
  )
}

export default LoginViews