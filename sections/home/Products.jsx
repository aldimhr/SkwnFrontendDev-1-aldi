import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import leftArrowIcon from '../../public/static/images/leftArrow-icon.svg';
import rightArrowIcon from '../../public/static/images/rightArrow-icon.svg';

export default function Products() {
  const [styleProductList, setStyleProductList] = useState({ transform: 'translateX(-336px)' });

  const productListRef = useRef();

  useEffect(() => {
    const productListDiv = productListRef.current;
    const parentWidth = productListDiv.parentElement.clientWidth;
    let cardWidth;

    const _DESKTOP = parentWidth > 768;
    if (_DESKTOP) {
      cardWidth = 300 + 36;
    } else {
      cardWidth = (163 + 16) * 2;
    }

    setStyleProductList({
      transform: `translateX(${-cardWidth}px)`,
    });
  }, []);

  const handleLeftButton = (e) => {
    e.preventDefault();

    const productListDiv = productListRef.current;
    const productListChildren = productListDiv.children;
    const parentWidth = productListDiv.parentElement.clientWidth;
    let cardWidth;

    const _DESKTOP = parentWidth > 768;
    if (_DESKTOP) {
      cardWidth = 300 + 36;
    } else {
      cardWidth = 163 + 16;
      cardWidth *= 2;
    }

    setStyleProductList({
      transform: `translateX(${0}px)`,
    });

    // transition
    setTimeout(() => {
      productListDiv.insertBefore(productListDiv.lastElementChild, productListDiv.firstChild);
      productListDiv.style.transition = 'none';
      setStyleProductList({
        transform: `translateX(${-cardWidth}px)`,
      });
      setTimeout(() => {
        productListDiv.style.transition = 'transform 400ms';
      }, 50);
    }, 400);

    // change style
    productListChildren[2].classList.remove('lg:w-[354px]', 'lg:h-[472px]', 'w-[192px]', 'h-[256px]');
    productListChildren[2].classList.add('lg:w-[300px]', 'lg:h-[400px]', 'w-[163px]', 'h-[217px]');
    productListChildren[2].firstChild.classList.toggle('hidden');
    productListChildren[1].classList.remove('lg:w-[300px]', 'lg:h-[400px]', 'w-[163px]', 'h-[217px]');
    productListChildren[1].classList.add('lg:w-[354px]', 'lg:h-[472px]', 'w-[192px]', 'h-[256px]');
    productListChildren[1].firstChild.classList.toggle('hidden');
  };

  const handleRightButton = (e) => {
    e.preventDefault();

    const productListDiv = productListRef.current;
    const productListChildren = productListDiv.children;
    const parentWidth = productListDiv.parentElement.clientWidth;
    let cardWidth;

    const _DESKTOP = parentWidth > 768;
    if (_DESKTOP) {
      cardWidth = 300 + 36;
    } else {
      cardWidth = 163 + 16;
      cardWidth *= 2;
    }

    setStyleProductList({
      transform: `translateX(${-cardWidth * 2}px)`,
    });

    // transition
    setTimeout(() => {
      productListDiv.appendChild(productListDiv.firstElementChild);
      productListDiv.style.transition = 'none';
      setStyleProductList({
        transform: `translateX(${-cardWidth}px)`,
      });
      setTimeout(() => {
        productListDiv.style.transition = 'transform 400ms';
      }, 50);
    }, 400);

    // change style
    productListChildren[3].classList.add('lg:w-[354px]', 'lg:h-[472px]', 'w-[192px]', 'h-[256px]');
    productListChildren[3].classList.remove('lg:w-[300px]', 'lg:h-[400px]', 'w-[163px]', 'h-[217px]');
    productListChildren[3].firstChild.classList.toggle('hidden');
    productListChildren[2].classList.add('lg:w-[300px]', 'lg:h-[400px]', 'w-[163px]', 'h-[217px]');
    productListChildren[2].classList.remove('lg:w-[354px]', 'lg:h-[472px]', 'w-[192px]', 'h-[256px]');
    productListChildren[2].firstChild.classList.toggle('hidden');
  };

  return (
    <section className="py-8 lg:py-20 bg-[#2F241F]">
      {/* title */}
      <div className="px-4 flex justify-between items-center lg:px-[142px]">
        <div className="text-[#E5F0B6] ">
          <h2 className="text-sm lg:text-2xl">Categories</h2>
          <p className="font-bold text-lg lg:text-5xl">This month’s best seller</p>
        </div>

        <button className="text-xs lg:text-base px-4 py-3 bg-[#E5F0B6] rounded-2xl">SEE MORE</button>
      </div>

      <div className="relative mt-6">
        {/* button */}
        <div className="flex justify-between z-10 absolute top-1/2 left-0 right-0 lg:-bottom-[24px] lg:top-auto lg:left-auto lg:right-[141px] lg:justify-start lg:gap-9">
          <div onClick={handleLeftButton} className="w-12 h-12 flex justify-center items-center rounded-full bg-[#E5F0B6]">
            <Image src={leftArrowIcon} alt="left arrow" />
          </div>

          <div onClick={handleRightButton} className="w-12 h-12 flex justify-center items-center rounded-full bg-[#E5F0B6]">
            <Image src={rightArrowIcon} alt="right arrow" />
          </div>
        </div>

        {/* product list */}
        <div className="relative lg:mt-12 overflow-x-hidden">
          <ul
            ref={productListRef}
            style={{ ...styleProductList }}
            className="transition-all duration-[400ms] flex gap-4 mx-4 lg:mx-9 lg:gap-9 w-[300%]"
          >
            <li className="lg:w-[300px] lg:h-[400px] w-[163px] h-[217px] rounded-xl bg-product3 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px] hidden">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
            <li className="lg:w-[300px] lg:h-[400px] w-[163px] h-[217px] rounded-xl bg-product1 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px] hidden">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
            <li className="lg:w-[354px] lg:h-[472px] w-[192px] h-[256px] rounded-xl bg-product2 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px]">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
            <li className="lg:w-[300px] lg:h-[400px] w-[163px] h-[217px] rounded-xl bg-product3 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px] hidden">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
            <li className="lg:w-[300px] lg:h-[400px] w-[163px] h-[217px] rounded-xl bg-product4 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px] hidden">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
            <li className="lg:w-[300px] lg:h-[400px] w-[163px] h-[217px] rounded-xl bg-product2 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px] hidden">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
            <li className="lg:w-[300px] lg:h-[400px] w-[163px] h-[217px] rounded-xl bg-product4 bg-cover bg-center bg-no-repeat relative">
              <div className="absolute bottom-[36px] left-[24px] hidden">
                <p className="px-4 py-2 rounded-xl bg-white bg-opacity-50 inline-block text-[#2F241F] text-2xl">$329</p>
                <p className="text-white text-5xl mt-2">Sofa Und</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
