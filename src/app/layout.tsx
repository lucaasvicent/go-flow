import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/Footer/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://go-flow-weld.vercel.app"),
  title: "Go Flow",
  description: "Conheça culturas, viva o Flow! Descubra a cultura, as curiosidades e os lugares de cada destino antes de viajar.",
  icons: {
    icon: "/logoTransFontBranca.png",
  },
  openGraph: {
    title: "Go Flow",
    description: "Conheça culturas, viva o Flow!",
    locale: "pt_BR",
    type: "website",
    images: ["/sky-background-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
