import mobile1 from './../../public/mobile1.png'

import mobile3 from './../../public/mobile3.png'

const PostSection = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl m-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Build for Everyone</h1>
        <p className="text-gray-600 mb-10">
          Whether you are booking services, managing tasks, or running operations, <br className="hidden md:block" />
          we have designed the perfect experience for you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center ">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6 text-left">
            <button className="btn btn-outline btn-accent rounded-2xl">Accent</button>

            <h2 className="text-xl md:text-2xl font-bold">
              Book Services, Track Progress <br /> and Stay Updated
            </h2>

            <p className="text-gray-600">
              Easily schedule appointments, get real-time updates, and <br className="hidden md:block" />
              enjoy a smooth transparent service experience.
            </p>

            <div className="space-y-2">
              <div className="flex gap-2 items-center">
                <div className="bg-green-500 h-7 w-1"></div>
                <span>Book service in seconds</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-green-400 h-7 w-1"></div>
                <span>Track your progress easily</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="bg-green-300 h-7 w-1"></div>
                <span>Enjoy a smooth experience</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={mobile3}
              alt="Mobile App Preview"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostSection
