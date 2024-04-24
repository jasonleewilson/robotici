import { GoogleTagManager } from "@next/third-parties/google";
import { Arimo } from "next/font/google";
import "./globals.css";

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["variable"],
});

export const metadata = {
  title: "robotici.com",
  description: "Building the web pixel by pixel",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <link rel='icon' href='/favicon.ico' sizes='any' /> */}
      <link
        rel='icon'
        href='/icon?<generated>'
        type='image/<generated>'
        sizes='<generated>'
      />
      <GoogleTagManager gtmId='GTM-THNW4L7' />
      <body className={arimo.className}>{children}</body>
    </html>
  );
}
