import "./our-team.css";

const OurTeam = () =>{
    return (
        <div className="overflow-x-hidden">
            <div className="grid-overlay"></div>
    {/* Dark Hero Section with Grid */}
    <div className="bg-brand-dark relative">
        <div className="grid-pattern absolute inset-0 opacity-20"></div>

        {/* Main Content */}
        <div className="relative">
           

            {/* Hero Section */}
            <div className="bg-brand-dark relative">
                {/* Grid Pattern Background */}
                <div className="grid-pattern absolute inset-0 opacity-20"></div>

                <div className="relative px-6 py-32">
                    <div className="max-w-6xl mx-auto">
                        {/* About Card */}
                        <div className="bg-brand-primary rounded-[2.5rem] px-24 py-32 text-center">
                            <h2 className="text-7xl font-bold text-white mb-8 font-poppins">
                                Our Team
                            </h2>
                            <p className="text-white text-2xl max-w-3xl mx-auto font-roboto leading-relaxed">
                                Our team is a diverse group of talented individuals united by a shared passion for
                                technology and innovation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Our Team Section */}

    <div className="bg-white px-6 py-24">
        <div className="max-w-7xl mx-auto">

            {/* Team Members Grid */}
            <div className="grid grid-cols-4 gap-8">
                {/* Team Member 1 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="Emma Jonson"className="w-full h-full object-cover" />
                        </div>
                        {/* Expand Icon */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Emma Jonson</h3>
                    <p className="text-brand-text">Lead Software Engineer</p>
                </div>

                {/* Team Member 2 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="Ava Davis"className="w-full h-full object-cover" />
                        </div>
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Ava Davis</h3>
                    <p className="text-brand-text">Data Scientist</p>
                </div>

                {/* Team Member 3 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="James Anderson"className="w-full h-full object-cover" />
                        </div>
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">James Anderson</h3>
                    <p className="text-brand-text">Chief Executive Officer</p>
                </div>

                {/* Team Member 4 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="William Harris"className="w-full h-full object-cover" />
                        </div>
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">William Harris</h3>
                    <p className="text-brand-text">Cybersecurity Specialist</p>
                </div>

                {/* Team Member 5 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="Emma Jonson"className="w-full h-full object-cover" />
                        </div>
                        {/* Expand Icon */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Emma Jonson</h3>
                    <p className="text-brand-text">Lead Software Engineer</p>
                </div>

                {/* Team Member 6 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="Emma Jonson"className="w-full h-full object-cover" />
                        </div>
                        {/* Expand Icon */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Emma Jonson</h3>
                    <p className="text-brand-text">Lead Software Engineer</p>
                </div>

                {/* Team Member 7 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="Emma Jonson"className="w-full h-full object-cover" />
                        </div>
                        {/* Expand Icon */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Emma Jonson</h3>
                    <p className="text-brand-text">Lead Software Engineer</p>
                </div>

                {/* Team Member 8 */}
                <div className="group">
                    <div className="relative mb-6">
                        <div className="aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden bg-brand-primary">
                            <img src="https://via.placeholder.com/400x400" alt="Emma Jonson" className="w-full h-full object-cover" />
                        </div>
                        {/* Expand Icon */}
                        <button
                            className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <i className="fas fa-expand text-brand-dark text-sm"></i>
                        </button>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark mb-2">Emma Jonson</h3>
                    <p className="text-brand-text">Lead Software Engineer</p>
                </div>
                
            </div>
        </div>
    </div>





    {/* Footer Section */}
    <footer className="bg-brand-dark px-6 py-16">
        <div className="max-w-7xl mx-auto">
            {/* Top Section */}
            <div className="flex justify-between items-start mb-16">
                <div className="flex items-center gap-2">
                    <img src="https://via.placeholder.com/32x32" alt="Tech Hub Logo" className="w-8 h-8" />
                    <span className="text-white text-xl">{"Let's Work With Us"}</span>
                </div>
                <button
                    className="text-brand-primary border border-brand-primary px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-brand-primary hover:text-white transition-all duration-300">
                    Book a Call
                    <i className="fas fa-arrow-right text-lg -rotate-45"></i>
                </button>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-4 gap-12">
                {/* Newsletter Section */}
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-4">Sign up for the Tech Hub weekly newsletter to get the
                        latest
                        updates.</p>
                    <div className="relative">
                        <input type="email" placeholder="Your Email Address"
                            className="w-full pl-4 pr-12 py-3 rounded-full bg-brand-card/50 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-brand-primary">
                                </input>
                        <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-primary w-8 h-8 rounded-full flex items-center justify-center">
                            <i className="fas fa-arrow-right text-white -rotate-45"></i>
                        </button>
                    </div>
                </div>

                {/* Information */}
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Information</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a>
                        </li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</a>
                        </li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Services</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cyber Security</a>
                        </li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">App Development</a>
                        </li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IT Consultancy</a>
                        </li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Migration</a>
                        </li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="col-span-1">
                    <h3 className="text-white font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
                        </li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-800">
                <div className="text-gray-400 text-sm">
                    © Cbreve. All Rights Reserved
                </div>
                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-facebook-f"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-instagram"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-twitter"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-dribbble"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors"><i
                            className="fab fa-pinterest-p"></i></a>
                </div>
            </div>
        </div>
    </footer>
</div>
    )
}

export default OurTeam;