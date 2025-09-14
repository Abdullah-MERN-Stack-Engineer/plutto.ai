"use client";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, images }) => {
  return (
    <div className="bg-gray-800 rounded-3xl p-8 mx-auto" style={{ maxWidth: '900px' }}>
      <div className="flex gap-8">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          {/* Header with status */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>EcoFulse</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <span>About Us</span>
              <div className="w-4 h-4 border border-gray-500 rounded flex items-center justify-center">
                <div className="w-1 h-1 bg-gray-400"></div>
              </div>
            </div>
          </div>
          
          {/* Main title and button */}
          <div className="space-y-4 flex-row">
            <h2 className="text-white text-5xl font-light leading-tight">
              {title}
            </h2>
            <button className="bg-yellow-400 text-black px-5 py-2 rounded-full text-sm font-medium">
              Get Started
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {['DEVELOPMENT', 'DESIGN', 'MARKETING'].map((tag) => (
              <span key={tag} className="border border-gray-600 text-gray-300 px-3 py-1 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>

          {/* Categories */}
          <div className="flex gap-4 text-xs text-gray-400">
            <span>WEB DEVELOPMENT</span>
            <span>BRANDING</span>
            <span>BUSINESS</span>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center gap-3 text-gray-400">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className={`w-2 h-1 rounded-full ${
                  i === 1 ? 'bg-white' : 'bg-gray-600'
                }`}></div>
              ))}
            </div>
            <span className="text-xs">01 / 05</span>
          </div>
        </div>

        {/* Right Images Grid - Exact layout from image */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-3" style={{ height: '400px' }}>
            {/* Top left - Team hands */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-orange-400 to-red-500">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-xs opacity-70">Team</span>
              </div>
            </div>
            
            {/* Top right - Runner (tall) */}
            <div className="rounded-lg overflow-hidden row-span-2 bg-gradient-to-br from-amber-300 to-orange-400">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-xs opacity-70">Runner</span>
              </div>
            </div>
            
            {/* Middle left - Workout */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-xs opacity-70">Workout</span>
              </div>
            </div>
            
            {/* Bottom left - Training */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-blue-400 to-cyan-500">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-xs opacity-70">Training</span>
              </div>
            </div>
            
            {/* Bottom right - Community with badge */}
            <div className="rounded-lg overflow-hidden bg-gradient-to-br from-green-400 to-emerald-500 relative">
              <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
                Try now
              </div>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-xs opacity-70">Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;