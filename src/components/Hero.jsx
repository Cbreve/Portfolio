const Hero = () => {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Unlock the Latest in Tech Innovation
          </h1>
          <p className="text-gray-600 mb-8">
            Stay ahead of competition with cutting-edge technology solutions that drive growth and innovation.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
        <div className="flex-1">
          <img src="/hero-image.png" alt="Tech Innovation" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero 