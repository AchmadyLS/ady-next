import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'adynda.shop',
  description: 'Platform TOPUP termurah dan paling aman, AdyndaShop juga menyediakan platform komunitas untuk mabar dan mencari teman...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
