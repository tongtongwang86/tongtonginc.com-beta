// app/page1/page.tsx
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import Image from "next/image";
import React from 'react'; // Add this import


export default async function revolute() {

  const videoSlides =  [
    <div className='flex flex-col items-center'
      key="1">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/revolute/demo/1_Small.webp"
        src="/assets/revolute/demo/1.mp4"
        className='aspect w-full h-full' />
      <div className='p-3'>Changing brush size in Blender</div> </div>
    ,
    <div className='flex flex-col items-center'
      key="2">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/revolute/demo/2_Small.webp"
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
        poster="/assets/revolute/demo/3_Small.webp"
        src="/assets/revolute/demo/3.mp4"
        className='aspect w-full h-full' />
      <div className='p-3'>Davinci Resolve Timeline Zoom</div> </div>
    ,
    <div className='flex flex-col items-center'
      key="4">
      <video
        autoPlay
        loop
        muted
        playsInline

        poster="/assets/revolute/demo/4_Small.webp"
        src="/assets/revolute/demo/4.mp4"
        className='aspect w-full h-full' />
      <div className='p-3'>Scroll wheel pick up in games</div> </div>
    ,
  ]

  const itemSlides = [


    <div className='flex flex-col items-center'
      key="1">
      <div className='p-5 text-2xl'>MX-Mechanical Key attachment</div>
      <Image
        src='/assets/revolute/accessories/key.webp'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="3">
      <div className='p-5 text-2xl'>Adhesive / Magnetic attachments</div>
      <Image
        src='/assets/revolute/accessories/adhesive.webp'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Phone attachment</div>
      <Image
        src='/assets/revolute/accessories/phone.webp'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,


  ]

  const configurationSlide = [
    <div className='flex flex-col items-center'
      key="1">
      <div className='py-5 text-2xl'>Keyboard keys</div>
      <Image
        src='/assets/revolute/configurator/keys.webp'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,
    <div className='flex flex-col items-center'
      key="2">
      <div className='py-5 text-2xl'>Changing Scrolling Sensitivity</div>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/revolute/configurator/scroll.webp"
        src="/assets/revolute/configurator/scroll.mp4"
        className='aspect w-full h-full'
        style={{ aspectRatio: "1080/800" }} />


    </div>,

    <div className='flex flex-col items-center'
      key="3">
      <div className='py-5 text-2xl'>Consumer Control</div>
      <Image
        src='/assets/revolute/configurator/consumer.webp'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,

    <div className='flex flex-col items-center'
      key="4">
      <div className='py-5 text-2xl'>Mouse</div>
      <Image
        src='/assets/revolute/configurator/mouse.webp'
        alt="outside"
        width={400}
        height={100}
        className="rounded-lg w-full"
      />
    </div>,
    <div className='flex flex-col items-center'
      key="5">
      <div className='py-5 text-2xl'>Surface dial</div>
      <Image
        src='/assets/revolute/configurator/dial.webp'
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

      <div className="relative " style={{ marginTop: '-4em' }}>
        <div className='w-full text-[#fff2ea] flex justify-center absolute z-1'>


          {/* <svg viewBox="0 0 43 15" className="w-full max-w-[55rem] h-full drop-shadow-revolute">
            <text x="50%" y="50%" textAnchor="middle" fontFamily="'Helvetica', sans-serif" alignmentBaseline="middle" fontSize="7" lengthAdjust="spacingAndGlyphs" fill="#fff2ea">
              Revolute
            </text>
          </svg> */}

        </div>

        <UI.Hero />

      </div>

      {/* grey */}



      <div className=' w-full bg-[#1a1a1a] text-white py-1'>
        <div className="text-left w-full p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '3em', maxWidth: '100em' }}>
          <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Control at your fingertips. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Revolute is a customizable jog wheel attachment that simplifies computer workflows.</span>

        </div>

        <div className="relative w-full mx-auto">
          <UI.HVideoScroll >
            {videoSlides}
          </UI.HVideoScroll>
        </div>


      </div>


      {/* not gray */}
      <div className="text-left w-full p-10  " style={{ marginLeft: 'auto', marginRight: 'auto', paddingTop: '3em', maxWidth: '100em' }}>
        <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>See Revolute in 3D. </div>
        <div className="w-full h-fit flex flex-col justify-center ">
          <UI.ARButton usdzFile='/assets/revolute/models/revolute.usdz' />

          <div className='flex w-full justify-center  h-[1/2vh] overflow-hidden' >


            <UI.ThreeCanvas />
          </div>



        </div>

      </div>




      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '-5em', maxWidth: '100em' }}>

        <UI.ScrollFade className="text-left flex-shrink basis-3/6">
          <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Design. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>3D printed outer shell houses an Ultra compact, custom logic board slightly bigger than a coin-cell battery. This makes revolute extremely versions, allowing you to easily carry on the go.</span>

        </UI.ScrollFade>


        <Image
          src='/assets/revolute/poster/design.webp'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg flex-grow basis-4/6"
        />

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>

        <Image
          src='/assets/revolute/poster/connectivity.webp'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg w-full"
        />


        <UI.ScrollFade className="text-left w-full ">
          <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Connectivity. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Connect wirelessly to your device through Bluetooth Low Energy, works on any device with bluetooth.</span>

        </UI.ScrollFade>

      </div>






      {/* grey again */}

      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >





        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



          <UI.ScrollFade className="text-left w-full ">
            <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Accessories. </div>
          </UI.ScrollFade>

        </div>


        <UI.ScrollFade>
          <UI.HVideoScroll >
            {itemSlides}
          </UI.HVideoScroll>
        </UI.ScrollFade>





        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



          <UI.ScrollFade className="text-left w-full ">
            <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Revo-pod. </div>
            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Carrying case for revolute that recharges its battery. Revo-pod has multiple compartments to store your Revolute Accessories.</span>

          </UI.ScrollFade>

          <Image
            src='/assets/revolute/accessories/pod.webp'
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
          src='/assets/revolute/configurator/configurator.webp'
          alt="outside"
          width={400}
          height={500}
          className="rounded-lg w-full"
        />


        <UI.ScrollFade className="text-left w-full ">
          <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Revolute Configurator App. </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Available for IOS, MacOS,and Windows. Revolute configurator lets you define wheel sensitivity, deadzone and actions for scroll, Wirelessly. Configurations saved on-board Revolute, allowing you to use revolute even on devices that dont support Revolute Configurator. </span>

        </UI.ScrollFade>
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

          <UI.ScrollFade className="text-left flex-shrink basis-3/6">
            <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Magnetic Rotary Encoder </div>
            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>A Non-Contact magnetic encoder measures the absolute position of Revolute to sub-degree accuracy. Combined with a bearing, physical wear would be significantly reduced, revolute can widthstand whatever life throws at it.</span>

          </UI.ScrollFade>


          <Image
            src='/assets/revolute/poster/magneticenc.webp'
            alt="outside"
            width={400}
            height={500}
            className="rounded-lg flex-grow basis-4/6"
          />




        </div>



        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>

          <Image
            src='/assets/revolute/poster/magtick.webp'
            alt="outside"
            width={400}
            height={500}
            className="rounded-lg flex-grow basis-4/6"
          />


          <UI.ScrollFade className="text-left flex-shrink basis-3/6">
            <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Optional Mag-Ticks addon  </div>
            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>A ring of 36 Precision-Placed Magnets provides a incremental ident feel, which allows for controlled Single Stepping</span>

          </UI.ScrollFade>

        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



        <UI.ScrollFade className="text-left flex-shrink basis-3/6">
          <div className="text-5xl font-sans font-semibold " style={{ color: '#f4f4f4' }}>Developer friendly</div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Revolute and its components are still under development. With support for developer tools like nRF Connect, Zephyr RTOS, custom debugger boards, and open-source hardware and software files, the system welcomes contributions from all developers.</span>

        </UI.ScrollFade>

        <div className="rounded-lg flex-grow basis-4/6 flex justify-evenly">

          <a href="https://github.com/tongtongwang86/Revolute" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300'>

            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1000 1000">
              <g style={{ display: 'inline', opacity: 1 }}>
                <path
                  d="M500.414 6C223.698 6 0 231.347 0 510.132C0 732.98 143.331 921.616 342.169 988.38C367.029 993.399 376.135 977.532 376.135 964.186C376.135 952.498 375.315 912.438 375.315 870.697C236.112 900.75 207.125 810.601 207.125 810.601C184.754 752.175 151.607 737.159 151.607 737.159C106.046 706.276 154.926 706.276 154.926 706.276C205.465 709.615 231.984 758.024 231.984 758.024C276.716 834.806 348.796 813.111 377.794 799.754C381.932 767.202 395.197 744.667 409.281 732.15C298.257 720.463 181.445 677.063 181.445 483.418C181.445 428.331 201.317 383.262 232.804 348.21C227.836 335.693 210.433 283.935 237.782 214.661C237.782 214.661 280.035 201.304 375.305 266.409C416.094 255.374 458.159 249.76 500.414 249.713C542.666 249.713 585.738 255.562 625.512 266.409C720.793 201.304 763.045 214.661 763.045 214.661C790.394 283.935 772.981 335.693 768.013 348.21C800.33 383.262 819.382 428.331 819.382 483.418C819.382 677.063 702.57 719.623 590.716 732.15C608.949 748.006 624.682 778.049 624.682 825.628C624.682 893.232 623.863 947.489 623.863 964.175C623.863 977.532 632.979 993.399 657.829 988.39C856.667 921.605 999.998 732.98 999.998 510.132C1000.82 231.347 776.3 6 500.414 6Z"
                  style={{
                    display: 'inline',
                    opacity: 1,
                    fill: '#FFFFFF', // Use a contrasting color
                    stroke: '#FFFFFF',
                    strokeWidth: 1,
                    strokeOpacity: 1,
                  }}
                />
              </g>
            </svg>
          </a>

          
  <svg xmlns="http://www.w3.org/2000/svg" className='blur-sm text-[#6f6f6f]' width="100" height="100" viewBox="0 0 1 1.3" >
    <g>
      <rect height="1.22177" width="1.10107" x="0" y="0" ></rect>
      <path d="M0.949707 0.291302L0.949707 1.01738C0.949707 1.11943 0.898926 1.17021 0.79834 1.17021L0.457106 1.17021C0.540246 1.15857 0.626631 1.14131 0.723145 1.11454C0.822266 1.08622 0.867676 1.02275 0.867676 0.908978L0.867676 0.194134C0.867676 0.177568 0.866414 0.161938 0.863832 0.147419C0.920951 0.16647 0.949707 0.214508 0.949707 0.291302Z" fill="#6f6f6f" ></path>
      <path d="M0.0664062 1.00224C0.0664062 1.0872 0.119141 1.13115 0.209473 1.12578C0.373535 1.11699 0.518555 1.10185 0.705078 1.05058C0.774414 1.03105 0.80127 0.994427 0.80127 0.908978L0.80127 0.194134C0.80127 0.0969665 0.749023 0.0496032 0.655273 0.0715759C0.518555 0.102338 0.373535 0.126752 0.197754 0.137006C0.118652 0.141888 0.0664062 0.18681 0.0664062 0.275189ZM0.14502 0.98808L0.14502 0.273236C0.14502 0.23222 0.17041 0.216107 0.207031 0.214154C0.375 0.205365 0.51709 0.180951 0.650879 0.150677C0.696289 0.140424 0.722656 0.163861 0.722656 0.207806L0.722656 0.906049C0.722656 0.95097 0.70752 0.97099 0.669922 0.980756C0.51709 1.02324 0.375 1.03886 0.212891 1.04716C0.17041 1.04911 0.14502 1.02763 0.14502 0.98808Z" fill="#6f6f6f" ></path>
      <path d="M0.252441 0.387006C0.390625 0.378217 0.501953 0.359174 0.615723 0.333783C0.638184 0.3289 0.643555 0.31767 0.643555 0.303998C0.643555 0.288861 0.631836 0.275677 0.610352 0.280072C0.501953 0.303998 0.390625 0.323529 0.252441 0.332318C0.23291 0.333783 0.224121 0.345502 0.224121 0.360638C0.224121 0.376263 0.23584 0.387982 0.252441 0.387006ZM0.252441 0.544232C0.390625 0.535443 0.501953 0.515912 0.615723 0.491009C0.638184 0.486127 0.643555 0.474896 0.643555 0.461224C0.643555 0.446088 0.631836 0.432904 0.610352 0.437299C0.501953 0.461224 0.390625 0.480756 0.252441 0.489545C0.23291 0.491009 0.224121 0.502728 0.224121 0.517377C0.224121 0.533002 0.23584 0.545209 0.252441 0.544232ZM0.252441 0.701459C0.390625 0.69267 0.501953 0.673138 0.615723 0.648236C0.638184 0.643353 0.643555 0.632123 0.643555 0.618451C0.643555 0.603314 0.631836 0.590131 0.610352 0.594525C0.501953 0.618451 0.390625 0.637982 0.252441 0.646771C0.23291 0.648236 0.224121 0.659955 0.224121 0.674603C0.224121 0.690228 0.23584 0.702435 0.252441 0.701459ZM0.252441 0.858197C0.33252 0.853802 0.385742 0.84599 0.438477 0.837689C0.45459 0.834759 0.463379 0.822064 0.463379 0.809369C0.463379 0.79472 0.45166 0.78056 0.429688 0.784467C0.382812 0.791791 0.331055 0.799115 0.252441 0.803509C0.23291 0.804974 0.224121 0.816693 0.224121 0.831342C0.224121 0.846967 0.23584 0.859174 0.252441 0.858197Z" fill="#6f6f6f" ></path>
    </g>
  </svg>






        </div>




      </div>





    </UI.BodyContainer>
  );
}