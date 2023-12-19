import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ['latin'], variable: '--nunito' })

export const metadata: Metadata = {
  title: 'Three App',
  description: 'A Three.js app built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${nunito.variable} text-white`}>{children}</body>
    </html>
  )
}
