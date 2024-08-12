import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main>
        <main className='auth'>{children}</main>
    </main>
  )
}

export default Layout
