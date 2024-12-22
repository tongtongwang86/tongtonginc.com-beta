// app/page1/page.tsx


import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import Image from "next/image";



export default async function revolute() {

  const videoSlides = [

    <video
      key="1"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/assets/revolute/demo/1_Small.png"
      src="/assets/revolute/demo/1.mp4"
      className='aspect w-full h-full'

    />,
    <video
      key="2"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/assets/revolute/demo/2_Small.png"
      src="/assets/revolute/demo/2.mp4"
      className='aspect w-full h-full'

    />,
    <video
      key="3"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/assets/revolute/demo/3_Small.png"
      src="/assets/revolute/demo/3.mp4"
      className='aspect w-full h-full'

    />,
    <video
      key="4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/assets/revolute/demo/4_Small.png"
      src="/assets/revolute/demo/4.mp4"
      className='aspect w-full h-full'

    />,
  ];



  return (
    <UI.BodyContainer
      navColor="#121212"
      backgroundColor="#000000"
      logoColor='#ded2b4ff'
      hoverShadowColor='rgba(222, 210, 180, 0.8)'

    >






      <div className="flex flex-col md:flex-row justify-between items-center gap-6 outline p-10 " style={{ marginLeft: 'auto',  marginRight: 'auto',  marginTop: '3em',maxWidth: '100em' }}>
        <div className="text-left w-full ">
          <div className="text-6xl  font-semibold " style={{color: '#f4f4f4'}}>Some Heading. </div>
          <span className="text-xl " style={{color: '#d8d8d8'}}>This is some text content. It will appear on the left side of the screen on larger devices.</span> 
          
        </div>


        <Image
          src="https://images.unsplash.com/photo-1615118265620-d8decf628275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80"
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg w-full"
        />

      </div>



      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >
       


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


     

        <UI.HVideoScroll >
          {videoSlides}
        </UI.HVideoScroll>





    </UI.BodyContainer>
  );
}
