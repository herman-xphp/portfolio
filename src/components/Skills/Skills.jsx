import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Linux"],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white animate-fade-in">
        Skills & Technologies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.category}
            className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 hover-lift animate-scale-in"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-white text-center gradient-text">
              {category.category}
            </h3>

            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm md:text-base font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-float"
                  style={{
                    animationDelay: `${
                      categoryIndex * 0.2 + skillIndex * 0.1
                    }s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:mt-12 animate-fade-in-up">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center text-white">
          Other Technologies
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
          {[
            "Redux",
            "GraphQL",
            "Jest",
            "Webpack",
            "Nginx",
            "Redis",
            "Elasticsearch",
            "Kubernetes",
          ].map((tech, index) => (
            <div
              key={tech}
              className="bg-gray-700 rounded-lg p-3 md:p-4 text-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-gray-300 font-medium text-sm md:text-base">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
