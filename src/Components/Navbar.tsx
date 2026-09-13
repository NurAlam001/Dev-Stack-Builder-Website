import { useState } from "react";
import { Menu } from "lucide-react"; // using lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/src/assets/logo-text.png" alt="logo"/>
        </div>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-[#db2777] hover:text-blue-600">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Technologies</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Projects</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="text-gray-700 hover:text-blue-600">Sign In</button>
          <button className="brand-gradient-bg text-white px-6 py-3 rounded-full">
            Sign Up
          </button>
        </div>

        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Technologies</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
          <div className="flex space-x-4">
            <button className="text-gray-700 border border-black rounded-2xl">Sign In</button>
            <button className="brand-gradient-bg text-white px-6 py-3 rounded-full border border-black">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
