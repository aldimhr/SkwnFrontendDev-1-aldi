import Head from 'next/head';
import Image from 'next/image';
import logo from '../public/static/images/logo.png';

export default function Header() {
  return (
    <div className="shadow-md">
      <header className="p-4 flex justify-between items-center">
        <Image src={logo} alt="dekoor logo" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
          />
        </svg>
      </header>
    </div>
  );
}
