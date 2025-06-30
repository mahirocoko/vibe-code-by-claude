import { Outlet } from 'react-router'
import { Footer } from './footer'
import { Header } from './header'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="mt-14">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
