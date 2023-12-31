import './globals.css'
import { Inter } from 'next/font/google'
import {AuthProvider} from "@/app/Providers"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Footrip',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          </AuthProvider>
        </body>
    </html>
  )
}
