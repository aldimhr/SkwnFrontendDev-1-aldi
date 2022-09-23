import Image from 'next/image';
import logo from '../public/static/images/logo.png';
import shoppingBagIcon from '../public/static/images/shopping_bag-icon.png';

export default function Header() {
  return (
    <div className="shadow-md lg:shadow-none">
      <header className="p-4 flex justify-between items-center">
        <Image src={logo} alt="dekoor logo" />
        <ul className="lg:flex gap-12 hidden">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#" className="flex gap-2 items-center">
              Furniture{' '}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">Partnership</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="lg:flex gap-4 hidden">
          <button className="py-3 px-6 bg-[#E5F0B6] rounded-lg">Sign Up</button>
          <button className="pt-3 pl-3 pr-3 pb-2 bg-[#553B33] rounded-lg relative">
            <Image src={shoppingBagIcon} alt="shopping bag icon" />
          </button>
        </div>
        <div className="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </div>
      </header>
    </div>
  );
}
