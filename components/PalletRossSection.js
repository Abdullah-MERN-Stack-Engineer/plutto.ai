"use client";
import { useState, useEffect, useRef } from "react";

const PalletRossSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4, rootMargin: "-10% 0px -10% 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      id: 1,
      bgImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      rotation: "-7deg",
      translateX: -120,
      zIndex: 1,
      content: "Design"
    },
    {
      id: 2,
      bgImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      rotation: "-3deg",
      translateX: -300,
      zIndex: 2,
      content: "Art"
    },
    {
      id: 3,
      bgImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      rotation: "0deg",
      translateX: 20,
      zIndex: 3,
      content: "Sports"
    },
    {
      id: 4,
      bgImage: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      rotation: "3deg",
      translateX: 200,
      zIndex: 4,
      content: "Music"
    },
    {
      id: 5,
      bgImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      rotation: "5deg",
      translateX: 350,
      zIndex: 5,
      content: "Photo"
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Content Card */}
        <div className="bg-gray-50 rounded-[2rem] p-6 md:p-10 mb-8 relative overflow-hidden shadow-2xl w-6xl max-w-6xl mx-auto">
          {/* Header Navigation */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-emerald-500 rounded-sm"></div>
              <span className="font-semibold text-gray-800 text-lg">Pallet Ross</span>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm text-gray-600">
              <span className="hover:text-gray-800 cursor-pointer">Get Started</span>
              <span className="hover:text-gray-800 cursor-pointer">Create strategy</span>
              <span className="hover:text-gray-800 cursor-pointer">Pricing</span>
              <span className="hover:text-gray-800 cursor-pointer">Contact</span>
              <span className="hover:text-gray-800 cursor-pointer">Solution</span>
              <span className="hover:text-gray-800 cursor-pointer">E-Commerce</span>
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-gray-300 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-400 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            A place to display your
            <br />
            masterpiece.
          </h1>

          {/* Cards Container */}
          <div className="relative h-64 mb-12 flex items-center justify-center">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className="absolute top-1/2 left-1/2 w-48 h-64 rounded-2xl shadow-2xl transition-all duration-1200 ease-out"
                style={{
                  background: card.bgImage,
                  transform: isVisible
                    ? `translate(-50%, -50%) rotate(${card.rotation}) translateX(${card.translateX}px) translateY(0px)`
                    : "translate(-50%, -50%) rotate(0deg) translateX(0px) translateY(0px)",
                  zIndex: card.zIndex,
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="w-full h-full bg-white rounded-2xl p-4 m-1 shadow-inner">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Card Content */}
                    <div className="absolute inset-2 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-gray-700 mb-1">{card.content}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Collection</div>
                      <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Speech Bubbles */}
            <div
              className={`absolute top-8 left-1/4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-800 shadow-lg ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-75"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              $200k
            </div>
            <div
              className={`absolute top-12 right-1/4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-800 shadow-lg ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-75"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              Top seller
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Artists can display their masterpieces, and buyers can discover and
            purchase works that resonate with them.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center space-x-6">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
              Join for $9/month
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors font-medium underline">
              Read more
            </button>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-left pl-4">
          <h2 className="text-white text-3xl font-bold mb-2">Pallet ross</h2>
          <p className="text-gray-400 text-lg">A place to display your masterpiece</p>
        </div>
      </div>
    </div>
  );
};

// Extra value: Adding smooth scroll behavior and performance optimization
if (typeof window !== 'undefined') {
  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
}

export default PalletRossSection;