import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import NavbarComponent from "@/component/navbar";
import FooterComponent from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.sanjibmondal.com"),

  title: {
    default: "Sanjib Mondal | Full Stack Developer (React, Next.js, Node.js)",
    template: "%s | Sanjib Mondal",
  },

  description:
    "Sanjib Mondal is a Full Stack Developer from India with 3+ years of experience in React.js, Next.js, Node.js, and WordPress. Explore projects, skills, and experience.",

  keywords: [
    "Sanjib Mondal",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "WordPress Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer Portfolio",
  ],

  authors: [{ name: "Sanjib Mondal", url: "https://www.sanjibmondal.com" }],

  creator: "Sanjib Mondal",
  publisher: "Sanjib Mondal",

  openGraph: {
    title: "Sanjib Mondal | Full Stack Developer",
    description:
      "Portfolio of Sanjib Mondal — Full Stack Developer specializing in React, Next.js, Node.js, and modern web applications.",
    url: "https://www.sanjibmondal.com",
    siteName: "Sanjib Mondal Portfolio",
    images: [
      {
        url: "/og-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "Sanjib Mondal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sanjib Mondal | Full Stack Developer",
    description:
      "Explore Sanjib Mondal's portfolio — React, Next.js, Node.js developer with 3+ years experience.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavbarComponent />

        <div className="container mx-auto px-4 md:container md:mx-auto">
          {children}
        </div>

        <FooterComponent />
      </body>
    </html>
  );
}
