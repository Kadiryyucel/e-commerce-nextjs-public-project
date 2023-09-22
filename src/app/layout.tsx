import './globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat_Alternates } from 'next/font/google'

import { ApolloWrapper } from "@/app/lib/apollo-provider";

import { AppStateProvider } from "@/app/store"

const inter = Montserrat_Alternates({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <AppStateProvider>{children}</AppStateProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
