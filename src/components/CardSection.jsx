import Frame from './../../public/Frame 781.png';
import Frame1 from './../../public/Frame 782.png'
import Frame2 from './../../public/Frame 781 (2).png'
import Frame3 from './../../public/Frame 781 (1).png'
const CardSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-sm p-6 flex flex-col items-start">
          <img className="w-8 h-8 mb-4" src={Frame} alt="Icon" />
          <h1 className="text-xl font-bold mb-2">Easy Service Booking</h1>
          <p className="text-gray-600 text-base">
            A card component has a figure, a body part, and inside body there are title and actions parts
          </p>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-sm p-6 flex flex-col items-start">
          <img className="w-8 h-8 mb-4" src={Frame1} alt="Icon" />
          <h1 className="text-xl font-bold mb-2">Easy Service Booking</h1>
          <p className="text-gray-600 text-base">
            A card component has a figure, a body part, and inside body there are title and actions parts
          </p>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-sm p-6 flex flex-col items-start">
          <img className="w-8 h-8 mb-4" src={Frame2} alt="Icon" />
          <h1 className="text-xl font-bold mb-2">Easy Service Booking</h1>
          <p className="text-gray-600 text-base">
            A card component has a figure, a body part, and inside body there are title and actions parts
          </p>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-sm p-6 flex flex-col items-start">
          <img className="w-8 h-8 mb-4" src={Frame3} alt="Icon" />
          <h1 className="text-xl font-bold mb-2">Easy Service Booking</h1>
          <p className="text-gray-600 text-base">
            A card component has a figure, a body part, and inside body there are title and actions parts
          </p>
        </div>

      </div>
    </section>
  );
};

export default CardSection;
