"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { portfolioData } from "@/src/data/portfolio";

export default function Portfolio() {
  // Default to the second card (index 1) as active to match the initial screenshot
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  return (
    // Outer wrapper: Adds the blue-tinted background and top/bottom borders
    <div className="relative w-full bg-[#0b101e] border-y border-gray-800/30">
      
      {/* Inner container: Constrains width and adds padding */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-20">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block border border-[#115e59] bg-[#042f2e] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#2dd4bf] text-xs font-bold tracking-widest uppercase">
              Flagship Offerings
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            Market-proven hardware & software products powering smart water, utility automation, and enterprise SaaS across African markets.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {portfolioData.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeCardIndex === index;

            return (
              <div 
                key={index} 
                onClick={() => setActiveCardIndex(index)}
                className={`cursor-pointer border rounded-3xl p-6 lg:p-8 flex flex-col relative overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? "bg-[#0f172a] border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.1)]" 
                    : "bg-[#111827]/60 border-gray-800/60 hover:border-gray-600"
                }`}
              >
                {/* Subtle glow only for the active card */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-[40px] pointer-events-none" />
                )}

                {/* Top Row: Icon & Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-[#38bdf8]" : card.iconBg
                    }`}
                  >
                    <Icon className={`text-xl transition-colors duration-300 ${
                      isActive ? "text-[#0284c7]" : card.iconColor
                    }`} />
                  </div>
                  
                  {card.badge && (
                    <div className={`px-2.5 py-1 rounded text-[9px] font-bold tracking-wider text-center whitespace-pre-line leading-tight transition-colors duration-300 ${
                      isActive ? "bg-[#0284c7] text-white" : card.badgeStyle
                    }`}>
                      {card.badge}
                    </div>
                  )}
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-8">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <FaCheck className={`mt-0.5 shrink-0 text-[10px] transition-colors duration-300 ${
                        isActive ? "text-[#38bdf8]" : "text-[#2dd4bf]"
                      }`} />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button 
                  className={`w-full py-3 rounded-lg text-[10px] font-bold tracking-wider transition-all duration-300 ${
                    isActive 
                      ? "bg-[#38bdf8] text-[#0b111a] shadow-[0_0_15px_rgba(56,189,248,0.4)]" 
                      : "bg-[#1e293b]/50 text-white hover:bg-[#334155]"
                  }`}
                >
                  {card.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}