// app/page1/page.tsx


import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';


export default function revolute() {

  const videoSlides = [
    <video
      key="1"
      autoPlay
      loop
      muted
      playsInline
      src="/assets/revolute/demo/1.mp4"
      style={{
        width: "100%",
        height: "100%",
      }}
    />,
    <video
      key="2"
      autoPlay
      loop
      muted
      playsInline
      src="/assets/revolute/demo/2.mp4"
      style={{
        width: "100%",
        height: "100%",
      }}
    />,
    <video
      key="3"
      autoPlay
      loop
      muted
      playsInline
      src="/assets/revolute/demo/3.mp4"
      style={{
        width: "100%",
        height: "100%",
      }}
    />,
    <video
      key="4"
      autoPlay
      loop
      muted
      playsInline
      src="/assets/revolute/demo/4.mp4"
      style={{
        width: "100%",
        height: "100%",
      }}
    />,
  ];



  return (
    <UI.BodyContainer
      navColor="#121212"
      backgroundColor="#000000"
      logoColor='#ded2b4ff'
      hoverShadowColor='rgba(222, 210, 180, 0.8)'
    >

<div className=' px-10 font-sans text-xl '> 
          Revolute
        </div><div className=' px-10 font-sans text-xl '> 
          Revolute
        </div><div className=' px-10 font-sans text-xl '> 
          Revolute
        </div><div className=' px-10 font-sans text-xl '> 
          Revolute
        </div><div className=' px-10 font-sans text-xl '> 
          Revolute
        </div><div className=' px-10 font-sans text-xl '> 
          Revolute
        </div>


      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >
         <div className=' px-10 font-sans text-xl '> 
          Revolute
        </div>


        <h1> 
          text
        </h1>

      </div>


      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >

<div className="relative w-full mx-auto">
        <UI.HVideoScroll autoSlide={false}>
          {videoSlides}
        </UI.HVideoScroll>
      </div>

      </div>


      <h1>
        hi

      </h1>
  <div className="relative w-full mx-auto">
        <UI.HVideoScroll autoSlide={false}>
          {videoSlides}
        </UI.HVideoScroll>
      </div>
    





    </UI.BodyContainer>
  );
}
