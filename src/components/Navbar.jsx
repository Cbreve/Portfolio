const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-6 md:px-16 bg-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-32" />
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Services</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        Contact Us
      </button>
    </nav>
  )
}

export default Navbar 