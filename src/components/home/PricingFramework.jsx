"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { pricingCategories } from "@/src/data/pricingFramework";

export default function PricingFramework() {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);

  // Find the data for the currently selected category
  const currentCategoryData = pricingCategories.find((cat) => cat.id === activeCategory);

  return (
    // Reverted to standard max-width container on the default black background
    <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-20">
      
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-block border border-[#115e59] bg-[#042f2e] px-4 py-1.5 rounded-full mb-6">
          <span className="text-[#2dd4bf] text-xs font-bold tracking-widest uppercase">
            Monetization Architectures
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Pricing Framework
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
          BEAPUtility provides 5 comprehensive monetization models tailored to consumer affordability, capital expenditure limits, and B2B enterprise agreements.
        </p>
      </div>

      {/* --- CATEGORIES TABS GRID --- */}
      <div className="flex overflow-x-auto xl:grid xl:grid-cols-5 gap-4 mb-8 pb-4 scrollbar-hide">
        {pricingCategories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 w-[280px] xl:w-auto text-left p-5 rounded-2xl border transition-all duration-300 ${
                isActive
                  ? "bg-[#0c2a42] border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)]"
                  : "bg-[#111827]/40 border-gray-800/60 hover:border-gray-600"
              }`}
            >
              <span className={`text-[9px] font-mono tracking-widest uppercase block mb-3 ${
                isActive ? "text-[#38bdf8]" : "text-gray-500"
              }`}>
                {category.categoryNum}
              </span>
              <h3 className={`text-sm font-bold mb-1.5 ${
                isActive ? "text-white" : "text-gray-300"
              }`}>
                {category.title}
              </h3>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                {category.previewText}
              </p>
            </button>
          );
        })}
      </div>

      {/* --- DETAILS PANEL --- */}
      <div className="bg-[#111827]/40 border border-gray-800/60 rounded-3xl p-6 md:p-10">
        
        {/* Panel Header */}
        <div className="mb-8">
          <span className="text-[#2dd4bf] text-[9px] font-mono tracking-widest uppercase block mb-2">
            {currentCategoryData.badgeText}
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {currentCategoryData.detailTitle}
          </h3>
        </div>

        {/* Inner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentCategoryData.items.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#0b111a] border border-[#1e293b] rounded-xl p-5 md:p-6 flex gap-4"
            >
              {/* Cyan Check Icon */}
              <FaCheckCircle className="text-[#2dd4bf] mt-0.5 shrink-0 text-sm" />
              
              <div>
                <h4 className="text-white text-sm font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}