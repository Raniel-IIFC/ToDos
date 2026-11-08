import { Outlet, ScrollRestoration } from 'react-router'
import Navbar from './Navbar.jsx'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-800">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  )
}

export default Layout
