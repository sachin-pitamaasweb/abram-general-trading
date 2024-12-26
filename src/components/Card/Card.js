'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './card.module.css';

export default function Card({ image, title, content }) {
  const cardRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left - width / 2);
      setMouseY(e.clientY - rect.top - height / 2);
    }
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;
  const rX = mousePX * 30;
  const rY = mousePY * -30;
  const tX = mousePX * -40;
  const tY = mousePY * -40;

  return (
    <div
      className={`${styles.cardWrap} mx-auto`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className={styles.card}
        style={{
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
        }}
      >
        <div
          className={styles.cardBg}
          style={{
            transform: `translateX(${tX}px) translateY(${tY}px)`
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.cardInfo}>
          <h2 className='text-[16px] font-semibold mb-5'>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

