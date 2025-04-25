import React from 'react';
import LandingPage from './components/LandingPage';
import NewsCards from './components/NewsCards';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TopStories from './components/TopStories';
import TrendingNews from './components/TrendingNews';
import Image from './components/Image';
import FashionPage from './components/FashionPage';
import CardsSection from './components/CardSection';
import Commerce from './components/Commerce';


function App() {
  return (
    <div className="font-sans text-gray-800">
      <LandingPage/>
      <NewsCards/>
      <Header/>
      <HeroSection/>
      <TopStories/>
      <TrendingNews/>
      <Image/>
      <FashionPage/>
      <CardsSection/>
      <Commerce/>
    </div>
  );
}

export default App;