import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hábitos diários",
  description: "Gerenciador de hábitus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.className} flex flex-col bg-gray-950 h-screen`}>

        <Header/>

          <main className="flex-1 w-96 max-w-full mx-auto bg_color px-3 pt-10">
            {children}
          </main>

        <Footer/>
        
       </body>
    </html>
  );
}
