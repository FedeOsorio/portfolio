"use client";
import React from "react";

interface PanelTabProps {
  label: string;
  onClick: () => void;
  position: "left" | "right" | "top" | "bottom";
  isActive: boolean;
  shouldPulse?: boolean;
}

const PanelTab: React.FC<PanelTabProps> = ({ label, onClick, position, isActive, shouldPulse }) => {
  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full cursor-pointer bg-slate-950/70 backdrop-blur-md transition-all duration-300 flex items-center justify-center pointer-events-auto border-slate-700/50 group
        ${position === "right" ? "border-l" : ""}
        ${position === "left" ? "border-r" : ""}
        ${position === "bottom" ? "border-t" : ""}
        ${position === "top" ? "border-b" : ""}
      `}
    >
      {shouldPulse && (
        <span className={`absolute flex h-2.5 w-2.5 z-30
          ${(position === "left" || position === "right") ? "top-6 left-1/2 -translate-x-1/2" : "right-6 top-1/2 -translate-y-1/2"}
        `}>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
        </span>
      )}
      <span className={`progressive-text-fill font-bold tracking-[0.2em] uppercase whitespace-nowrap
        ${(position === "bottom" || position === "top") ? "" : "panel-tab"}
      `}>
        {label}
      </span>
    </div>
  );
};

export default PanelTab;
