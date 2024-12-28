// app/page1/page.tsx
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';
import Image from "next/image";
import React from 'react'; // Add this import


export default async function revolute() {

  const videoSlides = [
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
          <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Control at your fingertips. </div>


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
        <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>See Revolute in 3D. </div>

        <div className="w-full h-fit flex flex-col justify-center ">
          <UI.ARButton usdzFile='/assets/revolute/models/revolute.usdz' />

          <div className='flex w-full justify-center  h-[1/2vh] overflow-hidden' >


            <UI.ThreeCanvas />
          </div>



        </div>

      </div>




      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '-5em', maxWidth: '100em' }}>

        <UI.ScrollFade className="text-left flex-shrink basis-3/6">
          <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Design </div>

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
          <div className="text-5xl font-sans font-semibold break-words" style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Connectivity </div>
          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Connect wirelessly to your device through Bluetooth Low Energy, works on any device with bluetooth.</span>

        </UI.ScrollFade>

      </div>






      {/* grey again */}

      <div
        className=' w-full bg-[#1a1a1a] text-white '
      >





        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



          <UI.ScrollFade className="text-left w-full ">
            <div className="text-5xl font-sans font-semibold break-words" style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Accessories </div>
          </UI.ScrollFade>

        </div>


        <UI.ScrollFade>
          <UI.HVideoScroll >
            {itemSlides}
          </UI.HVideoScroll>
        </UI.ScrollFade>





        <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



          <UI.ScrollFade className="text-left w-full ">
            <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Revo-pod. </div>


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
          <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Revolute Configurator App.</div>

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
            <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Magnetic Rotary Encoder</div>

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
            <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Optional Mag-Ticks addon</div>

            <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>A ring of 36 Precision-Placed Magnets provides a incremental ident feel, which allows for controlled Single Stepping</span>

          </UI.ScrollFade>

        </div>
      </div>



      <div className="flex flex-col md:flex-row justify-between items-center gap-6  p-10 " style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '3em', maxWidth: '100em' }}>



        <UI.ScrollFade className="text-left flex-shrink basis-3/6">
          <div className="text-5xl font-sans font-semibold " style={{ fontSize: "calc(1.5em + 2vw)", color: '#f4f4f4' }}>Developer friendly</div>

          <span className="text-xl font-sans" style={{ color: '#d8d8d8' }}>Revolute and its components are still under development. With support for developer tools like nRF Connect, Zephyr RTOS, custom debugger boards, and open-source hardware and software files, the system welcomes contributions from all developers. If you have any questions, please feel free to contact us via Email at tongtong@tongtonginc.com </span>

        </UI.ScrollFade>

        <div className="rounded-lg flex-grow basis-4/6 flex justify-evenly flex-wrap" style={{ maxWidth: '100%' }}>


          <a href="https://github.com/tongtongwang86/Revolute" target="_blank" rel="noopener noreferrer" className='hover:scale-110 transition-all duration-300 flex flex-col items-center '>

            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="-50 -60 1100 1100">
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

            <p className='p-3 text-lg text-[#ededed]'>Github</p>
          </a>

            <a href="mailto:tongtong@tongtonginc.com" className='hover:scale-110 transition-all duration-300 flex flex-col items-center '> 

            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1.2 .8">
            <g>
  <rect height="0.842285" opacity="0" width="1.26318" x="0" y="0"/>
  <path d="M0.15332 0.842285L1.03955 0.842285C1.12695 0.842285 1.17822 0.791504 1.17822 0.690918L1.17822 0.151855C1.17822 0.0512695 1.12646 0.000488281 1.0249 0.000488281L0.138672 0.000488281C0.0512695 0.000488281 0 0.0512695 0 0.151855L0 0.690918C0 0.791504 0.0517578 0.842285 0.15332 0.842285ZM0.150391 0.767578C0.102051 0.767578 0.074707 0.740723 0.074707 0.69043L0.074707 0.151367C0.074707 0.101562 0.102051 0.0751953 0.150391 0.0751953L1.02734 0.0751953C1.07568 0.0751953 1.10352 0.101562 1.10352 0.151855L1.10352 0.690918C1.10352 0.740723 1.07568 0.767578 1.02734 0.767578ZM0.588867 0.549805C0.620117 0.549805 0.650391 0.538086 0.678223 0.512695L1.1377 0.0991211L1.08691 0.0478516L0.635742 0.45459C0.620605 0.468262 0.60498 0.474609 0.588867 0.474609C0.572754 0.474609 0.557129 0.468262 0.541992 0.45459L0.0908203 0.0478516L0.0400391 0.0991211L0.499512 0.512695C0.527344 0.538086 0.557617 0.549805 0.588867 0.549805ZM0.0981445 0.779785L0.444824 0.432617L0.394043 0.381836L0.0473633 0.728516ZM1.08057 0.780273L1.13135 0.729004L0.78418 0.381836L0.73291 0.432617Z" fill="white" />
 </g>
            </svg>

            <p className='p-3 text-lg text-[#ededed]'>Email</p>
          </a>


          <div className='hover:scale-[0.96] transition-all duration-300 flex flex-col items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" className='blur-sm text-[#6f6f6f]' width="100" height="100" viewBox="0 0 1 1.3" >
              <g>
                <rect height="1.22177" width="1.10107" x="0" y="0" ></rect>
                <path d="M0.949707 0.291302L0.949707 1.01738C0.949707 1.11943 0.898926 1.17021 0.79834 1.17021L0.457106 1.17021C0.540246 1.15857 0.626631 1.14131 0.723145 1.11454C0.822266 1.08622 0.867676 1.02275 0.867676 0.908978L0.867676 0.194134C0.867676 0.177568 0.866414 0.161938 0.863832 0.147419C0.920951 0.16647 0.949707 0.214508 0.949707 0.291302Z" fill="#6f6f6f" ></path>
                <path d="M0.0664062 1.00224C0.0664062 1.0872 0.119141 1.13115 0.209473 1.12578C0.373535 1.11699 0.518555 1.10185 0.705078 1.05058C0.774414 1.03105 0.80127 0.994427 0.80127 0.908978L0.80127 0.194134C0.80127 0.0969665 0.749023 0.0496032 0.655273 0.0715759C0.518555 0.102338 0.373535 0.126752 0.197754 0.137006C0.118652 0.141888 0.0664062 0.18681 0.0664062 0.275189ZM0.14502 0.98808L0.14502 0.273236C0.14502 0.23222 0.17041 0.216107 0.207031 0.214154C0.375 0.205365 0.51709 0.180951 0.650879 0.150677C0.696289 0.140424 0.722656 0.163861 0.722656 0.207806L0.722656 0.906049C0.722656 0.95097 0.70752 0.97099 0.669922 0.980756C0.51709 1.02324 0.375 1.03886 0.212891 1.04716C0.17041 1.04911 0.14502 1.02763 0.14502 0.98808Z" fill="#6f6f6f" ></path>
                <path d="M0.252441 0.387006C0.390625 0.378217 0.501953 0.359174 0.615723 0.333783C0.638184 0.3289 0.643555 0.31767 0.643555 0.303998C0.643555 0.288861 0.631836 0.275677 0.610352 0.280072C0.501953 0.303998 0.390625 0.323529 0.252441 0.332318C0.23291 0.333783 0.224121 0.345502 0.224121 0.360638C0.224121 0.376263 0.23584 0.387982 0.252441 0.387006ZM0.252441 0.544232C0.390625 0.535443 0.501953 0.515912 0.615723 0.491009C0.638184 0.486127 0.643555 0.474896 0.643555 0.461224C0.643555 0.446088 0.631836 0.432904 0.610352 0.437299C0.501953 0.461224 0.390625 0.480756 0.252441 0.489545C0.23291 0.491009 0.224121 0.502728 0.224121 0.517377C0.224121 0.533002 0.23584 0.545209 0.252441 0.544232ZM0.252441 0.701459C0.390625 0.69267 0.501953 0.673138 0.615723 0.648236C0.638184 0.643353 0.643555 0.632123 0.643555 0.618451C0.643555 0.603314 0.631836 0.590131 0.610352 0.594525C0.501953 0.618451 0.390625 0.637982 0.252441 0.646771C0.23291 0.648236 0.224121 0.659955 0.224121 0.674603C0.224121 0.690228 0.23584 0.702435 0.252441 0.701459ZM0.252441 0.858197C0.33252 0.853802 0.385742 0.84599 0.438477 0.837689C0.45459 0.834759 0.463379 0.822064 0.463379 0.809369C0.463379 0.79472 0.45166 0.78056 0.429688 0.784467C0.382812 0.791791 0.331055 0.799115 0.252441 0.803509C0.23291 0.804974 0.224121 0.816693 0.224121 0.831342C0.224121 0.846967 0.23584 0.859174 0.252441 0.858197Z" fill="#6f6f6f" ></path>
              </g>
            </svg>
            <p className='p-3 text-lg text-[#6f6f6f]'>Docs</p>
          </div>

          <div className='hover:scale-[0.96] transition-all duration-300 flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className=' blur-sm text-[#6f6f6f]' width="100" height="100" viewBox="-.1 0 1.4 1.1" >
              <g>
                <rect height="0.962402" opacity="0" width="1.28418" x="0" y="0" />
                <path d="M0.969238 0.374512C1.00244 0.374512 1.02979 0.347168 1.02979 0.313965C1.02979 0.280273 1.00244 0.253418 0.969238 0.253418C0.935547 0.253418 0.908691 0.280273 0.908691 0.313965C0.908691 0.347168 0.935547 0.374512 0.969238 0.374512ZM0.15332 0.931152L1.0459 0.931152C1.14746 0.931152 1.19922 0.880371 1.19922 0.779785L1.19922 0.268555C1.19922 0.167969 1.14746 0.117676 1.0459 0.117676L0.90625 0.117676C0.867676 0.117676 0.855957 0.109863 0.833984 0.0854492L0.794922 0.0415039C0.770508 0.0146484 0.745605 0 0.695312 0L0.500488 0C0.450195 0 0.425293 0.0146484 0.400879 0.0415039L0.361816 0.0854492C0.339844 0.109375 0.327637 0.117676 0.289551 0.117676L0.15332 0.117676C0.0512695 0.117676 0 0.167969 0 0.268555L0 0.779785C0 0.880371 0.0512695 0.931152 0.15332 0.931152ZM0.154297 0.852539C0.106445 0.852539 0.0786133 0.82666 0.0786133 0.775879L0.0786133 0.272949C0.0786133 0.222168 0.106445 0.196289 0.154297 0.196289L0.309082 0.196289C0.353027 0.196289 0.376953 0.187988 0.401367 0.160645L0.439453 0.117676C0.467285 0.0864258 0.481934 0.0786133 0.524902 0.0786133L0.670898 0.0786133C0.713867 0.0786133 0.728516 0.0864258 0.756348 0.117676L0.794434 0.160645C0.818848 0.187988 0.842773 0.196289 0.886719 0.196289L1.04443 0.196289C1.09277 0.196289 1.12061 0.222168 1.12061 0.272949L1.12061 0.775879C1.12061 0.82666 1.09277 0.852539 1.04443 0.852539ZM0.599609 0.782227C0.74707 0.782227 0.865723 0.664062 0.865723 0.515137C0.865723 0.366699 0.747559 0.248535 0.599609 0.248535C0.45166 0.248535 0.333008 0.366699 0.333008 0.515137C0.333008 0.664062 0.45166 0.782227 0.599609 0.782227ZM0.599609 0.708008C0.493652 0.708008 0.406738 0.622559 0.406738 0.515137C0.406738 0.408203 0.493164 0.322266 0.599609 0.322266C0.706055 0.322266 0.791992 0.408203 0.791992 0.515137C0.791992 0.622559 0.706055 0.708008 0.599609 0.708008Z" fill="#6f6f6f" />
              </g>

            </svg>
            <p className='p-3 text-lg text-[#6f6f6f]'>DevLog</p>
          </div>




        </div>




      </div>





    </UI.BodyContainer>
  );
}