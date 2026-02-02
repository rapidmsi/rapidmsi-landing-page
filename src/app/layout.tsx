import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAPIDMSI",
  description:
    "RAPIDMSI reduces Mass Spectrometry Imaging acquisition time by 50-75% using particle-based pixel sampling and machine-learning reconstruction.",
  keywords: [
    "Mass Spectrometry Imaging",
    "MSI",
    "partial acquisition",
    "machine learning",
    "Rapid1.0",
    "molecular imaging",
    "biomarker",
    "drug discovery",
  ],
  authors: [{ name: "RAPIDMSI" }],
  openGraph: {
    title: "RAPIDMSI",
    description:
      "RAPIDMSI reduces Mass Spectrometry Imaging acquisition time by 50-75% using particle-based pixel sampling and machine-learning reconstruction.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
