import Image from 'next/image';
import logo from '../public/static/images/logo.png';

export default function Footer() {
  return (
    <footer className="pt-9 lg:pt-20 lg:pb-[93px] lg:px-[100px] lg:flex lg:gap-[84px] pb-[83px] px-4 font-plusJkt ">
      <div className="lg:w-1/2">
        <div className="text-center lg:text-left w-full">
          <Image src={logo} alt="dekoor logo" />
        </div>
        <p className="lg:text-left lg:text-base lg:text-[#667085] lg:mt-[25px] text-center leading-6 text-xs text-[#303030] mt-[35px]">
          Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to
          details and give clear communication for the customers. Priority of our design is comfortability.
        </p>
        <p className="hidden mt-[40px] lg:text-base lg:text-[#667085] lg:inline-block">©Copyright 2022 Dekoor</p>
      </div>

      <div className="mt-[35px] lg:flex lg:justify-between lg:w-1/2 grid grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="lg:text-[20px] text-sm font-medium">Support</p>
          <ul className="text-xs lg:text-base lg:text-[#667085] mt-[25px]">
            <li>
              <a href="#">FAQ </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Shipping & Returns </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Care guide </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Redeem warranty </a>
            </li>
          </ul>
        </div>

        <div className="text-center lg:text-left">
          <p className="lg:text-[20px] text-sm font-medium">Social Media</p>
          <ul className="text-xs lg:text-base lg:text-[#667085] mt-[25px]">
            <li>
              <a href="#">Instagram </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Facebook </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Twitter </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">TikTok </a>
            </li>
          </ul>
        </div>

        <div className="lg:text-left text-center col-span-2 mt-[25px] lg:mt-0">
          <p className="lg:text-[20px] text-sm font-medium">About Us</p>
          <ul className="text-xs lg:text-base lg:text-[#667085] mt-[25px]">
            <li>
              <a href="#">Our story </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Designer </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Craftmanship </a>
            </li>
            <li className="mt-[30px]">
              <a href="#">Sustainability </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
