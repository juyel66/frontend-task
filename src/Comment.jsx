import img1 from "./../public/Ellipse 452.png";

const Comment = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          What Our Users are Saying
        </h1>
        <p className="text-gray-600 mb-10">
          Real stories from clients, employees, and business owners <br className="hidden md:block" />
          who use our app every day.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-sm p-6 text-left">
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={img1}
                alt="user"
              />
              <div>
                <h2 className="font-semibold text-lg">Small Card</h2>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi sint incidunt quam aliquam laborum est
              consequuntur rem! Illum deserunt fugiat recusandae unde officia.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-sm p-6 text-left">
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={img1}
                alt="user"
              />
              <div>
                <h2 className="font-semibold text-lg">Small Card</h2>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi sint incidunt quam aliquam laborum est
              consequuntur rem! Illum deserunt fugiat recusandae unde officia.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 shadow-sm p-6 text-left">
            <div className="flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={img1}
                alt="user"
              />
              <div>
                <h2 className="font-semibold text-lg">Small Card</h2>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, animi sint incidunt quam aliquam laborum est
              consequuntur rem! Illum deserunt fugiat recusandae unde officia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
