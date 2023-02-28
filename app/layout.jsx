import './globals.css'
import Nav from '../components/Nav'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} mx-4 md:mx-48 xl:mx-96 bg-gray-200`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}