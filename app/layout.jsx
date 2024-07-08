import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Faiaz's Portfolio",
  description:
    "I am a dedicated software engineer specializing in frontend development, with extensive experience in crafting dynamic and interactive web applications. My expertise spans a wide range of technologies, including React, JavaScript, Next.js, HTML, CSS, MapLibre, and Deck.gl.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>{children}</body>
    </html>
  );
}
