"use client";
import { motion } from "framer-motion";
import Header from "./Header";

const LandingPage = ({ showContent }) => (
  <div className="h-screen bg-white overflow-hidden relative">
    {showContent && (
      <>

        {/* Main Content */}
        <div className="flex relative h-full">
          <motion.div 
            className="flex-1 px-6 pt-48"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="max-w-md pt-16">
              <p className="text-black text-base leading-relaxed">
                Plutto.ai crafts websites, apps, brands, and AI-powered solutions
                — delivering everything from design to development to help
                businesses innovate, grow, and stand out online.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="w-48 pr-12 pt-48"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="space-y-1 text-right pt-16">
              <div className="text-black">Documentation</div>
              <div className="text-black">Tools</div>
              <div className="text-black">References</div>
              <div className="text-black">Tutorials</div>
            </div>
          </motion.div>
        </div>

        {/* Centered PLUTTO.AI Text */}
        <motion.div 
          className="absolute -bottom-80 inset-0 flex items-center justify-center pointer-events-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div
            className="text-black"
            style={{ fontSize: "19rem", lineHeight: "0.8", letterSpacing: "0.02em" }}
          >
            PLUTTO.AI
          </div>
        </motion.div>

        {/* Black Rectangle at Bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-16 bg-black"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </>
    )}
  </div>
);

export default LandingPage;