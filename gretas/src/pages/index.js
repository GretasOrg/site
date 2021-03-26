import React from 'react';
import AboutUs from '../components/index/AboutUs';
import Donations from '../components/index/Donations';
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
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
}
