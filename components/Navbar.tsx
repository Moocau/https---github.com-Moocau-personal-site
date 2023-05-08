import React from 'react';
import Router from 'next/router';
import Link from 'next/link';


export const Navbar = () => {

  return (
    <div className='navigation-bar'>
      <Link href='/'>Robyn Snook</Link>
      <Link href='/'>About</Link>
      <Link href='/projects'>Projects</Link>
      <Link href='/blog'>Blog</Link>
    </div>
  )
}