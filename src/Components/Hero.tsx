
const Hero = () => {
  return (
    <section className="bg-gray-50 pt-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        
        <div className="flex-1 text-center md:text-left space-y-6">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Ideal{" "}
            <span className="brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          
          <p className="text-gray-600 max-w-lg">
            Explore frontend, backend, database, and tooling options to create the perfect stack for your projects.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
            <button className="brand-gradient-bg text-white px-6 py-3 rounded-full border border-black">
              Explore Technologies
            </button>
            <button className="border border-black text-gray-700 px-6 py-3 rounded-full font-medium ">
              Learn More
            </button>
          </div>
        </div>

        
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          
          <div className="w-full h-80 rounded-lg flex items-center justify-center">
            <img src="/src/assets/banner-stack.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
