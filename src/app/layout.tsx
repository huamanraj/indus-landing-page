import type { Metadata, Viewport } from "next";
import { Urbanist, Space_Mono } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Mercury | AI Phone Calls That Sound Like a Real Teammate",
  description:
    "Mercury is a voice agent you deploy for HR, reception, appointment setting, support, collections, and surveys. Sub-500ms latency, native tool calling, and full observability.",
  keywords: [
    "AI voice agent",
    "AI phone calls",
    "voice automation",
    "conversational AI",
    "appointment scheduling AI",
    "customer support AI",
    "lead qualification",
    "HR automation",
    "receptionist AI",
    "enterprise voice AI",
  ],
  authors: [{ name: "Mercury AI" }],
  creator: "Mercury AI",
  publisher: "Mercury AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercury.ai",
    siteName: "Mercury",
    title: "Mercury | AI Phone Calls That Sound Like a Real Teammate",
    description:
      "Deploy enterprise-grade voice agents with sub-500ms latency, native tool calling, and full observability. Built for HR, reception, appointment setting, support, and more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mercury AI - Voice Agents for Real Workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercury | AI Phone Calls That Sound Like a Real Teammate",
    description:
      "Deploy enterprise-grade voice agents with sub-500ms latency. Built for HR, reception, support, and more.",
    images: ["/og-image.png"],
    creator: "@mercuryai",
  },
  alternates: {
    canonical: "https://mercury.ai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${urbanist.variable} ${spaceMono.variable} antialiased`}
      >
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
