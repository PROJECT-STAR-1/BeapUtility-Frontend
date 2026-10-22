import React from "react";
import { channelData } from "@/src/data/channelEcosystem";

export default function ChannelEcosystem() {
  return (
    // Outer wrapper for the blue section background
    <div className="relative w-full bg-[#0b101e] border-y border-gray-800/30">
      
      {/* Inner container */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-20">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block border border-[#115e59] bg-[#042f2e] px-4 py-1.5 rounded-full mb-6">
            <span className="text-[#2dd4bf] text-xs font-bold tracking-widest uppercase">
              Distribution Architecture
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Channel Ecosystem
          </h2>
          
          <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
            Empowering local stakeholders across multiple touchpoints to launch, distribute, and maintain smart utility infrastructure.
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {channelData.map((card, index) => {
            const Icon = card.icon;
            return (
              <div 
                key={index} 
                className="bg-[#111827]/60 border border-gray-800/60 rounded-2xl p-6 lg:p-8 flex flex-col hover:border-gray-600 transition-colors duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.iconBg}`}>
                  <Icon className={`text-xl ${card.iconColor}`} />
                </div>
                
                {/* Text */}
                <h3 className="text-white text-lg font-bold mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                  {card.description}
                </p>

                {/* Bullet List (If any) */}
                {card.list && (
                  <ul className="space-y-2 mt-auto">
                    {card.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tag Box (If any) */}
                {card.tag && (
                  <div className={`mt-auto inline-block px-3 py-2 rounded text-[10px] font-medium leading-tight whitespace-pre-line w-fit ${card.tag.style}`}>
                    {card.tag.label}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}