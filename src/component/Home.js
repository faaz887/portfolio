import React, { useState, useEffect } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Download,
  Menu,
  Sun,
  X,
} from "lucide-react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 relative z-50">
        <div
          className={`text-lg sm:text-xl font-bold transform transition-all duration-1000 
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}>
          <span className="text-purple-500 hover:text-purple-400 transition-colors duration-300">
            Faaz
          </span>{" "}
          Ali
        </div>

        {/* Desktop Navigation */}
        <div
          className={`hidden lg:flex space-x-6 xl:space-x-8 transform transition-all duration-1000 delay-200
           ${
             isVisible
               ? "translate-x-0 opacity-100"
               : "translate-x-10 opacity-0"
           }`}>
          <a
            href="Home"
            className="hover:text-purple-400 transition-all duration-300 hover:scale-110
           relative group text-sm xl:text-base">
            Home
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all 
            duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="Home"
            className="hover:text-purple-400 transition-all duration-300 
          hover:scale-110 relative group text-sm xl:text-base">
            About
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all
             duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="Home"
            className="hover:text-purple-400 transition-all duration-300
           hover:scale-110 relative group text-sm xl:text-base">
            Skills
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all
             duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="Home"
            className="hover:text-purple-400 transition-all duration-300
           hover:scale-110 relative group text-sm xl:text-base">
            Portfolio
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all
             duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="Home"
            className="hover:text-purple-400 transition-all duration-300 hover:scale-110
           relative group text-sm xl:text-base">
            Contact
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 
            transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 
          transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}>
          <div className="flex flex-col space-y-4 p-6">
            <a
              href="Home"
              className="hover:text-purple-400 transition-colors duration-300 text-center">
              Home
            </a>
            <a
              href="Home"
              className="hover:text-purple-400 transition-colors duration-300 text-center">
              About
            </a>
            <a
              href="Home"
              className="hover:text-purple-400 transition-colors duration-300 text-center">
              Skills
            </a>
            <a
              href="Home"
              className="hover:text-purple-400 transition-colors duration-300 text-center">
              Portfolio
            </a>
            <a
              href="Home"
              className="hover:text-purple-400 transition-colors duration-300 text-center">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-8 sm:right-20 w-1 h-1 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-8 sm:left-20 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-purple-600 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-1 h-1 bg-purple-300 rounded-full animate-bounce delay-700"></div>
      </div>

      {/* Main Content */}
      <div
        className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 
      lg:px-12 py-8 sm:py-12 lg:py-24 relative z-10">
        {/* Left Side - Text Content */}
        <div
          className={`w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left transform transition-all
           duration-1000 delay-300 ${
             isVisible
               ? "translate-y-0 opacity-100"
               : "translate-y-10 opacity-0"
           }`}>
          <div>
            <p className="text-sm sm:text-lg text-gray-300 mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 
            bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent hover:from-purple-400
             hover:to-white transition-all duration-500 leading-tight">
              Faaz Ali
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6">
              And I'm a{" "}
              <span className="text-purple-500 font-semibold relative">
                <span className="animate-pulse">Mern-Stack Developer</span>
                <span
                  className="absolute -bottom-1 left-0 w-full h-0.5 
                bg-gradient-to-r from-purple-500 to-purple-300 animate-pulse"></span>
              </span>
            </p>
          </div>

          <p
            className="text-gray-400 text-sm text-center sm:text-base lg:text-lg leading-relaxed max-w-full
           lg:max-w-md hover:text-gray-300 transition-colors duration-300 px-4 sm:px-0">
            I'm Faaz Ali, a passionate front-end developer specializing in
            transforming design concepts into interactive and intuitive web
            experiences using HTML, CSS, and JavaScript.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-3 sm:space-x-4 my-6 sm:my-8">
            <a
              href="http/fazi5019"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r
             hover:from-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-12
              hover:shadow-lg hover:shadow-pink-500/50 group relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 opacity-0 group-hover:opacity-100
               transition-opacity duration-300 rounded-full"></div>
              <Instagram
                size={16}
                className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform 
                duration-300 relative z-10 group-hover:animate-pulse"
              />
            </a>
            <a
              href="fazi5019"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center
             hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg
              hover:shadow-blue-500/50 group relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100
               transition-opacity duration-300 rounded-full"></div>
              <Twitter
                size={16}
                className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform 
                duration-300 relative z-10 group-hover:animate-bounce"
              />
            </a>
            <a
              href="fazi5019"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center
             hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-blue-600/50 group relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Facebook
                size={16}
                className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform 
                duration-300 relative z-10 group-hover:animate-pulse"
              />
            </a>
            <a
              href="fazi5019"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center
             hover:bg-blue-700 transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg
              hover:shadow-blue-700/50 group relative overflow-hidden">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 
              group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <Linkedin
                size={16}
                className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 
                relative z-10 group-hover:animate-bounce"
              />
            </a>
          </div>

          {/* Download CV Button */}
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 
          rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
           hover:shadow-purple-500/50 group relative overflow-hidden text-sm sm:text-base mx-auto lg:mx-0">
            <span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0
             group-hover:opacity-100 transition-opacity duration-300"></span>
            <Download
              size={16}
              className="sm:w-4 sm:h-4 relative z-10 group-hover:animate-bounce"
            />
            <span className="relative z-10">Download CV</span>
          </button>
        </div>

        {/* Right Side - Profile Images */}
        <div
          className={`w-full lg:w-1/2 flex justify-center items-center mt-8 sm:mt-12 lg:mt-0 transform transition-all duration-1000 
            delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}>
          <div className="relative scale-75 sm:scale-90 md:scale-100">
            {/* Large Circle */}
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 sm:border-4
             border-purple-500 overflow-hidden relative hover:border-purple-400 transition-all duration-500 
             hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 group">
              <div
                className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center
               justify-center group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-500">
                <div
                  className="w-56 h-56 sm:w-72 sm:h-72 lg:w-88 lg:h-88 rounded-full bg-gray-700 flex items-center 
                justify-center text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-300 group-hover:text-purple-200 
                transition-all duration-300 hover:scale-110">
                  <span className="animate-pulse">FA</span>
                </div>
              </div>
              {/* Rotating border effect */}
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent 
              bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 
              group-hover:animate-spin transition-opacity duration-500"
                style={{ animationDuration: "3s" }}></div>
            </div>

            {/* Small Circle */}
            <div
              className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-24 h-24 sm:w-32 sm:h-32
             lg:w-40 lg:h-40 rounded-full border-2 sm:border-4 border-purple-500
              overflow-hidden hover:border-purple-400 transition-all duration-500
               hover:scale-110 hover:shadow-xl hover:shadow-purple-500/40 group
                animate-bounce"
              style={{ animationDuration: "3s" }}>
              <div
                className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center 
              justify-center group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-500">
                <div
                  className="w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full bg-gray-700 flex items-center 
                justify-center text-lg sm:text-2xl font-bold text-purple-300
                 group-hover:text-purple-200 transition-all duration-300 hover:rotate-12">
                  <span className="animate-pulse">FA</span>
                </div>
              </div>
            </div>

            {/* Floating particles around images */}
            <div
              className="absolute -top-2 sm:-top-4 left-1/2 w-1.5 sm:w-2 h-1.5 sm:h-2
             bg-purple-400 rounded-full animate-ping"></div>
            <div
              className="absolute top-1/2 -left-2 sm:-left-4 w-1 sm:w-1.5 h-1 sm:h-1.5
             bg-purple-300 rounded-full animate-pulse delay-300"></div>
            <div
              className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 w-1 h-1
             bg-purple-500 rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>

      {/* Mobile Card - Enhanced */}
      <div
        className={`lg:hidden mx-4 sm:mx-6 mb-6 sm:mb-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
        <div
          className="bg-gray-800 rounded-2xl p-4 sm:p-6 border
         border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg
          hover:shadow-purple-500/20 hover:scale-105">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2
             border-purple-500 overflow-hidden hover:border-purple-400 transition-all duration-300 hover:scale-110 group flex-shrink-0">
              <div
                className="w-full h-full bg-gradient-to-br from-purple-600
               to-purple-800 flex items-center justify-center group-hover:from-purple-500 group-hover:to-purple-700 transition-all duration-500">
                <div className="text-white font-bold text-sm sm:text-base animate-pulse">
                  FA
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between flex-1 min-w-0">
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-bold hover:text-purple-400 transition-colors duration-300 truncate">
                  Faaz Ali
                </h3>
                <p className="text-purple-400 text-xs sm:text-sm animate-pulse">
                  And I'm a Web Designer
                </p>
              </div>
              <div className="flex space-x-2 flex-shrink-0">
                <Sun
                  size={16}
                  className="sm:w-4 sm:h-4 text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:rotate-180"
                />
                <Menu
                  size={16}
                  className="sm:w-4 sm:h-4 text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          <p
            className="text-gray-400 text-xs sm:text-sm mb-4 hover:text-gray-300 transition-colors duration-300
           leading-relaxed">
            Hi I'm Faaz Ali, a passionate front-end developer specializing in
            transforming design concepts into seamless and interactive web
            experiences using HTML, CSS, and JavaScript.
          </p>

          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-3 sm:px-4 py-2 rounded-full
           text-xs sm:text-sm flex items-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-lg
            hover:shadow-purple-500/50 group">
            <Download
              size={12}
              className="sm:w-3 sm:h-3 group-hover:animate-bounce"
            />
            <span>Download CV</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        /* Custom responsive breakpoints */
        @media (max-width: 320px) {
          .text-3xl {
            font-size: 1.5rem;
          }
          .text-lg {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 1440px) {
          .text-7xl {
            font-size: 5rem;
          }
        }

        @media (min-width: 1920px) {
          .text-7xl {
            font-size: 6rem;
          }
        }
      `}</style>
    </div>
  );
}
