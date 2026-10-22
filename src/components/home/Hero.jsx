"use client";

import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay, FaCloudUploadAlt, FaArrowRight } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { slidesData, staticBottomCards } from "@/src/data/slides"; 
// import { staticBottomCards } from "@/data/staticFeatures"; // Import static cards

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const totalSlides = 28;

  // Find the active slide data
  const activeSlideData = slidesData.find((s) => Number(s.id) === currentSlide) || slidesData[0];

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    let interval = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev >= totalSlides) return 1;
          return prev + 1;
        });
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, totalSlides]);

  const handleManualNav = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 pt-4 pb-6 flex flex-col justify-between lg:h-[calc(100vh-73px)] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[#06b6d4]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* --- TOP CONTROLLER BAR --- */}
      <div className="flex flex-col gap-2 relative z-10 shrink-0">
        {/* Status Bar */}
        <div className="bg-[#111827] border border-gray-800/60 rounded-lg px-3 py-1.5 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="bg-[#1e293b] text-[#2dd4bf] text-[9px] font-bold px-1.5 py-0.5 rounded">
              {activeSlideData.id}
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[9px] text-[#2dd4bf] tracking-widest font-semibold">
                {activeSlideData.category}
                <span className="w-1 h-1 rounded-full bg-[#2dd4bf]"></span>
              </div>
              <div className="text-[11px] font-medium text-gray-300">
                {activeSlideData.title}
              </div>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center gap-2 text-gray-400">
            <button 
              onClick={() => handleManualNav(Math.max(1, currentSlide - 1))}
              className="hover:text-white transition text-[10px]"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1 text-[9px] font-semibold hover:text-white transition w-12 justify-center"
            >
              {isPlaying ? (
                <><FaPause className="text-[7px]" /> PAUSE</>
              ) : (
                <><FaPlay className="text-[7px]" /> PLAY</>
              )}
            </button>

            <button 
              onClick={() => handleManualNav(Math.min(totalSlides, currentSlide + 1))}
              className="hover:text-white transition text-[10px]"
            >
              <FaChevronRight />
            </button>
            
            <div className="hidden md:flex items-center gap-2 ml-1">
              <div className="w-20 h-0.5 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#06b6d4] rounded-full transition-all duration-500 ease-linear"
                  style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
                ></div>
              </div>
              <span className="text-[9px]">{totalSlides} Pages</span>
            </div>
          </div>
        </div>

        {/* Numbered Pagination */}
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
          {Array.from({ length: totalSlides }).map((_, i) => {
            const num = i + 1;
            const isActive = num === currentSlide;
            return (
              <button
                key={num}
                onClick={() => handleManualNav(num)}
                className={`flex-shrink-0 w-6 h-6 rounded text-[9px] font-medium flex items-center justify-center transition-colors ${
                  isActive
                    ? "bg-[#06b6d4] text-white"
                    : "bg-[#111827] text-gray-500 hover:bg-[#1e293b]"
                }`}
              >
                {num.toString().padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>

      {/* --- MAIN SLIDER CONTENT --- */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center relative z-10 my-auto py-2">
        
        {/* Left: Text Content */}
        <div>
          <div className="inline-flex items-center gap-1.5 border border-gray-800 bg-[#0b111a] px-2 py-0.5 rounded-full text-[9px] font-medium mb-3">
            <span className="text-[#2dd4bf]">Page {activeSlideData.id}</span>
            <span className="text-gray-500">/</span>
            <span className="text-gray-300">{activeSlideData.pageType}</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-2">
            {activeSlideData.heading}
          </h1>
          
          <h2 className="text-base md:text-lg text-[#38bdf8] font-medium mb-3">
            {activeSlideData.subtitle}
          </h2>
          
          <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed max-w-md mb-5">
            {activeSlideData.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {activeSlideData.tags.map((tag, i) => (
              <div key={i} className="bg-[#111827] border border-gray-800 text-[#2dd4bf] text-[9px] font-medium px-2.5 py-1 rounded whitespace-pre-line leading-tight">
                {tag}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button className="flex items-center gap-1.5 bg-[#0284c7] hover:bg-[#0369a1] text-white px-4 py-2 rounded-md font-semibold text-[10px] transition-all shadow-[0_0_15px_rgba(2,132,199,0.3)]">
              EXPLORE PLATFORM <FaArrowRight className="text-[8px]" />
            </button>
            <button className="flex items-center gap-1.5 bg-[#111827] border border-gray-800 hover:bg-[#1e293b] text-[#2dd4bf] px-4 py-2 rounded-md font-semibold text-[10px] transition-all">
              <FaGears className="text-xs" /> Ask AI Assistant
            </button>
          </div>
        </div>

        {/* Right: Live Slide Preview Card */}
        <div className="relative w-full max-w-[340px] mx-auto lg:ml-auto">
          <div className="bg-[#111827]/80 backdrop-blur-sm border border-gray-800/80 rounded-xl p-5 flex flex-col items-center text-center">
            
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.4)] mb-3">
              <FaCloudUploadAlt className="text-white text-lg" />
            </div>

            <h3 className="text-white font-semibold text-sm mb-0.5">Live Slide Preview</h3>
            <p className="text-gray-400 text-[10px] mb-4">
              BEAPUtility {activeSlideData.stats.label} {activeSlideData.stats.value}
            </p>

            <div className="flex w-full justify-around border-t border-gray-800/60 pt-3">
              <div className="flex flex-col items-center">
                <span className="text-[8px] text-[#2dd4bf] uppercase tracking-wider font-semibold mb-0.5">Slide</span>
                <span className="text-[11px] text-gray-300">{activeSlideData.id} / {totalSlides}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] text-[#2dd4bf] uppercase tracking-wider font-semibold mb-0.5">Status</span>
                <span className="text-[11px] text-green-400">{activeSlideData.stats.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STATIC BOTTOM CARDS --- */}
      {/* Now mapping over staticBottomCards instead of activeSlideData */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 relative z-10 shrink-0">
        {staticBottomCards.map((card, index) => (
          <div key={index} className="bg-[#111827] border border-gray-800/50 rounded-lg p-2.5 flex flex-col hover:border-gray-700 transition-colors cursor-default">
            <h4 className="text-[#2dd4bf] text-[11px] font-semibold mb-0.5">{card.title}</h4>
            <p className="text-gray-500 text-[9px]">{card.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}