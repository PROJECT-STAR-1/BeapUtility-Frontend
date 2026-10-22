import React from "react";
import { resourcesData } from "@/src/data/resources";

export default function Resources() {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 py-20">
      
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-block border border-[#115e59] bg-[#042f2e] px-4 py-1.5 rounded-full mb-6">
          <span className="text-[#2dd4bf] text-xs font-bold tracking-widest uppercase">
            Knowledge Center
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Resources & Reports
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
          Access corporate presentations, factsheets, whitepapers, and ESG impact evaluations.
        </p>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {resourcesData.map((card, index) => {
          const Icon = card.icon;
          return (
            <div 
              key={index} 
              className="bg-[#111827]/40 border border-gray-800/60 rounded-2xl p-6 lg:p-8 flex flex-col hover:border-gray-600 transition-colors duration-300"
            >
              {/* Icon (No background box here, just the raw icon) */}
              <div className="mb-6">
                <Icon className={`text-3xl ${card.iconColor}`} />
              </div>
              
              {/* Title & Description */}
              <h3 className="text-white text-lg font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6 flex-grow">
                {card.description}
              </p>

              {/* Action Link */}
              <a 
                href="#" 
                className="flex items-center gap-1.5 text-[#2dd4bf] text-xs font-semibold hover:text-[#38bdf8] transition-colors duration-200"
              >
                {card.linkText} <span className="text-sm">{card.linkIcon}</span>
              </a>
            </div>
          );
        })}
      </div>

    </div>
  );
}