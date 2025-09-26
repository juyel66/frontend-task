import apple from "./../../public/apple.png";
import google from "./../../public/google.png";
import cover from "./../../public/Rectangle 161124256.png";
import Vector from "./../../public/Vector.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-2 flex flex-col md:flex-row items-center justify-between relative">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg relative">
          {/* Vector Background */}
          <img
            src={Vector}
            alt="Background Vector"
            className="absolute top-0 left-0 w-full h-full  pointer-events-none z-0"
          />
          
          {/* Heading */}
         <div>
           <h1  className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            All Your Jobs <br /> One Smart App
          </h1>
         </div>

          <p className="mt-4 relative z-10 text-gray-600 text-base sm:text-lg">
            Built for business owners, employees, and clients to streamline job 
            scheduling, service tracking, and team management in one powerful app.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center md:items-start md:justify-start gap-4 relative z-10">
            <button className="w-40">
              <img src={apple} alt="Download on App Store" />
            </button>
            <button className="w-40">
              <img src={google} alt="Get it on Google Play" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={cover}
            alt="App Cover"
            className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] mx-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
