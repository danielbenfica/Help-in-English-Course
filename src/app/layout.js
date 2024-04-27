import Head from "next/head";
import Header from "@/app/components/Header";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Help in English",
  description: "Aquele help na hora de aprender inglês",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Head>
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        </Head>
        <Header />
        {children}
      </body>
    </html>
  );
}
