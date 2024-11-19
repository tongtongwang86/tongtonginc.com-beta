// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  text-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to My Next.js App</h1>
      <p className="mb-4">Navigate to different pages:</p>
      <div className="space-x-4">
        <Link href="/page1" className="text-blue-500 hover:underline">Page 1</Link>
        <Link href="/page2" className="text-blue-500 hover:underline">Page 2</Link>
        <Link href="/page3" className="text-blue-500 hover:underline">Page 3</Link>
        <Link href="/revolute" className="text-blue-500 hover:underline">Revolute page</Link>
      </div>
    </main>
  );
}
