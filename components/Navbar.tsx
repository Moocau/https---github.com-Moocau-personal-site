import React from 'react';
import Router from 'next/router';
import Link from 'next/link';


export const Navbar = () => {

  return (
    <div className='navigation-bar'>
      <div className='navigation-items'>
        <div className='navbar-item-inner'>
          <Link href='/'>Robyn Snook</Link>
        </div>
        <ul>
          <div className='navbar-item-inner'>
            <li><Link href='/'>About</Link></li>
          </div>
          <div className='navbar-item-inner'>
            <li><Link href='/projects'>Projects</Link></li>
          </div>
          <div className='navbar-item-inner'>
            <li><Link href='/blog'>Blog</Link></li>
          </div>
        </ul>
      </div>
    </div>
  )
}