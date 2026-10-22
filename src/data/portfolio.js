// data/portfolio.js
import { FaTint, FaCubes, FaBolt, FaHandshake } from "react-icons/fa";

export const portfolioData = [
  {
    title: "BEAPWater",
    description: "Next-generation smart water management solution combining ultrasonic water meters, automated shut-off valves, PAYGO water vending, and real-time non-revenue water (NRW) leak analytics.",
    icon: FaTint,
    iconColor: "text-[#38bdf8]", // Blue
    iconBg: "bg-[#0c2a42]",
    badge: "HARDWARE +\nSAAS",
    badgeStyle: "bg-[#0b3336] text-[#2dd4bf] border border-[#134e4a]", // Teal
    features: [
      "PAYGO Per-Liter Billing",
      "Automated Valve Remote Lock",
      "AI Non-Revenue Leak Detection",
    ],
    buttonText: "VIEW PRODUCT DATASHEET",
    isFeatured: false,
    buttonStyle: "bg-[#1e293b]/50 text-white hover:bg-[#334155]",
    borderStyle: "border-gray-800/60",
  },
  {
    title: "BEAPOne UBOS",
    description: "Universal Business Operating System (UBOS) SaaS platform. The centralized multi-tenant operating system designed for large utility companies, municipalities, estate managers, and telecommunication tower operators.",
    icon: FaCubes,
    iconColor: "text-[#0284c7]", // Darker Blue
    iconBg: "bg-[#38bdf8]", // Light blue background
    badge: "FLAGSHIP\nENTERPRISE",
    badgeStyle: "bg-[#0284c7] text-white", // Solid Blue
    features: [
      "Multi-Tenant Device Management",
      "Integrated Billing & Payment Gateways",
      "Open API SDK for Developers",
    ],
    buttonText: "LAUNCH BEAPONE PORTAL",
    isFeatured: true,
    buttonStyle: "bg-[#38bdf8] text-[#0b111a] hover:bg-[#0ea5e9] shadow-[0_0_15px_rgba(56,189,248,0.4)]",
    borderStyle: "border-[#38bdf8]", // Highlighted border
  },
  {
    title: "BEAPOne Lite",
    description: "Streamlined, lightweight SaaS variant designed for small-scale mini-grid operators, private residential estates, commercial facility managers, and regional solar vendors.",
    icon: FaBolt,
    iconColor: "text-[#a855f7]", // Purple
    iconBg: "bg-[#2a163f]",
    badge: "SME & LIGHT\nUTILITY",
    badgeStyle: "bg-[#2a163f] text-[#d8b4fe] border border-[#581c87]", // Purple
    features: [
      "Rapid 5-Minute Onboarding",
      "Automated SMS & WhatsApp Receipts",
      "Low Bandwidth Edge Synchronization",
    ],
    buttonText: "VIEW PRODUCT DATASHEET",
    isFeatured: false,
    buttonStyle: "bg-[#1e293b]/50 text-white hover:bg-[#334155]",
    borderStyle: "border-gray-800/60",
  },
  {
    title: "BEAPUtility Advisory",
    description: "BEAPUtility Advisory provides comprehensive, expert advisory services across diverse tech solutions, strictly in line with BEAPUtility's overarching mandate as a key technology enabler and orchestrator. We translate complex tech capabilities into actionable strategies for growth and efficiency.",
    icon: FaHandshake,
    iconColor: "text-[#a855f7]", // Purple
    iconBg: "bg-[#2a163f]",
    badge: null, // No badge in the screenshot for this card
    badgeStyle: "",
    features: [
      "Grid Modernization Strategies",
      "Regulatory Compliance Planning",
      "Cost-Benefit Analytics & ROI",
    ],
    buttonText: "VIEW CAPABILITIES",
    isFeatured: false,
    buttonStyle: "bg-[#1e293b]/50 text-white hover:bg-[#334155]",
    borderStyle: "border-gray-800/60",
  },
];