import { Layout } from "@/app/components/dom/Layout"
import "@/app/styles/styles.scss"
import { Roboto } from "next/font/google"
import Head from "./head";
import { AuthContextProvider } from "@/app/context/AuthContext";
import { ReactNode } from "react";
 
// export const metadata = {
//   title: 'a driving practice game',
//   description: 'a driving practice game'
// }

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--roboto",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <Head/>
      <body>
        <AuthContextProvider>
        <Layout>{children}</Layout>
        </AuthContextProvider>
      </body>
    </html>
  )
}
