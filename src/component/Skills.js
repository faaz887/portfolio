import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      name: "React",
      type: "svg",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <circle cx="12" cy="12" r="2" fill="#61dafb" />
          <path
            d="M12,1c15,0,11,9,11,11s4,11-11,11-11-9-11-11S-3,1,12,1z"
            fill="none"
            stroke="#61dafb"
            strokeWidth="1"
          />
          <path
            d="M12,1c-15,0-11,9-11,11s-4,11,11,11,11-9,11-11S27,1,12,1z"
            fill="none"
            stroke="#61dafb"
            strokeWidth="1"
          />
          <path
            d="M1,12c0,15,9,11,11,11s11,4,11-11-9-11-11-11S1-3,1,12z"
            fill="none"
            stroke="#61dafb"
            strokeWidth="1"
          />
        </svg>
      ),
    },
    {
      name: "JavaScript",
      type: "div",
      logo: (
        <div className="w-12 h-12 bg-yellow-400 rounded flex items-center justify-center">
          <span className="text-black font-bold text-lg">JS</span>
        </div>
      ),
    },
    {
      name: "TypeScript",
      type: "div",
      logo: (
        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white font-bold text-lg">TS</span>
        </div>
      ),
    },
    {
      name: "CSS",
      type: "div",
      logo: (
        <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">CSS</span>
        </div>
      ),
    },
    {
      name: "Node.js",
      type: "svg",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path
            d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 
            1.36l7.44 4.3c.46.26 1.04.26 1.5 0l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-
            .3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"
            fill="#68a063"
          />
        </svg>
      ),
    },
    {
      name: "Python",
      type: "svg",
      logo: (
        <svg viewBox="0 0 24 24" className="w-12 h-12">
          <path d="M14.25.18l..." fill="#306998" />
          <path d="M12.74 23.64l..." fill="#ffd43b" />
        </svg>
      ),
    },
    // Add remaining skills here like MongoDB, Next.js, Vue.js, Angular...
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Here are some of the technologies I work with to build amazing
            digital experiences.
          </p>
        </div>

        {/* Marquee Container */}
        {/* <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex animate-marquee hover:pause-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 group cursor-pointer">
                <div
                  className="
                    relative p-8 rounded-2xl bg-gray-900/80 border border-gray-700
                    transform transition-all duration-200 ease-out
                    group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/20
                    min-w-[180px] h-[140px] flex flex-col items-center justify-center
                    group-hover:bg-gray-800/90 group-hover:border-purple-500/50
                  ">
                  <div className="mb-3 transition-transform duration-200 group-hover:scale-110">
                    {skill.logo}
                  </div>
                  <h3 className="text-white font-semibold text-base text-center group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Always learning, always growing
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse delay-75"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default SkillsSection;
