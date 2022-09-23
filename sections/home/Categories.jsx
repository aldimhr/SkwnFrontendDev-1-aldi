import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('living-room');
  const handleChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="px-4 py-6">
      <div className="px-[19px]">
        <h2 className="text-sm text-center">Categories</h2>
        <p className="text-center font-bold text-lg">Furniture Sets Recommendations</p>
        <ul className="mt-6">
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
