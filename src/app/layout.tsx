import "./globals.css";

import {Header} from '../components/header'
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rick e Morty',
  description: 'API Rick e Morty',
  openGraph:{
    title: 'API do Rick e Morty',
    description: 'API do Rick and Morty com Nexr JS',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1cm3tYrx9WdK1JB6IK6mRoOsDGU5VAt8xQ&s']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased`}>
      <body className="min-h-full flex flex-col">

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
