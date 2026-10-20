import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "SmartShut | Smart Access & Energy Management",
  description:
    "Explore SmartShut, a smart door concept connecting authorized access, occupancy monitoring and intelligent energy management.",
  keywords: [
    "SmartShut",
    "smart door concept",
    "energy management",
    "smart access control",
    "room occupancy verification",
    "biometric door lock",
    "smart building technology",
  ],
  authors: [{ name: "SmartShut Concept" }],
  openGraph: {
    title: "SmartShut | Smart Access & Energy Management",
    description:
      "Explore SmartShut, a smart door concept connecting authorized access, occupancy monitoring and intelligent energy management.",
    type: "website",
    siteName: "SmartShut Product Concept",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartShut | Smart Access & Energy Management",
    description:
      "Explore SmartShut, a smart door concept connecting authorized access, occupancy monitoring and intelligent energy management.",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('smartshut-theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                    document.documentElement.style.colorScheme = 'light';
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#F7F8FA] dark:bg-[#07040d] text-[#111218] dark:text-slate-100 min-h-screen selection:bg-brand-green/20 selection:text-black dark:selection:text-white antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
