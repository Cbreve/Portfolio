const Services = () => {
  const services = [
    {
      title: "Cyber Security",
      description: "Protect your digital assets with our advanced security solutions",
      image: "/security.png"
    },
    {
      title: "App Development",
      description: "Custom mobile and web applications for your business needs",
      image: "/app-dev.png"
    },
    {
      title: "IT Consultancy",
      description: "Expert guidance for your digital transformation journey",
      image: "/consultancy.png"
    }
  ]

  return (
    <section className="w-full py-16 px-6 md:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Our Advanced Tech Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <img src={service.image} alt={service.title} className="w-full mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 