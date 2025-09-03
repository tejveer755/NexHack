import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nexhack 2025 | 24hr Hackathon by Nexverse IITM",
  description:
    "Join Nexhack 2025 – a 24-hour tech hackathon by Nexverse, IIT Madras. Collaborate, innovate, and build groundbreaking projects with top minds from across the country.",
  keywords: [
    "Nexhack",
    "Nexverse IITM",
    "IIT Madras hackathon",
    "college hackathon",
    "tech hackathon 2025",
    "24 hour hackathon India",
    "student hackathon",
    "IITM events",
    "innovation challenge",
    "coding competition",
    "AI hackathon",
    "GGSIPU",
    'Institute of Information Technology & Management',
  ],
  authors: [{ name: "Nexverse-IITM", }],
  creator: "Nexverse Team",
  publisher: "Nexverse IITM",
  openGraph: {
    title: "Nexhack 2025 | 24hr Hackathon by Nexverse IITM",
    description:
      "A 24-hour nationwide hackathon hosted by Nexverse, IITM. Code, build, and win exciting prizes!",
    url: "https://nexverse-iitm.com",
    siteName: "Nexverse-iitm",
    images: [
      {
        url: "https://nexverse.com/nexhacklogo.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Nexhack 2025 - Hackathon by Nexverse IITM"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
 
  metadataBase: new URL("https://nexverse-iitm.com")
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} max-w-screen  overflow-x-hidden bg-zinc-950 ${geistMono.variable} antialiased`}
      >
        <ThemeProviderWrapper>
        {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
