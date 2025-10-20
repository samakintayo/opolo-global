import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden 
  px-4 sm:px-6 lg:px-8 
  pt-20 pb-16 
  lg:pt-32 lg:pb-28" id="home">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #9333ea 0%, #0f172a 50%, #f97316 100%)'
        }}></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-5 sm:top-20 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-blue-500/20 animate-float"></div>
      <div
        className="absolute top-32 right-5 sm:top-40 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-pink-500/30 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-10 left-1/3 sm:bottom-20 sm:left-1/4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-green-500/25 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-blue-500/20 bg-blue-50 text-blue-600 mb-6 sm:mb-8 text-xs sm:text-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="font-medium">
              Innovation Programs Across Africa
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-pink-500 bg-clip-text text-transparent leading-tight">
            Discover Programs that Drive Innovation and Growth
          </h1>

          {/* Subheading */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
            From bootcamps to corporate innovation, from venture building to
            talent development, explore our full suite of programs and find
            where you fit in.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <button
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md transition animate-glow"
              onClick={() =>
                document
                  .getElementById("programs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Programs
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
     
          </div>

        
          {/* <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 max-w-xs sm:max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                500+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Participants Trained
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-pink-500 mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Startups Launched
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">
                10+
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Countries Served
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                95%
              </div>
              <div className="text-xs sm:text-sm text-gray-500">
                Success Rate
              </div>
            </div>
          </div>*/}
        </div> 
      </div>
    </section>
  );
};
export default Hero;
