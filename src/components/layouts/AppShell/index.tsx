import React from 'react'
import Navbar from '../Navbar'

type AppeShellProps = {
  children: React.ReactNode
}

const AppShell = (props: AppeShellProps) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default AppShell