import React from 'react';
import Image from 'next/image';

export const Splash = () => {
  return (
    <div className='splash-welcome-mat'>
      <Image
        src='/splash-image.jpeg'
        alt='me'
        width='738'
        height='539'
        id='splash-image'
      />
      <div>
        <h1>Greetings! I'm Robyn Snook</h1>
        <h2>Software Engineer by day, Food Connoisseuse by night</h2>
      </div>
    </div>
  );
};
