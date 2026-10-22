// data/channelEcosystem.js
import { FaBriefcase, FaUsers, FaStore, FaIndustry } from "react-icons/fa";

export const channelData = [
  {
    title: "Business Partners",
    description: "Streamlined operating protocols for rapid deployment.",
    icon: FaBriefcase,
    iconColor: "text-[#2dd4bf]", // Teal
    iconBg: "bg-[#0b3336]",
    list: [
      "Country Partner",
      "State Partner",
      "Regional Partner",
      "Area & Local Partner",
    ],
    tag: null,
  },
  {
    title: "End Users",
    description: "Seamless single portal application to manage all smart devices across brands.",
    icon: FaUsers,
    iconColor: "text-[#38bdf8]", // Blue
    iconBg: "bg-[#0c2a42]",
    list: null,
    tag: { 
      label: "Single Unified Mobile App", 
      style: "bg-[#0c2a42] text-[#38bdf8] border border-[#1e3a8a]" 
    },
  },
  {
    title: "Vendors & Retailers",
    description: "Authorized sales agents selling meter tokens and subscription add-ons.",
    icon: FaStore,
    iconColor: "text-[#c084fc]", // Purple
    iconBg: "bg-[#2a163f]",
    list: null,
    tag: { 
      label: "Commission POS\nNetwork", 
      style: "bg-[#2a163f] text-[#d8b4fe] border border-[#581c87]" 
    },
  },
  {
    title: "OEMs & ODMs",
    description: "Hardware manufacturers leveraging BEAP Cloud PaaS firmware SDKs.",
    icon: FaIndustry,
    iconColor: "text-[#fbbf24]", // Yellow/Orange
    iconBg: "bg-[#3f2a11]",
    list: null,
    tag: { 
      label: "Hardware Agnostic\nSDK", 
      style: "bg-[#3f2a11] text-[#fbbf24] border border-[#78350f]" 
    },
  },
];