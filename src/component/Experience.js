import React, { useState, useEffect, useRef } from "react";

const AnimatedReviewsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    happiness: 0,
    experience: 0,
    awards: 0,
  });

  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animate numbers when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const targets = {
      projects: 100,
      happiness: 95,
      experience: 5,
      awards: 10,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        projects: Math.floor(targets.projects * easeOutQuart),
        happiness: Math.floor(targets.happiness * easeOutQuart),
        experience: Math.floor(targets.experience * easeOutQuart),
        awards: Math.floor(targets.awards * easeOutQuart),
      });

      if (currentStep >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const reviewItems = [
    {
      number: counts.projects,
      suffix: "+",
      label: "Completed",
      sublabel: "Projects",
    },
    {
      number: counts.happiness,
      suffix: "+",
      label: "Client",
      sublabel: "Happiness",
    },
    {
      number: counts.experience,
      suffix: "+",
      label: "Years of",
      sublabel: "Experience",
    },
    {
      number: counts.awards,
      suffix: "+",
      label: "Awards",
      sublabel: "Won",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-8">
      <div ref={sectionRef} className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Achievements</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Numbers that reflect my dedication to delivering exceptional results
            and building lasting client relationships.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {reviewItems.map((item, index) => (
            <div
              key={index}
              className={`text-center group hover:scale-105 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}>
              <div className="relative">
                {/* Main card */}
                <div
                  className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8
                 hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/90">
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-mono">
                    <span className="text-purple-400">{item.number}</span>
                    <span className="text-purple-500">{item.suffix}</span>
                  </div>

                  {/* Labels */}
                  <div className="space-y-1">
                    <div className="text-gray-300 font-medium text-sm md:text-base">
                      {item.label}
                    </div>
                    <div className="text-gray-400 font-medium text-sm md:text-base">
                      {item.sublabel}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add some subtle background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default AnimatedReviewsSection;
