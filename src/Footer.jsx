import footers from './../public/footer.png';
import footer from './../public/Vector (2).png';
import apple from './../public/apple.png';
import google from './../public/google.png';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start space-y-4 flex-1">
          <img src={footer} alt="logo" className="h-10" />
          <img  src={footers} alt="footer" className="h-4" />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left text-gray-200 flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolorum reiciendis cum eligendi dignissimos dolore soluta porro.
          </p>
        </div>

        {/* App Buttons */}
        <div className="flex justify-center md:justify-end space-x-4 flex-1 ">
          <img 
            src={apple} 
            alt="apple store" 
            className="h-12 cursor-pointer hover:scale-105 transition" 
          />
          <img 
            src={google} 
            alt="google play" 
            className="h-12 cursor-pointer hover:scale-105 transition" 
          />
        </div>
      </div>

      {/* Bottom line
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div> */}
    </footer>
  );
};

export default Footer;
