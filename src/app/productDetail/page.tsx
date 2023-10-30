
'use client'
import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

export default function PrdouctDetail() {


    const swiperElRef = useRef(null);

    useEffect(() => {
      swiperElRef.current.addEventListener('progress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('slidechange', (e) => {
        console.log('slide changed');
      });
    }, []);
  
    return (
      <swiper-container
        ref={swiperElRef}
        slides-per-view="3"
        navigation="true"
        pagination="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
      </swiper-container>
    );
}