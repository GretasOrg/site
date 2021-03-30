import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import PaperEffect from '../shared/PaperEffect';

export default function JoinUs() {
  return (
    <section className="c-joinUs">
      <StaticImage
        className="c-joinUs__bg"
        src="../../images/join-us/bg.png"
        alt="Sombra de pessoas brincando"
        loading="lazy"
        placeholder="tracedSVG"
        layout="fullWidth"
        objectFit="cover"
        style={{ position: 'absolute' }}
        tracedSVGOptions={{ color: '#fcf5db' }}
      />
      <h2 className="c-joinUs__title">
        Ajude o projeto, <br />
        seja voluntário!
      </h2>
      <p className="c-joinUs__description">
        Quer participar de alguma ação? Torne-se um valioso voluntário do
        Gretas. Sua atitude pode mudar vidas!
      </p>
      <a
        className="c-joinUs__action c-button c-button-danger"
        href="https://wa.me/5581991984672"
        target="_blank"
        rel="noreferrer"
      >
        Junte-se a nós
      </a>
      <PaperEffect className="c-joinUs__bottom" />
    </section>
  );
}
