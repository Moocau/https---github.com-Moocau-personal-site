import React from 'react';
import Router from 'next/router';
import Link from 'next/link';


export const Navbar = () => {

  return (
    <div className='navigation-bar'>
      <div className='navigation-items'>
        <div className='navbar-item-outer'>
          <div className='navbar-item-inner'>
            <Link href='/'>Robyn Snook</Link>
          </div>
        </div>
        <ul>
          <li><Link href='/'>About</Link></li>
          <li><Link href='/projects'>Projects</Link></li>
          <li><Link href='/blog'>Blog</Link></li>
        </ul>
      </div>
    </div>
  )
}