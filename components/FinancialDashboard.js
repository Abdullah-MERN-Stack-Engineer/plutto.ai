"use client";
import {motion } from 'framer-motion'

const FinancialDashboard = () => {
  // Donut Chart Component
  const DonutChart = () => (
    <div className="flex items-center space-x-4">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" stroke="#f1f5f9" strokeWidth="10" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="#fb923c" strokeWidth="10" fill="none" 
            strokeDasharray="110 220" strokeLinecap="round" />
        </svg>
      </div>
      <div>
        <div className="text-xl font-bold text-gray-900">$1,235</div>
        <div className="text-sm text-gray-500">Sales</div>
      </div>
    </div>
  );

  // Line Chart Component
  const LineChart = () => (
    <div className="w-full h-20 mt-6">
      <svg className="w-full h-full" viewBox="0 0 200 80">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        <path d="M20,60 Q60,45 100,35 Q140,25 180,20 L180,80 L20,80 Z" fill="url(#gradient)" />
        <path d="M20,60 Q60,45 100,35 Q140,25 180,20" stroke="#3b82f6" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );

  // Pie Chart Component
  const PieChart = () => (
    <div className="relative w-20 h-20 mx-auto">
      <svg className="w-20 h-20" viewBox="0 0 42 42">
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" 
          strokeDasharray="100 0" />
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#3b82f6" strokeWidth="3" 
          strokeDasharray="35 65" strokeDashoffset="25" transform="rotate(-90 21 21)" />
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#f59e0b" strokeWidth="3" 
          strokeDasharray="25 75" strokeDashoffset="-10" transform="rotate(-90 21 21)" />
        <circle cx="21" cy="21" r="15.915" fill="none" stroke="#e2e8f0" strokeWidth="3" 
          strokeDasharray="40 60" strokeDashoffset="-35" transform="rotate(-90 21 21)" />
      </svg>
      <div className="absolute -top-2 -right-2 text-xs text-gray-500 bg-white px-1 rounded">11%</div>
    </div>
  );

  // Gauge Chart Component
const GaugeChart = ({
  ticks = 37,            // total tick marks
  radius = 70,           // radius of the gauge
  progress = 0.5,        // progress ratio [0–1]
  centerX = 100,
  centerY = 100,
  activeColor = "#3b82f6",   // Tailwind blue-500
  inactiveColor = "#e5e7eb", // Tailwind gray-200
}) => {
  // Arc covers 90° → 270° (open side down)
  const angleStep = 180 / (ticks - 1);
  const activeThreshold = 90 + 180 * progress;

  return (
    <div className="flex justify-center mt-4">
      <div className="relative w-56 h-28">
        <svg className="w-56 h-56" viewBox="0 0 200 200">
          {Array.from({ length: ticks }, (_, i) => {
            const angle = 90 + angleStep * i; // start at 90°, sweep to 270°
            const isMajorTick = i % 5 === 0;

            const innerRadius = isMajorTick ? radius - 12 : radius - 7;
            const outerRadius = radius;
            const rad = (angle * Math.PI) / 180;

            const x1 = centerX + innerRadius * Math.cos(rad);
            const y1 = centerY + innerRadius * Math.sin(rad);
            const x2 = centerX + outerRadius * Math.cos(rad);
            const y2 = centerY + outerRadius * Math.sin(rad);

            const strokeColor = angle <= activeThreshold ? activeColor : inactiveColor;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={strokeColor}
                strokeWidth={isMajorTick ? 2 : 1}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};








  // Arc Chart Component
  const ArcChart = ({ percentage = 58, size = 120, strokeWidth = 10 }) => {
  const radius = 45; 
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
      <div className="flex justify-center items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="rotate-[-90deg]" // rotate so arc starts at top
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress Arc */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#3b82f6"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </svg>
        {/* Percentage Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl md:text-2xl font-semibold text-gray-900">
            {percentage}%
          </span>
        </div>
      </div>
    </div>
  );
};

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative z-50">
      {/* Header Text */}
      <h2 className="text-white text-5xl font-light w-4xl text-center mb-16">
        Streamline Finances With Smart Features
      </h2>
      
      {/* Dashboard Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Real-Time Analytics */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Monitor your finances live with clear, intuitive dashboards.
          </p>
          <DonutChart />
        </div>

        {/* Automated Reports */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Reports</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Generate summaries instantly-no manual work needed.
          </p>
          <LineChart />
        </div>

        {/* Smart Budgeting */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Budgeting</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Plan and adjust with AI-powered budget suggestions.
          </p>
          <PieChart />
        </div>

        {/* Secure syncing */}
        <div className="bg-white rounded-3xl p-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure syncing</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Monitor your finances live with dashboards.
          </p>
          <GaugeChart />
        </div>

        {/* Growth Score */}
        <div className="bg-white rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Score</h3>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Generate summaries instantly.
          </p>
          <ArcChart />
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;