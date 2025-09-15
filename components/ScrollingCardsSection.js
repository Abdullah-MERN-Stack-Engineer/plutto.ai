"use client";
import { useEffect, useRef, useState } from "react";

const ScrollingCardsSection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // How far we scrolled inside this section
      const scrolled = Math.min(
        Math.max(0, windowHeight - rect.top), // start when top hits
        rect.height // end when section bottom passes
      );

      setProgress(scrolled / rect.height);
    };

    handleScroll(); // run on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    {
      id: "01",
      title: "Connect Accounts",
      description: "Securely link your account and business tools in minutes.",
    },
    {
      id: "02",
      title: "Track in real-Time",
      description: "View all your financial data live on one clean dashboard.",
    },
    {
      id: "03",
      title: "Grow Smarter, Faster",
      description: "Use insights and reports to guide better business decisions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-black relative"
      style={{ height: `${cards.length * 100}vh` }} // give scroll space
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen sticky top-0">
        {/* Left column - fixed text */}
        <div className="flex items-center justify-center p-8">
          <div className="max-w-sm">
            <p className="text-gray-400 text-sm mb-4">How it works</p>
            <h2 className="text-white text-2xl lg:text-4xl font-light leading-tight">
              From setup to tool—just three simple steps.
            </h2>
          </div>
        </div>

        {/* Right column - stacked cards */}
        <div className="relative flex items-center justify-center">
          {cards.map((card, index) => {
            // slice section progress into equal ranges per card
            const perCard = 1 / cards.length;
            const cardProgress = Math.min(
              1,
              Math.max(0, (progress - index * perCard) / perCard)
            );

            const translateY = (1 - cardProgress) * 150; // from below
            const opacity = cardProgress;

            return (
              <div
                key={card.id}
                className="absolute w-full max-w-sm transition-transform duration-300"
                style={{
                  zIndex: index + 1,
                  transform: `translateY(${translateY}px)`,
                  opacity,
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-2xl relative">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {card.description}
                  </p>
                  <div className="absolute bottom-4 right-6 text-gray-400 text-lg font-light">
                    {card.id}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollingCardsSection;
