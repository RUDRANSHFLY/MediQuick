import React from 'react';
import Slider from '../../components/Slider/Slider.jsx';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts.jsx';
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts.jsx';
import Categories from '../../components/Categories/Categories.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import "../Home/Home.scss"
import Mcat from '../../components/Mcat/Mcat.jsx';
import Ad from '../../components/Ad/Ad.jsx';
const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <Mcat />
      <FeaturedProducts type='featured' />
      <Categories />
      {/* <TrendingProducts type='trending' /> */}
      <Ad />
      <Contact />
    </div>
  )
};

export default Home;
