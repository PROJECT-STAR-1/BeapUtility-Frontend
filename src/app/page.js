"use client";

import React, { useState } from "react";
import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";
import CoreValues from "../components/home/CoreValues";
import WhatWeDo from "../components/home/WhatWeDo";
import HowWeDoIt from "@/src/components/home/HowWeDoIt";
import Portfolio from "@/src/components/home/Portfolio";
import PricingFramework from "@/src/components/home/PricingFramework";
import ChannelEcosystem from "@/src/components/home/ChannelEcosystem";
import Resources from "@/src/components/home/Resources";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060a10] text-white font-sans overflow-hidden">
      {/* The Hero component handles the slider layout */}
      <Hero />
      
      {/* Added id for navigation and scroll-mt to offset the sticky navbar */}
      <section id="who-we-are" className="scroll-mt-24">
        <WhoWeAre />
      </section>
       {/* Add the new section */}
      <section id="core-values" className="scroll-mt-24">
        <CoreValues />
      </section>

       <section id="what-we-do" className="scroll-mt-24">
        <WhatWeDo />
      </section>

        <section id="how-we-do-it" className="scroll-mt-24">
        <HowWeDoIt />
      </section>

      <section id="portfolio" className="scroll-mt-24">
        <Portfolio />
      </section>

       <section id="pricing" className="scroll-mt-24">
        <PricingFramework />
      </section>

        <section id="channels" className="scroll-mt-24">
        <ChannelEcosystem />
      </section>

      <section id="resources" className="scroll-mt-24">
        <Resources />
      </section>
    </main>
  );
}