import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HighlightedText from '../shared/HighlightedText';

export default function Features() {
  return (
    <section className="c-features" id="features">
      <HighlightedText className="c-features__title" color="faded-dark">
        Objetivos
      </HighlightedText>
      <p className="c-features__quotes">
        Atuamos na potencialização do processo de desenvolvimento de comunidades
        rurais de Pernambuco através de programas com projetos que contribuem
        para os seguintes Objetivos de Desenvolvimentos Sustentáveis (ODS):
      </p>
      <ul className="l-features__list">
        <li className="c-features__item c-feature">
          <StaticImage
            className="c-feature__img"
            src="../../images/features/1-erradicacao-pobreza.jpg"
            alt="Erradicação da Pobreza"
            loading="lazy"
            placeholder="tracedSVG"
            width="88"
            objectFit="cover"
          />
          <div className="l-feature__content">
            <h5 className="c-feature__title">Erradicação da Pobreza</h5>
            <p className="c-feature__text">
              Acabar com a pobreza extrema em todas as suas formas e proporções.
            </p>
          </div>
        </li>
        <li className="c-features__item c-feature">
          <StaticImage
            className="c-feature__img"
            src="../../images/features/2-fome-zero.jpg"
            alt="Fome Zero"
            loading="lazy"
            placeholder="tracedSVG"
            width="88"
            objectFit="cover"
          />
          <div className="l-feature__content">
            <h5 className="c-feature__title">Fome Zero</h5>
            <p className="c-feature__text">
              Combate à fome, através de políticas estruturais, assegurando que
              exista comida e qualidade alimentar na mesa de quem mais precisa.
            </p>
          </div>
        </li>
        <li className="c-features__item c-feature">
          <StaticImage
            className="c-feature__img"
            src="../../images/features/4-educacao-qualidade.jpg"
            alt="Educação de Qualidade"
            loading="lazy"
            placeholder="tracedSVG"
            width="88"
            objectFit="cover"
          />
          <div className="l-feature__content">
            <h5 className="c-feature__title">Educação de Qualidade</h5>
            <p className="c-feature__text">
              Oferecer educação de qualidade e dar oportunidades de conhecimento
              ao longo dos anos, transformando vidas.
            </p>
          </div>
        </li>
        <li className="c-features__item c-feature">
          <StaticImage
            className="c-feature__img"
            src="../../images/features/6-agua-potavel.jpg"
            alt="Água potável e Saneamento"
            loading="lazy"
            placeholder="tracedSVG"
            width="88"
            objectFit="cover"
          />
          <div className="l-feature__content">
            <h5 className="c-feature__title">Água potável e Saneamento</h5>
            <p className="c-feature__text">
              Beneficia a erradicação da pobreza, promove a sustentabilidade
              ambiental e assegura a disponibilidade de água a todos e todas.
            </p>
          </div>
        </li>
        <li className="c-features__item c-feature">
          <StaticImage
            className="c-feature__img"
            src="../../images/features/8-trabalho-decente.jpg"
            alt="Trabalho decente e Crescimento econômico"
            loading="lazy"
            placeholder="tracedSVG"
            width="88"
            objectFit="cover"
          />
          <div className="l-feature__content">
            <h5 className="c-feature__title">
              Trabalho decente e Crescimento econômico
            </h5>
            <p className="c-feature__text">
              Direito digno de emprego pleno para todas as pessoas,
              possibilitando crescimento econômico saudável e inclusivo.
            </p>
          </div>
        </li>
        <li className="c-features__item c-feature">
          <StaticImage
            className="c-feature__img"
            src="../../images/features/10-reducao-desigualdades.jpg"
            alt="Redução das Desigualdades"
            loading="lazy"
            placeholder="tracedSVG"
            width="88"
            objectFit="cover"
          />
          <div className="l-feature__content">
            <h5 className="c-feature__title">Redução das Desigualdades</h5>
            <p className="c-feature__text">
              Diminuir as desigualdades nos países e entre eles.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
