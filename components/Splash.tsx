import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';

export const Splash = () => {
  const poloroid = useRef<HTMLDivElement>(null);
  let newStyle = {
    transform: 'rotate(0deg)',
    transformOrigin: 'top center',
  };
  let previousXPosition = 0;

  const mouse = {
    _x: 0,
    x: 0,
    updatePosition: function (event: React.MouseEvent) {
      let e = event || window.event;
      if (poloroid.current !== null) {
        this.x = e.clientX - this._x - poloroid.current.offsetWidth / 2;
      }
    },
    setOrigin: function () {
      if (poloroid.current !== null) {
        this._x =
          poloroid.current.getBoundingClientRect().left + window.scrollX;
      }
    },
  };

  mouse.setOrigin();

  const updateImage = (e: React.MouseEvent) => {
    if (poloroid.current !== null) {
      mouse.updatePosition(e);
      const style = transformImageStyle(mouse.x);
      if (style) {
        poloroid.current.style.transform = style.transform;
      }
    }
  };

  const onMouseEnterHandler = (e: React.MouseEvent) => {
    mouse.setOrigin();
    updateImage(e);
  };

  const onMouseMoveHandler = (e: React.MouseEvent) => {
    updateImage(e);
  };

  const onMouseLeaveHandler = (e: React.MouseEvent) => {
    if (poloroid.current !== null) {
      poloroid.current.style.transform = newStyle.transform;
    }
    previousXPosition = 0;
  };

  const transformImageStyle = (x: any) => {
    if (poloroid.current !== null) {
      const rotateDeg =
        parseFloat((x / poloroid.current.offsetWidth / 2).toFixed(2)) +
        previousXPosition;
      previousXPosition = rotateDeg;
      const transform = `rotate(${rotateDeg}deg)`;

      return {
        transform,
      };
    }
  };

  return (
    <div className="splash-container">
      <div className="pushpin-image">
        <div className="image-container" ref={poloroid} style={newStyle}>
          <Image
            src="/splash-image.jpeg"
            alt="image of me in the mountains"
            width="400"
            height="400"
            id="splash-image"
            onMouseEnter={onMouseEnterHandler}
            onMouseMove={onMouseMoveHandler}
            onMouseLeave={onMouseLeaveHandler}
          />
        </div>
      </div>
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
  );
};
