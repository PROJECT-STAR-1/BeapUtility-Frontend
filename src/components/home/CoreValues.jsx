import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { coreValues, leadershipData } from "@/src/data/coreValues";

export default function CoreValues() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-16">
      
      {/* --- TOP SECTION: CORE VALUES --- */}
      <div className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-10">
          Our Core Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index} 
                className="bg-[#111827]/60 border border-gray-800/80 rounded-2xl p-6 lg:p-8 hover:border-gray-600 transition-colors duration-300"
              >
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${value.bgColor}`}>
                  <Icon className={`text-xl ${value.iconColor}`} />
                </div>
                
                <h3 className="text-white text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- BOTTOM SECTION: LEADERSHIP & ADVISORY --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {leadershipData.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#111827]/40 border border-gray-800/60 rounded-2xl p-8 lg:p-10"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-[#2dd4bf] bg-[#0b3336]/50 px-3 py-1 rounded-full w-fit">
                {item.badge}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Bullet List */}
            <ul className="space-y-3">
              {item.list.map((listItem, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <FaCheckCircle className="text-[#2dd4bf] mt-0.5 shrink-0 text-xs" />
                  <span>{listItem}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}