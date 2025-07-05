import { Outlet } from 'react-router'
import { Footer } from '@/components/layouts/landing/footer'
import { Header } from '@/components/layouts/landing/header'

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
