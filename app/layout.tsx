import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import PortfolioHeader from "@/components/custom-ui/navigation-menu/portfolioHeader";
import Footer2 from "@/components/custom-ui/footer/footer-minimal";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "King-dev Portfolio",
  description: "Personal Portfolio",
  icons: {
    icon: "/kj-dev.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased dark`}>
        <SmoothScrollProvider>
          <PortfolioHeader />
          {children}
          <Footer2 />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
