"use client";

import React, { useState } from 'react';
import { FaCloud, FaRobot, FaBars, FaXmark } from 'react-icons/fa6';
import { useChat } from "@/src/context/ChatContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsChatOpen } = useChat();

  const navLinks = [
    { name: 'Who We Are', href: '#who-we-are' }, 
    { name: 'What We Do', href: '#core-values' },
    { name: 'How We Do It', href: '#what-we-do' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing Framework', href: '#pricing' },
    { name: 'Channels', href: '#channels' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <nav className="bg-[#0b111a] w-full sticky top-0 border-b border-gray-800 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 text-white font-sans max-w-[1400px] mx-auto">
        
        {/* Left Side: Logo (Wrapped in <a> to scroll to top) */}
        <a href="#" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-[#00a8cc] to-[#005a7a] flex items-center justify-center shadow-[0_0_15px_rgba(0,168,204,0.5)]">
            <span className="text-white font-bold text-xl lg:text-2xl">B</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline text-lg lg:text-xl font-bold tracking-wide">
              <span className="text-white">BEAP</span>
              <span className="text-[#2dd4bf]">UTILITY</span>
            </div>
            <span className="text-[#2dd4bf] text-[9px] lg:text-[10px] font-semibold tracking-widest uppercase mt-0.5">
              Africa PaaS & AIOT
            </span>
          </div>
        </a>

        {/* Middle: Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6 text-[13px] font-medium text-gray-300">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="hover:text-white transition-colors duration-200 whitespace-pre-line text-center leading-tight"
            >
              {link.name === 'Who We Are' ? 'Who We\nAre' : 
               link.name === 'What We Do' ? 'What We\nDo' :
               link.name === 'How We Do It' ? 'How We Do\nIt' :
               link.name === 'Pricing Framework' ? 'Pricing\nFramework' : 
               link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3 lg:gap-4">
          <button className="hidden lg:flex items-center gap-2 bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2.5 rounded-md font-semibold text-xs lg:text-sm transition-colors duration-200">
            <FaCloud className="text-lg" />
            <span className="tracking-wide">BEAPONE PORTAL</span>
          </button>

           <button 
            onClick={() => setIsChatOpen(true)}
            className="hidden lg:flex items-center gap-2 bg-[#1e293b] hover:bg-[#334155] text-[#2dd4bf] px-4 py-2.5 rounded-md font-semibold text-xs lg:text-sm border border-gray-700 transition-colors duration-200"
          >
            <FaRobot className="text-lg" />
            <span className="whitespace-pre-line text-center leading-tight">
              AI{'\n'}Advisor
            </span>
          </button>

          <button 
            className="xl:hidden text-2xl text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#0b111a] border-b border-gray-800 flex flex-col px-6 py-4 gap-4 shadow-xl">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-gray-300 hover:text-white text-sm font-medium border-b border-gray-800/50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex flex-col gap-3 mt-2 lg:hidden">
            <button className="flex items-center justify-center gap-2 bg-[#0284c7] text-white px-4 py-3 rounded-md font-semibold text-sm">
              <FaCloud className="text-lg" />
              <span>BEAPONE PORTAL</span>
            </button>
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsChatOpen(true);
              }}
              className="flex items-center justify-center gap-2 bg-[#1e293b] text-[#2dd4bf] px-4 py-3 rounded-md font-semibold text-sm border border-gray-700"
            >
              <FaRobot className="text-lg" />
              <span>AI Advisor</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}