import { gridPattern } from '../styles/shared'

const Hero = () => {
  return (
    <div className="bg-brand-dark relative">
      <div className="absolute inset-0 opacity-20" style={gridPattern} />
      
      <div className="relative px-6 pt-20 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left Content */}
            <div className="space-y-8 text-white">
              <h1 className="text-7xl font-bold leading-tight">
                Unlock the <br />
                Latest in Tech <br />
                <span className="text-brand-primary">Innovation</span>
              </h1>
              <p className="text-brand-text text-lg max-w-xl">
                Stay informed with our expert reviews, insightful articles, and comprehensive guides to navigate the ever-evolving tech landscape.
              </p>
              <button className="bg-brand-primary hover:bg-brand-primary/90 px-8 py-4 rounded-full flex items-center gap-3 text-lg transition-all duration-300 hover:scale-105">
                Discover Now
                <i className="fas fa-arrow-right text-lg -rotate-45" />
              </button>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="relative bg-brand-card rounded-card p-6 z-10">
                <img 
                  src="https://via.placeholder.com/600x400" 
                  alt="Tech professional"
                  className="w-full h-full object-cover rounded-2xl" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 