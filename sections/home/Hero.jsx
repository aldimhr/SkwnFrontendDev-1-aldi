import Image from 'next/image';

import playIcon from '../../public/static/images/play-icon.svg';
import searchIcon from '../../public/static/images/search-icon.svg';

export default function Hero() {
  return (
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
  );
}
