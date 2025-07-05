import { Outlet } from 'react-router'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

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
