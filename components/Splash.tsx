import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';

export const Splash = () => {
  const poloroid = useRef<HTMLDivElement>(null);

  const mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event: React.MouseEvent) {
      let e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function () {
      if (poloroid.current !== null) {
        this._x = poloroid.current.offsetLeft;
        this._y = 0;
      }
    },
    show: function() {
      return `(${this.x}, ${this.y})`;
    }
  };

  mouse.setOrigin();

  const updateImage = (e: React.MouseEvent) => {
    if (poloroid.current !== null) {
      mouse.updatePosition(e);
      transformImageStyle(
      (mouse.y / poloroid.current.offsetHeight / 2).toFixed(2),
      (mouse.x / poloroid.current.offsetWidth / 2).toFixed(2)
      );
    };
  };

  const onMouseEnterHandler = (e: React.MouseEvent)  => {
    updateImage(e);
  };

  const transformImageStyle = (x: any, y: any) => {
    let style = `rotateX("${x}"deg) rotateY("${y}"deg)`;
    if (poloroid.current !== null) {
      poloroid.current.style.transform = style;
    }
  };

  if (poloroid.current !== null) {
    poloroid.current.onmouseenter = onMouseEnterHandler;
    poloroid.current.onmousemove = onMouseEnterHandler;
  }

  return (
    <div className='splash-container'>
      <div className='image-container' ref={poloroid}>
        <Image
          src='/splash-image.jpeg'
          alt='image of me in the mountains'
          width='400'
          height='400'
          id='splash-image'
        />
      </div>
      <div className='splash-message'>
        <h1>Greetings, I'm Robyn Snook</h1>
        <h2>Software Engineer by day, Food Connoisseuse by night</h2>
        <p>Passionate about puzzle solving and building interesting things from code.</p>
        <p>Always seeking to learn and grow.</p>
      </div>
    </div>
  );
};
