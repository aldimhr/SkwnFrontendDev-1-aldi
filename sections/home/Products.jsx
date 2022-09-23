import Image from 'next/image';
import { useRef, useState } from 'react';

import product1 from '../../public/static/images/product-1.png';
import product2 from '../../public/static/images/product-2.png';
import product3 from '../../public/static/images/product-3.png';
import product4 from '../../public/static/images/product-4.png';

import leftArrowIcon from '../../public/static/images/leftArrow-icon.svg';
import rightArrowIcon from '../../public/static/images/rightArrow-icon.svg';

export default function Products() {
  const [styleProductList, setStyleProductList] = useState({ transform: 'translateX(0px)' });
  const [countSlider, setCountSlider] = useState({ index: 0, center: 0 });

  const productListRef = useRef();

  const handleLeftButton = (e) => {
    e.preventDefault();

    const productListDiv = productListRef.current;
    const currTranslateValue = new WebKitCSSMatrix(productListDiv.style.transform).m41;
    const productListChildren = productListDiv.children;

    if (countSlider.index <= 0) return;

    const parentWidth = productListDiv.parentNode.offsetWidth;
    const centerLen = (parentWidth - (productListChildren[countSlider.index - 1].offsetWidth + 16)) / 2;
    const imgWidth = productListChildren[countSlider.index].offsetWidth + 16;

    setStyleProductList({
      transform: `translateX(${currTranslateValue + imgWidth + countSlider.center - centerLen}px)`,
    });
    setCountSlider((prev) => ({
      index: prev.index - 1,
      center: centerLen,
    }));
  };

  const handleRightButton = (e) => {
    e.preventDefault();

    const productListDiv = productListRef.current;
    const currTranslateValue = new WebKitCSSMatrix(productListDiv.style.transform).m41;
    const productListChildren = productListDiv.children;

    if (countSlider.index >= productListChildren.length - 1) return;

    const parentWidth = productListDiv.parentNode.offsetWidth;
    const centerLen = (parentWidth - (productListChildren[countSlider.index + 1].offsetWidth + 16)) / 2;
    const imgWidth = productListChildren[countSlider.index].offsetWidth + 16;

    setStyleProductList({
      transform: `translateX(${currTranslateValue - imgWidth - countSlider.center + centerLen}px)`,
    });
    setCountSlider((prev) => ({
      index: prev.index + 1,
      center: centerLen,
    }));
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
          <ul ref={productListRef} style={{ ...styleProductList }} className="transition-transform duration-150 flex mx-2 gap-4 w-[300%]">
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
  );
}
