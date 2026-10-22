"use client";

import React, { useState } from "react";
import { whatWeDoTabs } from "@/src/data/whatWeDo";

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(whatWeDoTabs[0].id);

  // Find the data for the currently selected tab
  const currentTabData = whatWeDoTabs.find((tab) => tab.id === activeTab);

  // Helper to render tags with the correct colors
  const renderTag = (tag, index) => {
    const colorMap = {
      teal: "bg-[#0b3336]/50 text-[#2dd4bf]",
      yellow: "bg-[#3f2a11]/50 text-[#fbbf24]",
      green: "bg-[#0f3326]/50 text-[#34d399]",
      blue: "bg-[#0c2a42]/50 text-[#38bdf8]",
      purple: "bg-[#2a163f]/50 text-[#a855f7]",
      red: "bg-[#3f1111]/50 text-[#f87171]",
    };
    
    return (
      <span 
        key={index} 
        className={`inline-block px-3 py-1.5 rounded text-[10px] font-mono leading-tight whitespace-pre-line mt-4 ${colorMap[tag.color] || colorMap.teal}`}
      >
        {tag.label}
      </span>
    );
  };

  return (
    // Outer wrapper: Adds the blue-tinted background and top/bottom borders
    <div className="relative w-full bg-[#0b101e] border-y border-gray-800/30">
      
      {/* Inner container: Constrains width and adds padding */}
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-20">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block border border-[#1e293b] bg-[#0b111a] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">
              Technology Taxonomy
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We Do
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            From raw IoT sensors to high-level Generative AI and Spatial Twins, our comprehensive technology portfolio connects the physical world to intelligence.
          </p>
        </div>

        {/* --- TABS NAVIGATION --- */}
        <div className="flex justify-center mb-12">
          {/* Scrollable container for mobile */}
          <div className="flex overflow-x-auto bg-[#111827]/60 border border-gray-800/80 rounded-full p-1.5 scrollbar-hide">
            {whatWeDoTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#0284c7] text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-[#1e293b]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- TAB CONTENT (CARDS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTabData?.cards.length > 0 ? (
            currentTabData.cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index} 
                  // Slightly adjusted card background opacity to stand out against the new section background
                  className="bg-[#111827]/60 border border-gray-800/60 rounded-2xl p-6 lg:p-8 flex flex-col hover:border-gray-600 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <Icon className={`text-2xl ${card.iconColor}`} />
                  </div>
                  
                  {/* Text */}
                  <h3 className="text-white text-lg font-semibold mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>

                  {/* Tags (if any) */}
                  {card.tags && card.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, i) => renderTag(tag, i))}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500">
              Content for this section is coming soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}