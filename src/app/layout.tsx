import type { Metadata } from "next";
import { Urbanist, Space_Mono } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mercury | AI Calling Agents",
  description: "AI Calling Agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@phosphor-icons/web"></script>
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
