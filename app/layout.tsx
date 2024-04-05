import { Layout } from '@/components/dom/Layout'
import '@/styles/styles.scss'
import { Roboto } from 'next/font/google'
 
export const metadata = {
  title: 'a driving practice game',
  description: 'a driving practice game'
}

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "400", "700"],
    variable: "--roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={roboto.className}>
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
