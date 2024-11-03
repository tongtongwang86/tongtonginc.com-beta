// app/page3/page.tsx
import Link from 'next/link';
import Image from 'next/image';

import getBase64 from '@/lib/getLocalBase64'

export default async function Page3() {

  const myBlurDataUrl = await getBase64('http://localhost:3000/shrek.jpg')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-4">Page 3</h1>
      <p className="mb-4">This is the content of Page 3 with an image.</p>
      
      {/* Use the direct path for images located in the public directory */}
      <Image
        src='/shrek.jpg'  // Use the relative path from the public folder
        width={100}
        height={100}
        alt="A descriptive alt text for the image"
        className="rounded-lg shadow-md"
        placeholder='blur'
        blurDataURL={myBlurDataUrl}
        priority
      />

      <Link href="/" className="text-blue-500 hover:underline mt-8">
        Back to Home
      </Link>
    </main>
  );
}
