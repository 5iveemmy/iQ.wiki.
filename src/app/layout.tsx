import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-Montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IQ.wiki",
  description: "Iq.wiki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased bg-white dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
