// app/page1/page.tsx


import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';



export default function revolute() {
  
  return (
    <UI.BodyContainer
  navColor="var(--background)"
  navDropoffColor="var(--navgradient)"
  backgroundColor="var(--background2)"
  logoColor='var(--logocolor)'
  hoverShadowColor='var(--logoHover)'
>
<h1 className="text-3xl font-bold mb-8">Lesson2 Resources</h1>

<UI.HStack>

  <Link href="https://www.arduino.cc/en/software" className='mb-8 underline ml-10'>
  Arduino IDE Download
  </Link>

  <Link href="https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER_MAC.ZIP" className='mb-8 underline mx-10'>
  CH340 Driver (Download if arduino fails to upload)
  </Link>

  <Link href="https://support.arduino.cc/hc/en-us/articles/4733418441116-Upload-a-sketch-in-Arduino-IDE" className='mb-8 underline mr-10'>
  Uploading code to arduino tutorial
  </Link>

  
</UI.HStack>

<h1 className="text-3xl font-bold ">Lesson PDF</h1>

  <iframe src='/assets/eca/electronics/lesson2.pdf' className='w-full p-10 h-dvh '/>




</UI.BodyContainer>
  );
}
