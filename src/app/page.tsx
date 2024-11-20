// app/page.tsx
import * as UI from '@/components';
import Link from 'next/link';

export default function Home() {
  return (
    <UI.BodyContainer
    navColor="var(--background)"
    navDropoffColor="var(--navgradient)"
    backgroundColor="var(--background2)"
    logoColor='var(--logocolor)'
    hoverShadowColor='var(--logoHover)'
  >
      <p className="mb-4">Navigate to different pages:</p>
      <div className="space-x-4">
        <Link href="/page1" className="text-blue-500 hover:underline">Page 1</Link>
        <Link href="/page2" className="text-blue-500 hover:underline">Page 2</Link>
        <Link href="/page3" className="text-blue-500 hover:underline">Page 3</Link>
        <Link href="/revolute" className="text-blue-500 hover:underline">Revolute page</Link>
        <Link href="/electronics/lesson2" className="text-blue-500 hover:underline">eca</Link>
      </div>

    </UI.BodyContainer>

  );
}
