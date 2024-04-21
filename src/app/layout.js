import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "robotici.com",
  description: "Building the web pixel by pixel",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <GoogleTagManager gtmId='GTM-THNW4L7' />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
