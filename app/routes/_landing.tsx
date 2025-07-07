import { Footer } from '@/components/layouts/landing/footer'
import { Header } from '@/components/layouts/landing/header'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
