import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/common/Header";
import SubNav from "./components/navigations/SubNav";
import Footer from "./components/common/Footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gizmo - Cat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable}`}
      >
        <Header />
        <SubNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
