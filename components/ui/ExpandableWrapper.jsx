"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export function ExpandableWrapper({
  children,
  collapsedHeight = 800,
  viewAllText = "View All",
  viewLessText = "View Less",
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div className={`relative ${className}`}>
      <motion.div
        animate={{ height: isExpanded ? 'fit-content' : collapsedHeight }}
        initial={false}
        transition={{ duration: 0.2, ease: "easeIn" }}
        className="overflow-hidden"
      >
        <div ref={contentRef}>
          {children}
        </div>
      </motion.div>

      {/* Radial blur effect at bottom when collapsed */}
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-b from-transparent via-black/70 to-black pointer-events-none rounded-t-[60px] mask-corners" />
      )}

      {/* Toggle button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white flex items-center justify-center gap-1.5 backdrop-blur-sm transition-all duration-200 px-4 py-2 rounded-lg font-semibold"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-2" />
              {viewLessText}
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-2" />
              {viewAllText}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
