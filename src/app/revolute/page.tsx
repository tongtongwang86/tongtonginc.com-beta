// app/page1/page.tsx


import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import Image from "next/image";



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

<div className="flex flex-col md:flex-row justify-between items-center gap-6 ">
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-xl font-semibold">Some Heading</h2>
    <p className="text-gray-600">This is some text content. It will appear on the left side of the screen on larger devices.</p>
  </div>
  <div className="flex-1 mt-6 md:mt-0">
      <Image
          src="https://images.unsplash.com/photo-1615118265620-d8decf628275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
          alt="Apple Champs Elysees Boardroom"
          layout="intrinsic"
          width={400}
          height={500}
          className="rounded-lg"
        />
  </div>
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
          <UI.HVideoScroll >
            {videoSlides}
          </UI.HVideoScroll>
        </div>

      </div>


      <h1>
        hi

      </h1>
      <div className="relative w-full mx-auto">
        <UI.HVideoScroll >
          {videoSlides}
        </UI.HVideoScroll>
      </div>

      <div className='w-full'>

      <script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=b8c4ed&w=a&t=m&d=h-N136sd0LK99-QFCGukGHZrpRc0Ga2elLdOfg0qwUk&co=353d42&cmo=a8f58d&cmn=c3ffcd'></script>

      </div>


    </UI.BodyContainer>
  );
}
