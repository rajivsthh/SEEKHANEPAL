"use client"
import { AuthDialog } from "@/components/auth-dialog"
import { ChatBot } from "@/components/chatbot"
import { LogoSection } from "@/components/logo-section"
import { Container } from "@/components/ui/container"
import Link from "next/link"

export default function HomePage() {  
  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      {/* Navigation Bar (background full-bleed; content centered) */}
      <nav className="w-full border-b border-gray-800">
        <Container className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-blue-400">सिकNEPAL</div>
          <div className="flex items-center gap-6">
            <Link href="/explore" className="text-gray-300 hover:text-white transition-colors">
              Explore
            </Link>
            <a href="/mentor-marketplace.html" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Mentor Marketplace
            </a>
            <a href="https://updatenewmew.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </a>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/vision" className="text-gray-300 hover:text-white transition-colors">
              Vision
            </Link>
            <AuthDialog />
          </div>
        </Container>
      </nav>

      <LogoSection />

      {/* Chatbot Section (content centered inside container) */}
      <section className="w-full py-8">
        <Container>
          <ChatBot />
        </Container>
      </section>

      {/* (removed duplicate LogoSection and ChatBot) */}
    </div>
  )
}
