import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Splash } from '@/components/Splash';
import { Hamburger } from '@/components/Hamburger';
import { useRouter } from 'next/router';
import '@/styles/globals.scss';
import '../styles/Navbar.scss';
import '../styles/Footer.scss';
import '../styles/Splash.scss';
import '../styles/Projects.scss';
import '../styles/About.scss';
import '../styles/Blog.scss';
import '../styles/Hamburger.scss';
import { Kanit, Press_Start_2P } from 'next/font/google';

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400',
  style: 'normal', 
  variable: '--font-kanit'
})

const press_start_2p = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  style: 'normal', 
  variable: '--font-press_start_2p'
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [mobile, setMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 700 ? true : false)
    }

    updateMobile()
    window.addEventListener('resize', updateMobile)
    return () => {
      window.removeEventListener('resize', updateMobile)
    }
  }, [])

  return (
    <div className='page-container'>
      <style jsx global>{`
        :root {
          --kanit-font: ${kanit.style.fontFamily};
          --press_start_2p-font: ${press_start_2p.style.fontFamily};
        }`
      }</style>
      {typeof mobile !== 'undefined' ? (mobile? <Hamburger /> : <Navbar />) : null}
      {router.pathname === '/' && <Splash />}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
