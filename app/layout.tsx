import { Layout } from '@/components/dom/Layout'
import '@/styles/styles.scss'

export const metadata = {
  title: 'a driving practice game',
  description: 'a driving practice game'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
