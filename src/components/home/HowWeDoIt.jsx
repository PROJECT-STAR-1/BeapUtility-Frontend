import React from "react";
import { executionArchitecture } from "@/src/data/howWeDoIt";

export default function HowWeDoIt() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-20">
      
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col items-center text-center mb-16">
        {/* Badge */}
        <div className="inline-block border border-[#115e59] bg-[#042f2e] px-4 py-1.5 rounded-full mb-6">
          <span className="text-[#2dd4bf] text-xs font-bold tracking-widest uppercase">
            Execution Architecture
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How We Do It
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
          A holistic execution methodology structured around sustainable deployment, strategic joint ventures, and robust ecosystem management.
        </p>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {executionArchitecture.map((column, index) => {
          const Icon = column.icon;
          return (
            <div 
              key={index} 
              className="bg-[#111827]/40 border border-gray-800/60 rounded-3xl p-8 lg:p-10"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <Icon className={`text-2xl ${column.iconColor}`} />
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {column.title}
                </h3>
              </div>
              
              {/* Card Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {column.description}
              </p>

              {/* Inner Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {column.innerCards.map((card, i) => (
                  <div 
                    key={i} 
                    className="bg-[#0b111a] border border-[#1e293b] rounded-xl p-4 lg:p-5"
                  >
                    <h4 className="text-white text-sm font-semibold mb-1.5">
                      {card.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}