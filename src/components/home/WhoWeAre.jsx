import React from "react";
import { FaEye, FaBullseye, FaCheckCircle } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto px-4 lg:px-8 py-20 lg:py-28">
      
      {/* --- SECTION HEADER --- */}
      <div className="flex flex-col items-center text-center mb-16">
        {/* Badge */}
        <div className="inline-block border border-[#1e293b] bg-[#0b111a] px-4 py-1.5 rounded-full mb-6">
          <span className="text-[#38bdf8] text-xs font-bold tracking-widest uppercase">
            Corporate Overview
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Who We Are
        </h2>
        
        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base max-w-3xl leading-relaxed">
          BEAPUtility is an Internet of Things (IoT) Software-as-a-Service (SaaS) and Platform-as-a-Service (PaaS) provider focused on delivering on-demand infrastructure solutions across Africa.
        </p>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Column: Main Text Card */}
        <div className="bg-[#111827]/40 border border-gray-800/60 rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
            Powering the African IoT Ecosystem
          </h3>
          
          <div className="text-gray-400 text-sm leading-relaxed space-y-4 mb-8">
            <p>
              Through our IoT cloud development platform, we enable brands, OEMs, and developers to develop, launch, manage, and monetize smart devices and services. Our Industry SaaS offerings empower businesses to deploy and manage large numbers of diverse smart devices effortlessly.
            </p>
            <p>
              Our cloud-agnostic architecture works seamlessly across public cloud providers (Amazon Web Services, Microsoft Azure, Tencent Cloud) as well as private cloud infrastructures, delivering complete flexibility without vendor lock-in.
            </p>
          </div>

          {/* Cloud Tags */}
          <div className="flex flex-wrap gap-2">
            {["AWS\nReady", "Azure\nIntegrated", "Tencent\nCompatible", "Private Cloud\nFriendly"].map((tag, i) => (
              <div key={i} className="bg-[#0b111a] border border-[#1e293b] text-[#38bdf8] text-[10px] font-medium px-3 py-1.5 rounded whitespace-pre-line leading-tight">
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Vision, Mission, Way */}
        <div className="flex flex-col gap-6">
          
          {/* Vision Card */}
          <div className="bg-[#111827]/40 border border-[#0ea5e9]/40 rounded-2xl p-6 lg:p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <FaEye className="text-[#0ea5e9] text-xl" />
              <h4 className="text-white font-bold tracking-wider text-sm">VISION</h4>
            </div>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              "To be a leading digital solutions provider on the African continent."
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-[#111827]/40 border border-[#0ea5e9]/40 rounded-2xl p-6 lg:p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <FaBullseye className="text-[#0ea5e9] text-xl" />
              <h4 className="text-white font-bold tracking-wider text-sm">MISSION</h4>
            </div>
            <p className="text-gray-400 text-sm italic leading-relaxed">
              "To provide outstanding digital solutions that enhances smart living and productivity."
            </p>
          </div>

          {/* The BEAPUtility Way Card */}
          <div className="bg-[#111827]/40 border border-[#10b981]/40 rounded-2xl p-6 lg:p-8 flex-1">
            <div className="flex items-center gap-3 mb-3">
              <FaCheckCircle className="text-[#10b981] text-xl" />
              <h4 className="text-white font-bold tracking-wider text-sm">THE BEAPUTILITY WAY</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A customer-centric, cloud-native operational paradigm combining physical hardware with digital agility ("Phygital") to unlock enterprise value across emerging economies.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}