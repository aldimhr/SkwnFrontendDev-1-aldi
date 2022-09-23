import Image from 'next/image';
import stripeLogo from '../../public/static/images/stripe-logo.png';
import upworkLogo from '../../public/static/images/upwork-logo.png';
import gustoLogo from '../../public/static/images/gusto-logo.png';
import treehouseLogo from '../../public/static/images/treehouse-logo.png';

export default function BrandsPartner() {
  return (
    <section className="lg:px-[142px] py-10 px-6 lg:flex lg:items-center lg:gap-[150px]">
      <h2 className="text-center text-sm lg:text-2xl">
        <span className="block font-bold text-2xl lg:text-8xl">25+</span> PARTNERED BRANDS
      </h2>

      <ul className="flex justify-between mt-6 gap-8 lg:gap-[89px]">
        <li>
          <Image src={gustoLogo} alt="gusto logo" />
        </li>
        <li>
          <Image src={stripeLogo} alt="stripe logo" />
        </li>
        <li>
          <Image src={treehouseLogo} alt="treehouse logo" />
        </li>
        <li>
          <Image src={upworkLogo} alt="upwork logo" />
        </li>
      </ul>
    </section>
  );
}
