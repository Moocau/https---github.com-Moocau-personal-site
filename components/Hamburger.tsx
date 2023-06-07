import React from 'react';
import { useState } from 'react';
import Link from 'next/link';


export const Hamburger = () => {
  const [ showMenu, setShowMenu ] = useState<boolean>(false);

  const addMenuEventListener = () => {
    document.addEventListener('mousedown', hideMenu);
    document.getElementById('menu')?.addEventListener('mousedown', stopEventBubbling);
    document.getElementsByClassName('menu-button-container')[0].addEventListener('mousedown', stopEventBubbling as EventListener);
  }
  const removeMenuEventListener = () => {
    document.removeEventListener('mousedown', hideMenu);
    document.getElementById('menu')?.removeEventListener('mousedown', stopEventBubbling);
    document.getElementsByClassName('menu-button-container')[0].removeEventListener('mousedown', stopEventBubbling as EventListener);
  }
  const toggleMenu = () => {
    if (!showMenu) { addMenuEventListener() }
    else { removeMenuEventListener() }
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
    removeMenuEventListener();
  };
  const stopEventBubbling = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className='mobile-navigation-bar'>
      <div className='mobile-navigation-items'>
        <Link href='/'>Robyn Snook</Link>
        <button id="menu-toggle" className={showMenu ? 'menu-cross' : 'menu-hamburger'} onClick={toggleMenu}></button>
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul id='hamburger' className='hamburger'>
          <li><Link href='/about' onClick={hideMenu}>About</Link></li>
          <li><Link href='/projects' onClick={hideMenu}>Projects</Link></li>
          <li><Link href='/blog' onClick={hideMenu}>Blog</Link></li>
        </ul>
      </div>
    </div>
  )
}