// data/howWeDoIt.js
import { FaCubes, FaTasks } from "react-icons/fa";

export const executionArchitecture = [
  {
    title: "Development Frameworks",
    description: "We conceptualize, design, test, and deploy integrated hardware and software ecosystems to unlock long-term asset value.",
    icon: FaCubes,
    iconColor: "text-[#2dd4bf]", // Teal
    innerCards: [
      {
        title: "Direct Deployment",
        description: "Direct delivery to enterprise & end-users.",
      },
      {
        title: "Ecosystem Development",
        description: "Enabling OEMs and developers to monetize.",
      },
      {
        title: "Value Chain Integration",
        description: "Connecting suppliers, distributors, & billing.",
      },
      {
        title: "Franchise & Partner Dev",
        description: "Local entrepreneurship & regional scaling.",
      },
    ],
  },
  {
    title: "Execution & Management",
    description: "Continuous operational oversight, joint venture leadership, and portfolio stewardship ensuring maximum SLA uptime.",
    icon: FaTasks,
    iconColor: "text-[#38bdf8]", // Blue
    innerCards: [
      {
        title: "Joint Venture Development",
        description: "Co-investing with public & private entities.",
      },
      {
        title: "Program & Project Mgmt",
        description: "Turnkey engineering & rollout execution.",
      },
      {
        title: "Portfolio Management",
        description: "Multi-utility monitoring & yield optimization.",
      },
      {
        title: "Sustainability & Impact",
        description: "ESG compliance, carbon tracking & social good.",
      },
    ],
  },
];