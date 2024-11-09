import Navbar from "./components/navbar";
import Features from "./home/features";
import Hero from "./home/hero";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-16 flex flex-col gap-8 px-4 md:px-16 lg:px-28 xl:px-[275px]">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex flex-col max-sm:items-center gap-3 w-full">
            <h1 className="text-5xl md:text-[5rem] font-bold">1000 <span className="text-blue-400">+</span></h1>
            <p>Active Community Member</p>
            <div className="flex -space-x-4 rtl:space-x-reverse">
              <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667a83531aa35c93f30b2905_Member-Photo-Close-up-2.webp" alt=""/>
              <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667a83531aa35c93f30b2905_Member-Photo-Close-up-2.webp" alt=""/>
              <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667a83531aa35c93f30b2905_Member-Photo-Close-up-2.webp" alt=""/>
              <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667a83531aa35c93f30b2905_Member-Photo-Close-up-2.webp" alt=""/>
              <img className="w-16 h-16 border-2 border-white rounded-full dark:border-gray-800" src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/667a83531aa35c93f30b2905_Member-Photo-Close-up-2.webp" alt=""/>
            </div>
          </div>
          <p className="text-xl md:text-3xl font-semibold">We are committed to staying at the forefront of technological innovation, constantly exploring emerging trends and incorporating the latest advancements <span className="text-blue-400">into our solutions.</span></p>
        </div>
        <img src="https://cdn.prod.website-files.com/667a83531aa35c93f30b287c/6682bd6dac32e465b9e001fb_team-working-together-project%201.webp" alt="" className="flex items-center justify-center w-full rounded-3xl"/>
      </section>
      <Features />
    </>
  )
}

export default HomePage;