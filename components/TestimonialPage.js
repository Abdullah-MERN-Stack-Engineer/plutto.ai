"use client";

const TestimonialPage = () => {
  return (
    <div className="h-screen bg-black relative z-10 flex items-center justify-center -mt-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="w-72 xl:w-[600px] md:w-96 h-px bg-gradient-to-r from-blue-600 via-pink-600 to-transparent mx-auto mb-8 md:mb-16"></div>
        
        <blockquote className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          &ldquo;The design, the functionality, the attention to detail — everything about our project was spot on.&rdquo;
        </blockquote>
        
        <div className="text-gray-400 text-base md:text-lg">
          <p className="mb-1">— Maya Rao, Creative Director</p>
          <p>at Zenith Studios</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;