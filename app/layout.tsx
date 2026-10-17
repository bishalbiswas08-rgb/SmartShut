import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartShut — Lock Smart. Save Energy. Stay Secure.",
  description:
    "A product concept showcase: One smart door combining authorized biometric access, camera-assisted occupancy estimation, and automatic non-essential energy shutdown.",
  keywords: [
    "SmartShut",
    "smart door",
    "energy management",
    "smart lock",
    "occupancy detection",
    "biometric access",
    "smart building concept",
  ],
  authors: [{ name: "SmartShut Concept Team" }],
  openGraph: {
    title: "SmartShut — Lock Smart. Save Energy. Stay Secure.",
    description:
      "One smart door connecting access, security, and automatic room energy management.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07040d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#07040d] text-slate-100 min-h-screen selection:bg-brand-green/20 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
