"use client";

import React, { useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { useChat } from "@/src/context/ChatContext";

export default function Chatbot() {
  const { isChatOpen, setIsChatOpen } = useChat();
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "👋 Hello! I am your BEAPUtility Enterprise Advisor. Ask me anything about our IoT PaaS platforms, BEAPWater, 5-tier pricing models, or African infrastructure rollouts!",
    },
  ]);
  const [input, setInput] = useState("");

  const suggestions = [
    "What is BEAPWater?",
    "Pricing Models",
    "Partner Models",
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { id: Date.now(), sender: "user", text: input },
    ];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "I'm a mock AI assistant for now! In the real version, I would connect to Gemini to answer that.",
        },
      ]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  if (!isChatOpen) return null;

  return (
    // Mobile: Full screen (w-full h-full, no rounded corners, fixed to bottom)
    // Desktop (sm and up): Floating widget (w-[380px], h-[600px], rounded corners, fixed bottom right)
    <div className="fixed z-[100] flex flex-col overflow-hidden bg-[#0b111a] border border-gray-800 shadow-2xl 
                    inset-0 w-full h-full rounded-none 
                    sm:inset-auto sm:bottom-4 sm:right-4 sm:w-[380px] sm:h-[600px] sm:max-h-[85vh] sm:rounded-xl">
      
      {/* --- HEADER --- */}
      <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between border-b border-gray-800 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00a8cc] to-[#005a7a] flex items-center justify-center shadow-[0_0_10px_rgba(0,168,204,0.3)]">
            <FaRobot className="text-white text-sm" />
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold leading-tight">BEAP Enterprise AI Assistant</h3>
            <p className="text-[#2dd4bf] text-[10px] font-mono">Gemini 1.5 Flash Powered</p>
          </div>
        </div>
        <button 
          onClick={() => setIsChatOpen(false)}
          className="text-gray-400 hover:text-white transition-colors p-2"
        >
          <FaTimes className="text-lg" />
        </button>
      </div>

      {/* --- CHAT AREA --- */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div 
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed ${
                msg.sender === "user" 
                  ? "bg-[#0284c7] text-white rounded-br-sm" 
                  : "bg-[#1e293b] text-gray-300 rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* --- SUGGESTIONS & INPUT --- */}
      <div className="p-3 border-t border-gray-800 bg-[#0b111a] shrink-0 pb-safe">
        
        {/* Quick Replies */}
        <div className="flex flex-wrap gap-2 mb-3">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="bg-[#111827] border border-gray-700 hover:border-gray-500 text-gray-300 text-[10px] px-3 py-1.5 rounded-md transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Input Field */}
        <form onSubmit={handleSend} className="flex items-center gap-2 bg-[#111827] border border-gray-700 rounded-lg px-3 py-2 focus-within:border-[#0284c7] transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask BEAP AI..."
            className="flex-1 bg-transparent border-none outline-none text-white text-xs placeholder-gray-500"
          />
          <button 
            type="submit"
            className="bg-[#0284c7] hover:bg-[#0369a1] text-white p-1.5 rounded-md transition-colors"
          >
            <FaPaperPlane className="text-[10px]" />
          </button>
        </form>
      </div>

    </div>
  );
}