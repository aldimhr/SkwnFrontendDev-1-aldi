import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../sections/home/Hero';
import HighlightProduct from '../sections/home/HighlightProduct';
import WhyChooseUs from '../sections/home/WhyChooseUs';
import BrandsPartner from '../sections/home/BrandsPartner';
import Categories from '../sections/home/Categories';
import Products from '../sections/home/Products';
import NewsLetter from '../sections/home/NewsLetter';

export default function Home() {
  return (
    <div className="font-inter text-[#2F241F]">
      <Head>
        <title>Dekoor</title>
      </Head>

      <Header />

      <div className="lg:grid lg:grid-cols-3 lg:h-screen lg:gap-16">
        <div className="lg:col-span-2 lg:self-center">
          <Hero />
        </div>
        <HighlightProduct />
      </div>

      <WhyChooseUs />
      <BrandsPartner />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}
