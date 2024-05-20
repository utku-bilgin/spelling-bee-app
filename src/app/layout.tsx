import {Mulish} from '@next/font/google'
import type { Metadata } from "next";

import '@/styles/reset.css'
import '@/styles/global.css'

const mulishFontFamily = Mulish({ subsets: ['latin']});

export const metadata: Metadata = {
  title: "Spelling Bee Game",
  description: "Form Words From Letters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={mulishFontFamily.className}>
      <body>{children}</body>
    </html>
  );
}
