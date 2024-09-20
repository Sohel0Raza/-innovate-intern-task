import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-x-hidden">
          <Header></Header>
          {children}
      </body>
    </html>
  );
}
