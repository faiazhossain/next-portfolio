import { Kode_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kodeMono",
});

export const metadata = {
  title: "Faiaz's Portfolio",
  description:
    "I am a dedicated software engineer specializing in frontend development, with extensive experience in crafting dynamic and interactive web applications. My expertise spans a wide range of technologies, including React, JavaScript, Next.js, HTML, CSS, MapLibre, and Deck.gl.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kodeMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
