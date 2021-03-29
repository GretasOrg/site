import React from 'react';
import volunteerImg from '../../images/about/volunteer.png';
import FluidSquareSVG from '../../images/effects/fluid-square-effect.inline.svg';
import HighlightedText from '../shared/HighlightedText';
import PaperEffect from '../shared/PaperEffect';
import StatsEffect from '../shared/StatsEffect';
import Video from '../shared/Video';

export default function AboutUs() {
  return (
    <section className="c-about">
      <div className="l-about__col1">
        <HighlightedText className="c-about__title" color="faded-dark">
          Nós somos o Gretas!
        </HighlightedText>
        <p className="c-about__text">
          Somos um grupo de pessoas inquietas, transformadoras e comprometidas
          com a causa sertaneja. Trabalhamos com as comunidades rurais do Sertão
          Pernambucano, no estímulo à autonomia e empoderamento dos moradores e
          moradoras, através de programas focados em saúde,{' '}
          <b>segurança alimentar, educação e fonte de renda</b>. Contribuímos
          para a diminuição das desigualdades sociais e promoção da dignidade
          humana.
        </p>
        <a
          className="c-about__joinUs"
          href="https://wa.me/5581991984672"
          target="_blank"
          rel="noreferrer"
        >
          Junte-se a nós!
        </a>
      </div>
      <div className="l-about__col2">
        <ul className="l-about__stats">
          <li>
            <StatsEffect count="10" svgClassName="c-about__stats-tertiary">
              Anos de <br />
              atuação
            </StatsEffect>
          </li>
          <li>
            <StatsEffect count="40" svgClassName="c-about__stats-success">
              Voluntários
            </StatsEffect>
          </li>
          <li>
            <StatsEffect
              count="5.500+"
              svgClassName="c-about__stats-faded-dark"
            >
              Pessoas impactadas <br />
              diretamente
            </StatsEffect>
          </li>
        </ul>
      </div>
      <div className="l-about__col3">
        <div className="c-about__banner">
          <FluidSquareSVG className="c-about__bannerBg" />
          <img
            src={volunteerImg}
            alt="Voluntária Gretas"
            className="c-about__volunteer"
          />
          <span className="c-about__helpText">
            Ficou com alguma <br />
            dúvida? <br />
            Estamos aqui para <br />
            te ajudar!
          </span>
        </div>
        {/* <video
          className="c-about__video"
          controls
          src="assets/videos/video-trator.mp4"
        ></video>
        <iframe src=""></iframe> */}
        <Video
          className="c-about__video"
          videoSrcURL="https://www.youtube.com/embed/lut_fiA-dN0"
          videoTitle="Ação Ibimirim GRETAS 2021 - Primeiro final de semana"
          // width="560"
          // height="315"
        />
      </div>
      <PaperEffect className="c-about__bottom" />
    </section>
  );
}
