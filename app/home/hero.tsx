import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl">
          {/* Text Content */}
          <div className="text-center lg:text-left z-10 max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Unlock the Latest in Tech <span className="text-blue-600">Innovation</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-300">
              Stay informed with our expert reviews, insightful articles, and comprehensive guides to navigate the ever-evolving tech landscape.
            </p>
            <a 
              href="/services" 
              className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg"
            >
              Discover Now <span className="inline-block ml-2">→</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Background Image */}
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d1a73458bb01af5a2093a_Banner%20Image%20Tech.svg"
              alt="Tech Banner" 
              className="absolute inset-0 w-full h-full object-contain z-10" 
            />
            {/* Person Working Image */}
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot%202024-06-27%20at%2010.56.39-p-500.webp"
              alt="Person working" 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 object-contain rounded-3xl shadow-lg z-20" 
            />
            {/* Icons */}
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d218ce38eb57331b53962_Icon_5.svg"
              alt="Icon 1"
              className="absolute top-1/4 left-1/4 w-6 h-6 md:w-8 md:h-8 z-30"
            />
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d20430bdeb0613eb7260a_Icon_3.svg"
              alt="Icon 2"
              className="absolute top-1/4 right-1/4 w-6 h-6 md:w-8 md:h-8 z-30"
            />
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d20e58f08a445ae96240d_Icon_4.svg"
              alt="Icon 3"
              className="absolute bottom-1/4 left-1/4 w-6 h-6 md:w-8 md:h-8 z-30"
            />
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d1ea1458bb01af5a47b39_Icon_1.svg"
              alt="Icon 4"
              className="absolute bottom-1/4 right-1/4 w-6 h-6 md:w-8 md:h-8 z-30"
            />
            <img 
              src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d1f159491ad7d8138a56e_Icon_2.svg"
              alt="Icon 5"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;