"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TestimonialPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

  return (
    <div ref={containerRef} className="h-screen relative">
      <motion.div 
        className="sticky top-0 h-screen bg-black z-30 flex items-center justify-center"
        style={{ y }}
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          {/* Top decorative line */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-16"></div>
          
          {/* Main testimonial text */}
          <blockquote className="text-white text-2xl md:text-3xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            "The design, the functionality, the attention to detail — everything about our project was spot on."
          </blockquote>
          
          {/* Attribution */}
          <div className="text-gray-400 text-lg">
            <p className="mb-1">— Maya Rao, Creative Director</p>
            <p>at Zenith Studios</p>
          </div>
          
          {/* Side text elements */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm max-w-xs hidden lg:block">
            <p>was seamless</p>
            <p>ctly what we</p>
            <p>d more.</p>
          </div>
          
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-600 text-sm max-w-xs text-right hidden lg:block">
            <p>Pluto.ai transform</p>
            <p>and the feel</p>
            <p>overwhelm</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default TestimonialPage;