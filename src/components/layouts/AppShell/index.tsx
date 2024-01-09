import React from 'react'
import Navbar from '../Navbar'
import { useRouter } from 'next/router';

type AppeShellProps = {
  children: React.ReactNode
}

const disableNavbar = ['/', '/auth/login', '/auth/register', '/404'];

const AppShell = (props: AppeShellProps) => {
  const { children } = props;
  const router = useRouter();
  return (
    <main>
      {!disableNavbar.includes(router.pathname) && <Navbar />}
      {children}
    </main>
  )
}

export default AppShell