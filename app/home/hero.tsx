// Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Unlock the Latest in Tech <span className="text-red-500">Innovation</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Stay informed with our expert reviews, insightful articles, and comprehensive guides to navigate the ever-evolving tech landscape.
                    </p>
                    <a href="/services" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                        Discover Now <span className="inline-block ml-2">→</span>
                    </a>
                </div>
                <div className="relative flex flex-col items-center md:items-start">
                    <img 
                        src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/668bc631552245e0b1f1f6ac_667d0d3673903a7f735aa1cc_Screenshot%202024-06-27%20at%2010.56.39-p-500.webp" 
                        loading="lazy" 
                        alt="Person working" 
                        className="w-full max-w-md mb-4 rounded-lg shadow-lg" 
                    />
                    <img 
                        src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d1a73458bb01af5a2093a_Banner%20Image%20Tech.svg" 
                        loading="lazy" 
                        alt="Tech Banner" 
                        className="w-full max-w-md mb-4 rounded-lg shadow-lg" 
                    />
                    {/* Icons */}
                    <div className="absolute top-0 left-0 flex flex-wrap justify-center w-full h-full">
                        <img 
                            src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d218ce38eb57331b53962_Icon_5.svg" 
                            loading="lazy" 
                            className="w-12 h-12 m-2" 
                            alt="Icon 1" 
                        />
                        <img 
                            src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d20e58f08a445ae96240d_Icon_4.svg" 
                            loading="lazy" 
                            className="w-12 h-12 m-2" 
                            alt="Icon 2" 
                        />
                        <img 
                            src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d20430bdeb0613eb7260a_Icon_3.svg" 
                            loading="lazy" 
                            className="w-12 h-12 m-2" 
                            alt="Icon 3" 
                        />
                        <img 
                            src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d1ea1458bb01af5a47b39_Icon_1.svg" 
                            loading="lazy" 
                            className="w-12 h-12 m-2" 
                            alt="Icon 4" 
                        />
                        <img 
                            src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667d1f159491ad7d8138a56e_Icon_2.svg" 
                            loading="lazy" 
                            className="w-12 h-12 m-2" 
                            alt="Icon 5" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;