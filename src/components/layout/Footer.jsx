import React from 'react';
import { FaGlobe, FaPhoneAlt, FaEnvelope, FaBuilding } from 'react-icons/fa';

export default function Footer() {
  const locations = [
    {
      title: 'West Africa Operational Hub',
      location: 'Lagos / Abuja, Nigeria',
      contact: '+234 702 549 7669',
      dotColor: 'bg-[#06b6d4]', // Cyan
    },
    {
      title: 'East Africa Regional Office',
      location: 'Nairobi, Kenya',
      contact: 'info@beaputility.africa',
      dotColor: 'bg-[#10b981]', // Green
    },
    {
      title: 'Southern Africa Innovation Center',
      location: 'Johannesburg, South Africa',
      contact: 'support@beapone.com',
      dotColor: 'bg-[#a855f7]', // Purple
    },
    {
      title: 'International Advisory Desk',
      location: 'Global Corporate Relations',
      contact: 'www.beaputility.africa',
      dotColor: 'bg-[#eab308]', // Yellow
    },
  ];

  return (
    <footer className="bg-[#060a10] text-gray-400 font-sans pt-16 pb-8 px-6 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12 lg:mb-16">
          
          {/* Left Column: Brand & Contact Info */}
          <div>
            {/* Logo Area */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#06b6d4] flex items-center justify-center">
                <span className="text-[#060a10] font-bold text-xl">B</span>
              </div>
              <div className="flex items-baseline text-2xl font-bold tracking-wide">
                <span className="text-white">BEAP</span>
                <span className="text-[#38bdf8]">UTILITY</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-8 max-w-md">
              Leading the African continent in IoT Software-as-a-Service and Platform-as-a-Service infrastructure delivery. Smart water, smart grids, and physical monetization architectures.
            </p>

            {/* Contact Card */}
            <div className="bg-[#111827] rounded-xl p-6 w-full md:max-w-[400px]">
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <FaGlobe className="text-[#06b6d4] shrink-0" />
                  <span className="break-all">Website: <a href="http://www.beaputility.africa" className="text-[#38bdf8] hover:underline">www.beaputility.africa</a></span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-[#06b6d4] shrink-0" />
                  <span>Phone: <a href="tel:+2347025497669" className="text-[#38bdf8] hover:underline">+234 702 549 7669</a></span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-[#06b6d4] shrink-0" />
                  <span className="break-all">Email: <a href="mailto:info@beaputility.africa" className="text-[#38bdf8] hover:underline">info@beaputility.africa</a></span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Regional Presence */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaBuilding className="text-[#06b6d4] text-lg shrink-0" />
              <h3 className="text-white text-lg font-semibold">Multi-Location Regional Presence</h3>
            </div>
            <p className="text-sm mb-6">
              Serving municipal clients, real estate developments, and OEMs with operational hubs in key locations.
            </p>

            {/* Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {locations.map((loc, index) => (
                <div key={index} className="bg-[#111827] rounded-xl p-5 relative">
                  <div className="flex justify-between items-start mb-1 gap-2">
                    <h4 className="text-white font-medium text-sm leading-tight">{loc.title}</h4>
                    <div className={`w-2 h-2 rounded-full ${loc.dotColor} mt-1 shrink-0`} />
                  </div>
                  <p className="text-xs mb-2">{loc.location}</p>
                  <a 
                    href={loc.contact.includes('@') ? `mailto:${loc.contact}` : loc.contact.includes('www') ? `http://${loc.contact}` : `tel:${loc.contact.replace(/\s/g, '')}`} 
                    className="text-xs text-[#38bdf8] hover:underline break-all"
                  >
                    {loc.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <p className="text-center md:text-left">© 2026 BEAPUTILITY Limited. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-3">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">SLA & Governance</a>
            <a href="#" className="text-[#06b6d4] hover:text-[#38bdf8] transition-colors font-medium">BEAPOne Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}