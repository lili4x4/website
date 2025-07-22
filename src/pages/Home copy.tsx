import React from 'react';
import { HomeDesktop } from '../components/HomeDesktop';
import { HomeMobile } from '../components/HomeMobile';
import './Home.css';

const isMobile = () => {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return isMobile;
}

function Home() {
    return isMobile() ? ( <HomeMobile /> ) : ( <HomeDesktop /> )
}

export default Home;