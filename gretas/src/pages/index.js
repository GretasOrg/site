import React from 'react';
import AboutUs from '../components/index/AboutUs';
import Donations from '../components/index/Donations';
import Features from '../components/index/Features';
import Intro from '../components/index/Intro';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function Home() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Intro />
        <AboutUs />
        <Donations />
        <Features />
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
