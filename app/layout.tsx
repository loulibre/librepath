/**
 * Root Layout Component
 * 
 * This is the main layout wrapper for the entire application.
 * It includes the Topbar component which will be present on all pages.
 * 
 * Dependencies:
 * - @/components/topbar: The Topbar component
 * - @/components/providers: App providers wrapper
 * - next/font/local: For custom fonts
 * 
 * Key Features:
 * - Sets up the base HTML structure
 * - Includes custom fonts (Geist)
 * - Wraps the app in necessary providers
 * - Positions the Topbar above all page content
 */

import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Topbar } from "@/components/topbar"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LibrePath AI",
  description: "Private AI Productivity Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Topbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
