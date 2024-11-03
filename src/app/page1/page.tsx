// app/page1/page.tsx
import Link from 'next/link';

export default function Page1() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <h1 className="text-3xl font-bold mb-4">Page 1</h1>
      <p className="mb-4">This is the content of Page 1.</p>
      <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </main>
  );
}
