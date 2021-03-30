import React from 'react';
import { Helmet } from 'react-helmet';
import AboutUs from '../components/index/AboutUs';
import Donations from '../components/index/Donations';
import Features from '../components/index/Features';
import Intro from '../components/index/Intro';
import JoinUs from '../components/index/JoinUs';
import MiniBlog from '../components/index/MiniBlog';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import favicon from '../images/branding/favicon.png';

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
      <Helmet
        htmlAttributes={{
          lang: 'pt-BR',
        }}
      >
        <meta charSet="utf-8" />
        <title>Gretas - Fortalecendo o Sertão</title>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content="Trabalhamos com as comunidades rurais de Ibimirim
        no estímulo à autonomia e empoderamento de todos
        que nelas fazem morada, através de programas
        focados em saúde, segurança alimentar, educação e
        fonte de renda. Contribuímos para a diminuição das
        desigualdades sociais e promoção da dignidade
        humana."
        />
        <link rel="canonical" href="https://www.gretas.org/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gretas - Fortalecendo o Sertão" />
        <meta
          property="og:description"
          content="Trabalhamos com as comunidades rurais de Ibimirim no estímulo à autonomia e empoderamento de todos que nelas fazem morada, através de programas focados em saúde, segurança alimentar, educação e fonte de renda. Contribuímos para a diminuição das desigualdades sociais e promoção da dignidade humana."
        />
        <meta
          property="og:image"
          content="https://gretas.org/assets/images/mulher-simbolo.jpg"
        />
        <meta property="og:url" content="https://www.gretas.org/" />
        <meta property="og:site_name" content="Projeto Gretas" />
        <meta name="twitter:title" content="Gretas - Fortalecendo o Sertão" />
        <meta
          name="twitter:description"
          content="Trabalhamos com as comunidades rurais de Ibimirim no estímulo à autonomia e empoderamento de todos que nelas fazem morada, através de programas focados em saúde, segurança alimentar, educação e fonte de renda. Contribuímos para a diminuição das desigualdades sociais e promoção da dignidade humana."
        />
        <meta
          name="twitter:image"
          content="https://gretas.org/assets/images/mulher-simbolo.jpg"
        />
        <meta name="twitter:site" content="Projeto Gretas" />
        <meta name="twitter:creator" content="Projeto Gretas" />
      </Helmet>
    </React.Fragment>
  );
}
