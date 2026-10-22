import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { ChatProvider } from "@/src/context/ChatContext"; // Import the provider
import Chatbot from "@/src/components/Chatbot"; // Import the Chatbot

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BEAPUTILITY | Africa PaaS & AIOT",
  description: "Leading the African continent in IoT Software-as-a-Service and Platform-as-a-Service infrastructure delivery. Smart water, smart grids, and physical monetization architectures.",
  keywords: ["IoT", "PaaS", "AIOT", "Africa", "Smart Water", "Smart Grids", "BEAPUTILITY"],
  openGraph: {
    title: "BEAPUTILITY | Africa PaaS & AIOT",
    description: "Leading the African continent in IoT Software-as-a-Service and Platform-as-a-Service infrastructure delivery.",
    siteName: "BEAPUTILITY",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060a10] text-white font-sans">
        {/* Wrap everything in the Provider */}
        <ChatProvider>
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
          
          {/* Render the Chatbot here so it's always available */}
          <Chatbot />
        </ChatProvider>
      </body>
    </html>
  );
}