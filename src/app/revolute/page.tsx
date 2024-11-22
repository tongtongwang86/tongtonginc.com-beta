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
<h1>
hi

</h1>
</UI.BodyContainer>
  );
}
