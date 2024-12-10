"use client";
import React, { useState } from 'react';
import * as UI from '@/components';
import Link from 'next/link';

const Lesson2 = () => {
  

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
  <div className='max-w-full'>
   <h1 className="text-5xl font-bold mb-8 mx-5"> 3D Art making </h1>


    <div className='flex flex-row item-center  max-w-full flex-wrap'>


    <Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="https://sculptgl.tongtonginc.com">SculptGL</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="/eca/3dart/teachermodel">Models</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="https://www.tinkercad.com/joinclass/XP55X7CJJ">Tinkercad login</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="/eca/3dart/lesson2">Lesson2</Link>



   </div>



   <br>
   </br>
   <br>
   </br>
   <br>
   </br>
   <br>
   </br>
      <h1 className="text-5xl font-bold mb-8 mx-5"> Electronics Engineering ECA </h1>


      <div className='flex flex-row item-center  max-w-full flex-wrap'>

      <Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="/eca/electronics/lesson2/">Lesson 2</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="/eca/electronics/lesson3/">Lesson 3</Link>

<Link className="px-5 py-3 m-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href="/eca/electronics/lesson4/">Lesson 4</Link>


     
      </div>
      </div>
    </UI.BodyContainer>
  );
};

export default Lesson2;
