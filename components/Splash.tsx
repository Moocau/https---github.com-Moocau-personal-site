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
        <p>
          I'm a recovering Financial Accounting expert, giving the world of
          software engineering my best shot. 
        </p>
        <p>
          As a software developer with an
          extensive background in finance. I am well-equipped to develop
          innovative software solutions that optimize processes and enhance data
          analysis. My experience in finance complements my technical expertise,
          making me a valuable asset to any software development team.
        </p>
      </div>
    </div>
  );
};
