

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <img src="/src/assets/logo-text.png" alt="Dev Stack Logo" className="mb-4" />
          <p className="text-gray-600 text-sm mb-4">
            Build your ideal development stack with modern technologies.
          </p>
          <div className="flex space-x-4 text-sm text-gray-600">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      
      <div className="border-t mt-8 py-6 text-center text-sm text-gray-500">
        © 2026 Dev Stack. All rights reserved. 
        <span className="mx-2">|</span>
        <a href="#">Privacy</a>
        <span className="mx-2">|</span>
        <a href="#">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
