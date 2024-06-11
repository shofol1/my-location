import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "../redux/provider";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divisions",
  description: "Home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <div className="h-screen  flex justify-center">{children}</div>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
