import React from 'react';
import Image from 'next/image';

export const Splash = () => {
  return (
    <div className='splash-welcome-mat'>
      <Image
        src='/splash-image.jpeg'
        alt='me'
        width='539'
        height='539'
        id='splash-image'
      />
      <div>
        <h1>Greetings, I'm Robyn Snook</h1>
        <h2>Software Engineer by day, Food Connoisseuse by night</h2>
        <p>Passionate about puzzle solving and building interesting things from code.</p>
        <p>Always seeking to learn and grow.</p>
      </div>
    </div>
  );
};
