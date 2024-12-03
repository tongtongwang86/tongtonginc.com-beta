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
   
   <h1 className="text-6xl font-bold mb-8 "> 3D Art making </h1>

   <UI.HStack>


   <Link className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl " href="https://sculptgl.tongtonginc.com">SculptGL</Link>


   <Link className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl " href="/eca/3dart/teachermodel">Models</Link>



   </UI.HStack>



   <br>
   </br>
   <br>
   </br>
   <br>
   </br>
   <br>
   </br>
      <h1 className="text-6xl font-bold mb-8 "> Electronics Engineering ECA </h1>


      <UI.HStack>

      <Link className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl " href="/eca/electronics/lesson2/">Lesson 2</Link>

      <Link className="px-5 py-3 m-3 bg-slate-800 outline rounded-full font-bold underline text-2xl " href="/eca/electronics/lesson3/">Lesson 3</Link>


     
      </UI.HStack>

    </UI.BodyContainer>
  );
};

export default Lesson2;
