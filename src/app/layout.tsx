import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const profBens = localFont({
  src: "./fonts/profbens-eaome.otf",
  variable: "--font-prof-bens",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tongtonginc.com",
  description: "Tongtong.inc website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${profBens.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
