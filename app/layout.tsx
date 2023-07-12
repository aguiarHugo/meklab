import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Poppins, Open_Sans } from 'next/font/google'
import Footer from '@/components/Footer'

const roboto = Roboto({ 
  weight: ['400', '700'], 
  style: 'normal',
  subsets: ['latin'],
  display: 'swap' 
})

const openSans = Open_Sans({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap' 
})

const poppins = Poppins({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap' 
})

export const metadata: Metadata = {
  title: 'Meklab',
  description: 'Deixa a gente cuidar da sua água!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
        <body className={`${openSans.className} bg-dark-300 flex flex-col min-h-screen`}>
          <Navbar />
          {children}
          <Footer />
        </body>
    </html>
  )
}
