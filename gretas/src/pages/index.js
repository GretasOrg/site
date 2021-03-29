import React from 'react';
import AboutUs from '../components/index/AboutUs';
import Donations from '../components/index/Donations';
import Features from '../components/index/Features';
import Intro from '../components/index/Intro';
import JoinUs from '../components/index/JoinUs';
import MiniBlog from '../components/index/MiniBlog';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function Home() {
  return (
    <React.Fragment>
      <Header actionLink="#donations" />
      <main>
        <Intro />
        <AboutUs />
        <Donations id="donations" />
        <Features />
        <JoinUs />
        <MiniBlog />
      </main>
      <Footer />
    </React.Fragment>
  );
}
