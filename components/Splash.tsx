import React from 'react';
import Image from 'next/image';


export const Splash = () => {


  return (
    <div className='splash-welcome-mat'>
      <div className='splash-background background'></div>
      <div className="splash-container">
        <div className="splash-message">
          <h1>Greetings, I'm Robyn Snook</h1>
          <h2>Software Engineer by day, Food Connoisseuse by night</h2>
          <p>
            Passionate about puzzle solving and building interesting things from
            code.
          </p>
          <p>Always seeking to learn and grow.</p>
        </div>
      </div>
    </div>
  );
};
