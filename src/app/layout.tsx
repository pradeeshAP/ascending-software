import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "@/components/layout/LoadingContext";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Ascending Software | Software & Digital Solutions",
  description:
    "Ascending Software engineers future-ready technology solutions using modern architectures, cloud-native platforms and intelligent automation to help businesses innovate, scale and stay ahead in a connected world.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased">
        <LoadingProvider>
          <LoadingScreen />
          <SmoothScrollProvider>
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </SmoothScrollProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
