// data/whatWeDo.js
import { FaCogs, FaWater, FaClone, FaBrain, FaLaptopCode, FaCloud, FaBolt, FaServer, FaSync } from "react-icons/fa";

export const whatWeDoTabs = [
  {
    id: "digital-phygital",
    label: "Digital & Phygital",
    cards: [
      {
        title: "IoT Based Solutions",
        description: "End-to-end hardware sensor telemetry, smart gateway management, and remote device monitoring platforms.",
        icon: FaCogs,
        iconColor: "text-[#2dd4bf]", // Teal
        tags: [],
      },
      {
        title: "Phygital Solutions",
        description: "Seamless fusion of physical infrastructure (water meters, solar grids, batteries) with live cloud software control.",
        icon: FaWater,
        iconColor: "text-[#38bdf8]", // Blue
        tags: [],
      },
      {
        title: "Digital Twins",
        description: "Real-time 3D and data replicas of physical utility networks, enabling predictive maintenance and stress testing.",
        icon: FaClone,
        iconColor: "text-[#2dd4bf]", // Teal
        tags: [],
      },
      {
        title: "AIoT Solutions",
        description: "Embedding Artificial Intelligence into IoT endpoints to process automated decisions directly at device gateways.",
        icon: FaBrain,
        iconColor: "text-[#a855f7]", // Purple
        tags: [],
      },
      {
        title: "Digital Solutions",
        description: "Custom enterprise portals, tenant billing dashboards, and automated service ticket management tools.",
        icon: FaLaptopCode,
        iconColor: "text-[#38bdf8]", // Blue
        tags: [],
      },
    ],
  },
  {
    id: "software-architecture",
    label: "Software & Architecture",
    cards: [
      {
        title: "Cloud-Native Solutions",
        description: "Architectures built specifically for elastic cloud environments utilizing microservices, Kubernetes, and Docker containers for zero-downtime scaling.",
        icon: FaCloud,
        iconColor: "text-[#2dd4bf]", // Teal
        tags: [{ label: "Kubernetes &\nMicroservices", color: "teal" }],
      },
      {
        title: "Low-Code / No-Code Solutions",
        description: "Visual drag-and-drop workflow platforms allowing non-developers to create automation scripts, custom rules, and billing workflows fast.",
        icon: FaBolt,
        iconColor: "text-[#eab308]", // Yellow
        tags: [{ label: "Rapid Workflow\nBuilder", color: "yellow" }],
      },
      {
        title: "Edge Computing Solutions",
        description: "Local data processing handled right near physical water meters or energy grids to ensure zero latency and offline operational resilience.",
        icon: FaServer,
        iconColor: "text-[#10b981]", // Green
        tags: [{ label: "Sub-Millisecond\nResponse", color: "green" }],
      },
      {
        title: "Legacy Modernization Solutions",
        description: "Upgrading legacy municipal and industrial hardware tech stacks to cloud-connected IoT interfaces without full hardware replacement.",
        icon: FaSync,
        iconColor: "text-[#38bdf8]", // Blue
        tags: [{ label: "Retrofit\nCompatible", color: "blue" }],
      },
    ],
  },
  {
    id: "data-intelligence",
    label: "Data & Intelligence",
    cards: [
      {
        title: "Predictive Analytics Engine",
        description: "Machine learning models that forecast utility demand and equipment failures before they happen.",
        icon: FaBrain,
        iconColor: "text-[#a855f7]",
        tags: [{ label: "AI Forecasting", color: "purple" }],
      },
      {
        title: "Real-Time Dashboards",
        description: "Live visualization of millions of data points streaming from edge devices across multiple regions.",
        icon: FaLaptopCode,
        iconColor: "text-[#2dd4bf]",
        tags: [{ label: "Live Telemetry", color: "teal" }],
      },
    ],
  },
  {
    id: "security-trust",
    label: "Security & Trust",
    cards: [
       {
        title: "Zero Trust Architecture",
        description: "Identity-based security framework ensuring no device or user is trusted by default.",
        icon: FaServer,
        iconColor: "text-[#ef4444]",
        tags: [{ label: "End-to-End\nEncryption", color: "red" }],
      },
    ]
  },
  {
    id: "immersive-tech",
    label: "Immersive Tech",
    cards: []
  },
  {
    id: "xaas-everything",
    label: "XaaS Everything",
    cards: []
  }
];