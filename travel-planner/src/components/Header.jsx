import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#F8F8F8] h-[60px] w-[1440px] flex justify-between items-center px-5 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold"><span className="text-blue-500 font-bold">Globe</span>Trekker</h1> {/* Placeholder for logo */}
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-5">
        <ul className="flex space-x-5">
          <li>
            <Link to="/" className="text-[16px] font-bold hover:text-blue-500">
              Home
            </Link>
          </li>
          
          <li>
            <Link to="/destination" className="text-[16px] font-bold hover:text-blue-500">
              Destination Details
            </Link>
          </li>
          <li>
            <Link to="/itinerary" className="text-[16px] font-bold hover:text-blue-500">
              Itinerary Planner
            </Link>
          </li>
          <li>
            <Link to="/account" className="text-[16px] font-bold hover:text-blue-500">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
