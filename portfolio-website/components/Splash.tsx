import React from 'react';
import Image from 'next/image';

export const Splash = () => {
  return (
    <div className="splash-welcome-mat">
      <div className="splash-background background"></div>
      <div className="splash-container">
        <div className="splash-message">
          <h1>I am Robyn Snook,</h1>
          <h2>
            A relentless navigator of the binary matrix, harnessing the power of
            code by day. As twilight descends, I morph into a
            culinary alchemist, savoring the hidden flavors of this neon-lit
            metropolis.
          </h2>
          <p>
            I am driven by the unquenchable
            thirst for deciphering enigmatic puzzles and constructing
            awe-inspiring creations.
          </p>
          <p>
            Venture forth with me into the boundless expanse of the dataverse,
            where innovation and evolution converge. Together, we shall
            transcend boundaries and unravel the mysteries that pulse through
            the veins of the digital labyrinth.
          </p>
        </div>
      </div>
    </div>
  );
};
