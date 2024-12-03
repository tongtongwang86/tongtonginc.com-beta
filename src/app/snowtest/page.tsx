// app/page1/page.tsx


import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';


export default function revolute() {



  return (

<UI.Snow
        snowflakeCount={200}        // Number of snowflakes
        speedMin={0.5}              // Minimum falling speed
        speedMax={1.5}              // Maximum falling speed
        windSpeedMin={-0.5}         // Minimum horizontal speed (wind)
        windSpeedMax={0.5}          // Maximum horizontal speed (wind)
        radiusMin={2}               // Minimum radius (size)
        radiusMax={4}               // Maximum radius (size)
      />

  );
}
