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
      {typeof mobile !== 'undefined' ? (mobile? <Hamburger /> : <Navbar />) : null}
      {router.pathname === '/' && <Splash />}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
