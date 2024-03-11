import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Noto_Sans_Lao } from "next/font/google";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Noto_Sans_Lao({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ITHQ File Store",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className=
          {inter.className}>
          <ToastContainer />
          {children}</body>
      </html>
    </Providers>
  );
}
