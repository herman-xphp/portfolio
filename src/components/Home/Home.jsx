import React from "react";
import Typewriter from "react-typewriter-effect";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-[80vh] px-4 flex items-center justify-center">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800"></div>

      {/* Minimal Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white animate-fade-in">
              Herman
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6 text-gray-300 min-h-[2.5rem]">
              <Typewriter
                textStyle={{
                  color: "#d1d5db",
                  fontWeight: 500,
                  fontSize: "inherit",
                  background: "none",
                }}
                startDelay={200}
                cursorColor="#3b82f6"
                multiText={[
                  "Full Stack Developer",
                  "React Developer",
                  "Software Engineer",
                ]}
                multiTextDelay={2000}
                typeSpeed={80}
                deleteSpeed={40}
                multiTextLoop
              />
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-lg text-gray-400 animate-fade-in-up">
              Passionate developer creating innovative web solutions with modern
              technologies. Specialized in React, Node.js, and cloud
              architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#projects"
                className="px-6 md:px-8 py-3 md:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg text-sm md:text-base transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 md:py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-semibold transition-all duration-300 text-sm md:text-base transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Visual */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <span className="text-4xl font-bold text-white">H</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-700 rounded-full w-48 mx-auto"></div>
                    <div className="h-2 bg-gray-700 rounded-full w-40 mx-auto"></div>
                    <div className="h-2 bg-gray-700 rounded-full w-36 mx-auto"></div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionWrapper = React.forwardRef(({ id, children }, ref) => (
  <section
    id={id}
    ref={ref}
    className="max-w-4xl mx-auto px-3 md:px-4 py-8 md:py-12 min-h-[60vh] scroll-mt-16 md:scroll-mt-20"
  >
    {children}
  </section>
));

export default Hero;
