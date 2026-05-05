import { Poppins } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Ajmal - Full-Stack Developer',
  description: 'Portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}