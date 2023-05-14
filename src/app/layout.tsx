import './globals.css'
import Navbar from './components/Navbar'
import { Ubuntu_Mono } from 'next/font/google'
import Providers from './components/Providers'
import { cn } from '@/src/app/lib/utils'

const ubuntuMono = Ubuntu_Mono({ weight: '400', subsets: ['latin-ext'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ubuntuMono.className}>
      <body className={cn('bg-background dark:bg-backgroundDark transition duration-300 ease-in-out')}>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
