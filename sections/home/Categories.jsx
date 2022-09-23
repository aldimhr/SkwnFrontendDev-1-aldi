import Image from 'next/image';
import { useState } from 'react';
import category1 from '../../public/static/images/categories-1.png';
import category2 from '../../public/static/images/categories-2.png';
import category3 from '../../public/static/images/categories-3.png';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('living-room');
  const handleChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="px-4 lg:px-0 py-6 lg:py-20 lg:flex lg:gap-12">
      <div className="lg:flex hidden gap-6">
        <Image src={category1} alt="category 1" />
        <Image src={category2} alt="category 2" />
        <Image src={category3} alt="category 3" />
      </div>

      <div className="px-[19px] lg:w-[523px] ">
        <h2 className="text-sm text-center lg:text-left lg:text-2xl">Categories</h2>
        <p className="text-center font-bold lg:mt-8 text-lg lg:text-left lg:text-5xl">Furniture Sets Recommendations</p>
        <ul className="mt-6 lg:mt-8">
          <li className={`px-4 py-5 ${activeCategory === 'bedroom' ? 'bg-[#E5F0B6]' : 'bg-[#FCFAFA]'}`}>
            <p onClick={() => handleChange('bedroom')} className="font-bold text-lg">
              Bedroom
            </p>
            <p className={activeCategory === 'bedroom' ? 'mt-3' : 'hidden'}>
              Enjoy a great living room aesthetics with your family Designs created for increased comfortability
            </p>
          </li>
          <li className={`px-4 py-5 ${activeCategory === 'living-room' ? 'bg-[#E5F0B6]' : 'bg-[#FCFAFA]'}`}>
            <p onClick={() => handleChange('living-room')} className="font-bold text-lg">
              Living Room
            </p>

            <p className={activeCategory === 'living-room' ? 'mt-3' : 'hidden'}>
              Enjoy a great living room aesthetics with your family Designs created for increased comfortability
            </p>
          </li>
          <li className={`px-4 py-5 ${activeCategory === 'home-office' ? 'bg-[#E5F0B6]' : 'bg-[#FCFAFA]'}`}>
            <p onClick={() => handleChange('home-office')} className="font-bold text-lg">
              Home Office
            </p>
            <p className={activeCategory === 'home-office' ? 'mt-3' : 'hidden'}>
              Enjoy a great living room aesthetics with your family Designs created for increased comfortability
            </p>
          </li>
          <li className={`px-4 py-5 ${activeCategory === 'gaming-room' ? 'bg-[#E5F0B6]' : 'bg-[#FCFAFA]'}`}>
            <p onClick={() => handleChange('gaming-room')} className="font-bold text-lg">
              Gaming Room
            </p>
            <p className={activeCategory === 'gaming-room' ? 'mt-3' : 'hidden'}>
              Enjoy a great living room aesthetics with your family Designs created for increased comfortability
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
