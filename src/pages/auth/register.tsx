import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <>
      <div>
        <h1>Register Page</h1>
        Sudah punya akun ? <Link href="/auth/login"> Login</Link>
      </div>
    </>
  )
}

export default RegisterPage