import Image from 'next/image';
import workIcon from '../../public/static/images/work-icon.svg';

export default function WhyChooseUs() {
  return (
    <section className="bg-[#2F241F] px-6 py-8 lg:px-[142px] lg:py-[72px] text-[#E5F0B6]">
      <h2 className="text-xs text-white text-center lg:text-2xl lg:text-left">WHY CHOOSE US?</h2>

      <p className="font-bold text-2xl mt-6 lg:mt-10 text-center lg:text-[64px] lg:text-left lg:leading-none">
        We care about details and the quality of our products
      </p>

      <ul className="mt-8 lg:mt-10 lg:flex lg:justify-between lg:gap-16">
        <li className="flex items-center gap-4">
          <div className="text-[#F4F4F4] bg-opacity-50 rounded-lg bg-[#E5F0B6]">
            <div className="w-10 h-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 mx-auto h-full my-auto">
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p className="font-bold text-[15px] lg:text-2xl text-[#E5F0B6]">MANUFACTURED WITH QUALITY MATERIALS</p>
        </li>
        <li className="flex items-center gap-4 lg:mt-0 mt-4">
          <div className="text-[#F4F4F4] bg-opacity-50 rounded-lg bg-[#E5F0B6]">
            <p className="font-bold text-2xl w-10 h-10 text-center leading-10 align-center">5</p>
          </div>
          <p className="font-bold lg:text-2xl text-[15px] text-[#E5F0B6]">5 YEARS OF WARRANTY FOR EACH PROFUCT</p>
        </li>
        <li className="flex items-center gap-4 lg:mt-0 mt-4">
          <div className="text-[#F4F4F4] bg-opacity-50 rounded-lg bg-[#E5F0B6]">
            <div className="w-10 h-10 flex items-center justify-center ">
              <Image src={workIcon} alt="work icon" />
            </div>
          </div>
          <p className="font-bold lg:text-2xl text-[15px] text-[#E5F0B6]">MANUFACTURED WITH QUALITY MATERIALS</p>
        </li>
      </ul>
    </section>
  );
}
