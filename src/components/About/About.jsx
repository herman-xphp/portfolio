import React from "react";

const About = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white animate-fade-in">
        About Me
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="animate-slide-in-left">
          <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            I'm a passionate full-stack developer with over 5 years of
            experience building modern web applications. I specialize in React,
            Node.js, and cloud technologies, creating scalable solutions that
            solve real-world problems.
          </p>

          <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            My journey in tech started with curiosity and has evolved into a
            deep passion for creating user-centric applications. I believe in
            writing clean, maintainable code and staying up-to-date with the
            latest industry trends.
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {["React", "Node.js", "TypeScript", "AWS", "Docker"].map(
              (skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-xs md:text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 hover-lift animate-slide-in-right">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white gradient-text">
            Experience
          </h3>
          <div className="space-y-3 md:space-y-4">
            {[
              {
                title: "Senior Developer",
                company: "TechCorp",
                period: "2022 - Present",
              },
              {
                title: "Full Stack Developer",
                company: "StartupX",
                period: "2020 - 2022",
              },
              {
                title: "Frontend Developer",
                company: "WebAgency",
                period: "2019 - 2020",
              },
            ].map((exp, index) => (
              <div
                key={exp.title}
                className="p-3 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h4 className="font-semibold text-white text-sm md:text-base">
                  {exp.title}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  {exp.company} • {exp.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
