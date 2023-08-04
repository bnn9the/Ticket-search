import type { Metadata } from 'next'
import { TheHeader } from '@/components/TheHeader/TheHeader'
import { TheFooter } from '@/components/TheFooter/TheFooter'
import { StoreProvider } from '@/redux/StoreProvider'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Билетопоиск'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <StoreProvider>
        <TheHeader/>
        <main>{children}</main>
        <TheFooter/>
      </StoreProvider>
      </body>
    </html>
  )
}
