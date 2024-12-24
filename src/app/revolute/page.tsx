// app/page1/page.tsx
"use client";
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible"; // Adjust the path as needed



export default function Revolute() {

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);

  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);


  const ref6 = useRef<HTMLDivElement>(null);
  const isVisible6 = useIsVisible(ref6);

  const ref7 = useRef<HTMLDivElement>(null);
  const isVisible7 = useIsVisible(ref7);


  const ref8 = useRef<HTMLDivElement>(null);
  const isVisible8 = useIsVisible(ref8);


  const ref9 = useRef<HTMLDivElement>(null);
  const isVisible9 = useIsVisible(ref9);

  const videoSlides = [
    <div className='flex flex-col items-center'
      key="1">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/revolute/demo/1_Small.png"
        src="/assets/revolute/demo/1.mp4"
        className='aspect w-full h-full' />
      <div className='py-3'>Changing brush size in Blender</div> </div>
    ,
    <div className='flex flex-col items-center'
      key="2">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/revolute/demo/2_Small.png"
        src="/assets/revolute/demo/2.mp4"
        className='aspect w-full h-full' />
      <div className='py-3'>Rotating items in KiCad</div> </div>
    ,
    <div className='flex flex-col items-center'
      key="3">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/revolute/demo/3_Small.png"
        src="/assets/revolute/demo/3.mp4"
        className='aspect w-full h-full' />
      <div className='py-3'>Davinci Resolve Timeline Zoom</div> </div>
    ,
    <div className='flex flex-col items-center'
      key="4">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/revolute/demo/4_Small.png"
        src="/assets/revolute/demo/4.mp4"
        className='aspect w-full h-full' />
      <div className='py-3'>Scroll wheel pick up in games</div> </div>
    ,
  ];

  const itemSlides = [


    <div className='flex flex-col items-center'
      key="1">
      <div className='py-5 text-2xl'>MX-Mechanical Key attachment</div>
      <Image
        src='/assets/revolute/accessories/key.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="3">
      <div className='py-5 text-2xl'>Adhesive / Magnetic attachments</div>
      <Image
        src='/assets/revolute/accessories/adhesive.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Phone attachments</div>
      <Image
        src='/assets/revolute/accessories/phone.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,


  ]

  const configurationSlide = [
    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Keyboard keys</div>
      <Image
        src='/assets/revolute/configurator/keys.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,
    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>High resolution scrolling</div>
      <Image
        src='/assets/revolute/configurator/scroll.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Consumer Control</div>
      <Image
        src='/assets/revolute/configurator/consumer.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Gamepad</div>
      <Image
        src='/assets/revolute/configurator/gamepad.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,
    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Surface dial</div>
      <Image
        src='/assets/revolute/configurator/dial.png'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,
  ];





  return (
    <UI.BodyContainer
      navColor="#121212"
      backgroundColor="#000000"
      logoColor='#ded2b4ff'
      hoverShadowColor='rgba(222, 210, 180, 0.8)'

    >

      <div className="relative ">
        <div className='w-full text-[#fff2ea] flex justify-center absolute z-1 top-[10%]'>


          {/* <svg viewBox="0 0 43 15" className="w-full max-w-[55rem] h-full drop-shadow-revolute">
            <text x="50%" y="50%" textAnchor="middle" fontFamily="'Helvetica', sans-serif" alignmentBaseline="middle" fontSize="7" lengthAdjust="spacingAndGlyphs" fill="#fff2ea">
              Revolute
            </text>
          </svg> */}

        </div>

        <video
          autoPlay
          muted
          playsInline
          poster="/assets/revolute/poster/hero.png"
          src="/assets/revolute/poster/hero.mp4"
          className='w-full max-w-4xl mx-auto mt-8 '
        />
      </div>

      {/* grey */}



      <div className=' w-full bg-[#1a1a1a] text-white'>

        <div
          ref={ref1}


          className={`text-left w-full p-10 transition-all ease-out transform ${isVisible1
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}

          style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '3em', maxWidth: '100em', transitionDuration: '1500ms' }}>
          <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Control at your fingertips. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Revolute is a customizable jog wheel attachment that simplifies computer workflows.</span>

        </div>

        <div className="relative w-full mx-auto">
          <UI.HVideoScroll >
            {videoSlides}
          </UI.HVideoScroll>
        </div>

      </div>


      {/* not gray */}


      <div ref={ref2}


        className={`flex flex-col md:flex-row justify-between items-center gap-6  p-10 transition-all ease-out transform ${isVisible2
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
          }`}
        style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em', transitionDuration: '1500ms' }}>
        <div className="text-left flex-shrink basis-3/6">
          <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Design. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>3D printed outer shell houses an Ultra compact, custom logic board slightly bigger than a coin-cell battery. This makes revolute extremely versions, allowing you to easily carry on the go.</span>

        </div>


        <Image
          src='/assets/revolute/poster/design.png'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg flex-grow basis-4/6"
        />

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>

        <Image
          src='/assets/revolute/poster/connectivity.png'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg w-full"
        />


        <div ref={ref3}

          className={`text-left w-full transition-all ease-out transform ${isVisible3
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}

          style={{ transitionDuration: '1500ms' }}
        >
          <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Connectivity. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Connect wirelessly to your device through Bluetooth Low Energy, works on any device with bluetooth.</span>

        </div>

      </div>






      {/* grey again */}

      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >





        <div
          ref={ref4}
          className={`flex flex-col md:flex-row justify-between items-center gap-6  p-10 transition-all ease-out transform ${isVisible4
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
          style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em', transitionDuration: '1500ms' }}>



          <div className="text-left w-full ">
            <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Accessories. </div>
          </div>

        </div>
        <UI.HVideoScroll >
          {itemSlides}
        </UI.HVideoScroll>






        <div
          ref={ref5}
          className={`flex flex-col md:flex-row justify-between items-center gap-6  p-10 transition-all ease-out transform ${isVisible5
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '3em',
            maxWidth: '100em',
            transitionDuration: '1500ms' // Or add it directly in style
          }}>


          <div className="text-left w-full ">
            <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Revo-pod. </div>
            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Carrying case for revolute that recharges its battery. Revo-pod has multiple compartments to store your Revolute Accessories.</span>

          </div>

          <Image
            src='/assets/revolute/accessories/phone.png'
            alt="outside"
            width={400}
            height={500}
            className="rounded-lg w-full"
          />



        </div>

      </div>




      {/* not grey */}



      <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>
        <Image
          src='/assets/revolute/configurator/configurator.png'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg w-full"
        />


        <div ref={ref6}

          className={`text-left w-full transition-all ease-out transform ${isVisible6
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}

          style={{ transitionDuration: '1500ms' }}
        >
          <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Revolute Configurator App. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Available for IOS, MacOS,and Windows. Revolute configurator lets you define wheel sensitivity, deadzone and actions for scroll, Wirelessly. Configurations saved on-board Revolute, allowing you to use revolute even on devices that dont support Revolute Configurator. </span>

        </div>
      </div>
      <div
        style={{ color: '#f4f4f4' }}>
        <UI.HVideoScroll >
          {configurationSlide}
        </UI.HVideoScroll>
      </div>



      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >


        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>


          <div ref={ref7}

            className={`text-left flex-shrink basis-3/6 transition-all ease-out transform ${isVisible7
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}

            style={{ transitionDuration: '1500ms' }}
          >

            <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Magnetic Rotary Encoder </div>
            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>A Non-Contact magnetic encoder measures the absolute position of Revolute to sub-degree accuracy. Combined with a bearing, physical wear would be significantly reduced, revolute can widthstand whatever life throws at it.</span>

          </div>


          <Image
            src='/assets/revolute/poster/magneticenc.png'
            alt="outside"
            width={400}
            height={500}
            className="rounded-lg flex-grow basis-4/6"
          />




        </div>



        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>

          <Image
            src='/assets/revolute/poster/magtick.png'
            alt="outside"
            width={400}
            height={500}
            className="rounded-lg flex-grow basis-4/6"
          />



          <div ref={ref8}

            className={`text-left flex-shrink basis-3/6 transition-all ease-out transform ${isVisible8
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}

            style={{ transitionDuration: '1500ms' }}
          >
            <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Optional Mag-Ticks addon  </div>
            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>A ring of 36 Precision-Placed Magnets provides a incremental ident feel, which allows for controlled Single Stepping</span>

          </div>

        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



      <div ref={ref9}

className={`text-left flex-shrink basis-3/6 transition-all ease-out transform ${isVisible9
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10"
  }`}

style={{ transitionDuration: '1500ms' }}
>
          <div className="text-6xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Developer friendly</div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Revolute is open source with all hardware and firmware files hosted on Github.Revolute uses the nRF Connect SDK with built in Zephyr RTOS. There is also a custom made debugger module that elegantly attatches onto the revolute logic board.</span>

        </div>


        <Image
          src='/assets/revolute/poster/developer.png'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg flex-grow basis-4/6"
        />



      </div>




    </UI.BodyContainer>
  );
}
