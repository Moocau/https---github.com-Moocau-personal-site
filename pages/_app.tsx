import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer'
import { Splash } from '@/components/Splash'
import '../styles/Navbar.scss'
import '../styles/Footer.scss'
import '../styles/Splash.scss'

export default function App() {
  return (
    <div className='page-container'>
      <Navbar />
        <Splash />
      <Footer />
    </div>
  )
}
