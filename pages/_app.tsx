import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer'
import { Splash } from '@/components/Splash'
import { useRouter } from 'next/router';
import '../styles/Navbar.scss'
import '../styles/Footer.scss'
import '../styles/Splash.scss'
import '../styles/Projects.scss'
import '../styles/About.scss'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className='page-container'>
      <Navbar />
        {router.pathname === '/' && <Splash />}
        <Component {...pageProps} />
      <Footer />
    </div>
  )
}
