import Image from 'next/image';
import Header from '../components/Header';
import playIcon from '../public/static/images/play-icon.svg';
import searchIcon from '../public/static/images/search-icon.svg';

export default function Home() {
  return (
    <div className="font-inter">
      <Header />

      <section className="px-4 py-8">
        <h2 className="text-[32px] font-bold text-center text-[#2F241F]">
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
    </div>
  );
}
