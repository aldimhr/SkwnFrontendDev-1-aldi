import Image from 'next/image';
import logo from '../public/static/images/logo.png';

export default function Footer() {
  return (
    <footer className="pt-9 pb-[83px] px-4 font-plusJkt ">
      <div className="text-center w-full">
        <Image src={logo} alt="dekoor logo" />
      </div>
      <p className="text-center leading-6 text-xs text-[#303030] mt-[35px]">
        Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling
        in their furniture. Always pay attention to details and give clear communication for the
        customers. Priority of our design is comfortability.
      </p>

      <div className="mt-[35px] grid grid-cols-2">
        <div className="text-center">
          <p className="text-sm font-medium">Support</p>
          <ul className="text-xs mt-[25px]">
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

        <div className="text-center">
          <p className="text-sm font-medium">Social Media</p>
          <ul className="text-xs mt-[25px]">
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

        <div className="text-center col-span-2 mt-[25px]">
          <p className="text-sm font-medium">About Us</p>
          <ul className="text-xs mt-[25px]">
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
