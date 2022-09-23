export default function HighlightProduct() {
  return (
    <section className="px-4 py-6 bg-highlight-product bg-cover bg-no-repeat bg-center lg:relative">
      <h2 className="text-xs text-white lg:hidden">HIGHLIGHTED PRODUCT</h2>
      <div className="mt-11 lg:mt-0 lg:absolute lg:bottom-[87px] lg:left-12">
        <p className="lg:bg-opacity-50 px-4 py-2 rounded-xl bg-white inline-block">$329</p>

        <p className="my-2 lg:my-4 text-2xl text-white lg:text-[64px]">Pösht Sofa</p>

        <button className="rounded-xl px-4 py-3 bg-[#2F241F] text-white flex gap-4 items-center text-xs">
          VIEW DETAILS
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
