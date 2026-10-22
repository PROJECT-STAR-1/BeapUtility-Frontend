// data/resources.js
import { FaFilePdf, FaChartPie, FaBookOpen, FaTrophy } from "react-icons/fa";

export const resourcesData = [
  {
    title: "BEAPUtility Factsheet",
    description: "2026 Executive Summary & Capabilities Briefing.",
    icon: FaFilePdf,
    iconColor: "text-[#f87171]", // Red
    linkText: "Download PDF",
    linkIcon: "↓", // Down arrow
  },
  {
    title: "ESG & Impact Report",
    description: "Water conservation & carbon mitigation figures across Africa.",
    icon: FaChartPie,
    iconColor: "text-[#2dd4bf]", // Teal
    linkText: "Download PDF",
    linkIcon: "↓",
  },
  {
    title: "BEAPOne Technical Spec",
    description: "Open API & IoT cloud architecture blueprint.",
    icon: FaBookOpen,
    iconColor: "text-[#38bdf8]", // Blue
    linkText: "Download Spec",
    linkIcon: "↓",
  },
  {
    title: "Brand Awards & Gallery",
    description: "Recognitions in African IoT & utility innovation.",
    icon: FaTrophy,
    iconColor: "text-[#fbbf24]", // Yellow/Gold
    linkText: "View Press Kit",
    linkIcon: "→", // Right arrow
  },
];