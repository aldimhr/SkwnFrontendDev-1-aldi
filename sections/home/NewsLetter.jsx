import Image from 'next/image';
import envelopeIcon from '../../public/static/images/envelope-icon.svg';

export default function NewsLetter() {
  return (
    <section className="py-8 px-4 bg-[#FCFAFA]">
      <h2 className="text-sm text-center">LIMITED DEALS</h2>
      <p className="font-bold text-lg text-center mt-1">Become a member and get 10% off of your first purchase</p>

      <div className="flex mt-6">
        <input type="text" placeholder="Enter your email here" className="p-4 focus:outline-none rounded-l-xl" />
        <div className="bg-[#E5F0B6] rounded-r-xl p-4">
          <Image src={envelopeIcon} alt="envelope icon" />
        </div>
      </div>
    </section>
  );
}
