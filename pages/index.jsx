import Image from 'next/image';
import Header from '../components/Header';

import playIcon from '../public/static/images/play-icon.svg';
import searchIcon from '../public/static/images/search-icon.svg';
import workIcon from '../public/static/images/work-icon.svg';
import leftArrowIcon from '../public/static/images/leftArrow-icon.svg';
import rightArrowIcon from '../public/static/images/rightArrow-icon.svg';
import envelopeIcon from '../public/static/images/envelope-icon.svg';

import stripeLogo from '../public/static/images/stripe-logo.png';
import upworkLogo from '../public/static/images/upwork-logo.png';
import gustoLogo from '../public/static/images/gusto-logo.png';
import treehouseLogo from '../public/static/images/treehouse-logo.png';

import product1 from '../public/static/images/product-1.png';
import product2 from '../public/static/images/product-2.png';
import product3 from '../public/static/images/product-3.png';
import product4 from '../public/static/images/product-4.png';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-inter text-[#2F241F]">
      <Header />

      {/* hero section */}
      <section className="px-4 py-8">
        <h2 className="text-[32px] font-bold text-center ">
          The kind of <span className="text-[#817253]">furniture</span> you have been looking for
        </h2>

        <div className="mt-6">
          <button className="text-[#553B33] text-sm w-full py-[18px] bg-[#E5F0B6] flex gap-4 items-center justify-center rounded-xl">
            <Image src={searchIcon} alt="search icon" />
            SEARCH CATALOG
          </button>
          <button className="text-[#553B33] text-sm w-full py-[18px] border border-[#553B33] flex gap-4 items-center justify-center rounded-xl mt-3">
            <Image src={playIcon} alt="play icon" />
            WATCH VIDEO
          </button>
        </div>
      </section>

      {/* highlighted product */}
      <section className="px-4 py-6 bg-gray-500">
        <h2 className="text-xs text-white">HIGHLIGHTED PRODUCT</h2>
        <div className="mt-11">
          <p className="px-4 py-2 rounded-xl bg-white inline-block">$329</p>
          <p className="my-2 text-2xl text-white">Pösht Sofa</p>
          <button className="rounded-xl px-4 py-3 bg-[#2F241F] text-white flex gap-4 items-center text-xs">
            VIEW DETAILS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* why choose us */}
      <section className="bg-[#2F241F] px-6 py-8  text-[#E5F0B6]">
        <h2 className="text-xs text-white text-center">WHY CHOOSE US?</h2>
        <p className="font-bold text-2xl mt-6 text-center">
          We care about details and the quality of our products
        </p>
        <ul className="mt-8">
          <li className="flex items-center gap-4">
            <div className="text-[#F4F4F4] bg-opacity-50 rounded-lg bg-[#E5F0B6]">
              <div className="w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 mx-auto h-full my-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <p className="font-bold text-[15px] text-[#E5F0B6]">
              MANUFACTURED WITH QUALITY MATERIALS
            </p>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <div className="text-[#F4F4F4] bg-opacity-50 rounded-lg bg-[#E5F0B6]">
              <p className="font-bold text-2xl w-10 h-10 text-center leading-10 align-center">5</p>
            </div>
            <p className="font-bold text-[15px] text-[#E5F0B6]">
              5 YEARS OF WARRANTY FOR EACH PROFUCT
            </p>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <div className="text-[#F4F4F4] bg-opacity-50 rounded-lg bg-[#E5F0B6]">
              <div className="w-10 h-10 flex items-center justify-center ">
                <Image src={workIcon} alt="work icon" />
              </div>
            </div>
            <p className="font-bold text-[15px] text-[#E5F0B6]">
              MANUFACTURED WITH QUALITY MATERIALS
            </p>
          </li>
        </ul>
      </section>

      {/* brands partner */}
      <section className="py-10 px-6">
        <h2 className="text-center text-sm">
          <span className="block font-bold text-2xl ">25+</span> PARTNERED BRANDS
        </h2>

        <ul className="flex justify-between mt-6">
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

      {/* categories */}
      <section className="px-4 py-6">
        <div className="px-[19px]">
          <h2 className="text-sm text-center">Categories</h2>
          <p className="text-center font-bold text-lg">Furniture Sets Recommendations</p>
          <ul>
            <li className="bg-[#FCFAFA] px-4 py-5">
              <p className="font-bold text-lg">Bedroom</p>
            </li>
            <li className="bg-[#E5F0B6] px-4 py-5">
              <p className="font-bold text-lg">Living Room</p>
              <p className="mt-3">
                Enjoy a great living room aesthetics with your family Designs created for increased
                comfortability
              </p>
            </li>
            <li className="bg-[#FCFAFA] px-4 py-5">
              <p className="font-bold text-lg">Home Office</p>
            </li>
            <li className="bg-[#FCFAFA] px-4 py-5">
              <p className="font-bold text-lg">Gaming Room</p>
            </li>
          </ul>
        </div>
      </section>

      {/* products */}
      <section className="py-8 bg-[#2F241F]">
        <div className="px-4 flex justify-between items-center">
          <div className="text-[#E5F0B6] ">
            <h2 className="text-sm">Categories</h2>
            <p className="font-bold text-lg">This month’s best seller</p>
          </div>

          <button className="text-xs px-4 py-3 bg-[#E5F0B6] rounded-2xl">SEE MORE</button>
        </div>

        <div className="relative mt-6 overflow-hidden">
          {/* button */}
          <div className="flex justify-between z-10 absolute top-1/2 left-0 right-0">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#E5F0B6]">
              <Image src={leftArrowIcon} alt="left arrow" />
            </div>

            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#E5F0B6]">
              <Image src={rightArrowIcon} alt="right arrow" />
            </div>
          </div>

          {/* product list */}
          <div className="h-[256px] relative">
            <ul className="flex gap-4 w-[300%]">
              <li>
                <Image src={product1} alt="product 1" />
              </li>
              <li>
                <Image src={product2} alt="product 2" />
              </li>
              <li>
                <Image src={product3} alt="product 3" />
              </li>
              <li>
                <Image src={product4} alt="product 4" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* news letter */}
      <section className="py-8 px-4 bg-[#FCFAFA]">
        <h2 className="text-sm text-center">LIMITED DEALS</h2>
        <p className="font-bold text-lg text-center mt-1">
          Become a member and get 10% off of your first purchase
        </p>

        <div className="flex mt-6">
          <input
            type="text"
            placeholder="Enter your email here"
            className="p-4 focus:outline-none rounded-l-xl"
          />
          <div className="bg-[#E5F0B6] rounded-r-xl p-4">
            <Image src={envelopeIcon} alt="envelope icon" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
