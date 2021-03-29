import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import GretasEffect from '../shared/GretasEffect';
import HighlightedText from '../shared/HighlightedText';
import PaperEffect from '../shared/PaperEffect';
import { MiniArticleSmall, MiniArticleBig } from './MiniArticle';

export const miniBlogImage = graphql`
  fragment miniBlogImage on File {
    childImageSharp {
      gatsbyImageData(width: 401, placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
`;

export default function MiniBlog() {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "images/mini-blog/artigo-1.jpg" }) {
        ...miniBlogImage
      }
      image2: file(relativePath: { eq: "images/mini-blog/artigo-2.jpg" }) {
        ...miniBlogImage
      }
      image3: file(relativePath: { eq: "images/mini-blog/artigo-3.jpg" }) {
        ...miniBlogImage
      }
      image4: file(relativePath: { eq: "images/mini-blog/artigo-4.jpg" }) {
        ...miniBlogImage
      }
    }
  `);
  const img1 = getImage(data.image1);
  const img2 = getImage(data.image2);
  const img3 = getImage(data.image3);
  const img4 = getImage(data.image4);

  return (
    <section className="c-miniBlog">
      <div className="c-miniBlog__titleWrapper">
        <HighlightedText className="c-miniBlog__title">Blog</HighlightedText>
      </div>
      <MiniArticleSmall
        title="Agradecimentos"
        author="Assessoria de Comunicação"
        date="25 de FEVEREIRO, 2021"
        image={img1}
        imageAlt="Médica voluntária conversando com uma paciente"
        url="https://www.instagram.com/p/CLsbh-xrqtm/"
        tags={['PARCERIAS', 'REDE']}
      />
      <MiniArticleBig
        title="Educação para Saúde"
        author="Assessoria de Comunicação"
        date="22 de FEVEREIRO, 2021"
        image={img2}
        imageAlt="Sala de aula repleta de pessoas com um video sendo projetado na parede"
        url="https://www.instagram.com/p/CLkxw3lr1Lb/"
        tags={['EDUCAÇÃO', 'SAÚDE', 'AÇÕES']}
      />
      <MiniArticleBig
        title="Série de fotos #TBT"
        author="Assessoria de Comunicação"
        date="18 de FEVEREIRO, 2021"
        image={img3}
        imageAlt="Sala de aula repleta de pessoas com um video sendo projetado na parede"
        url="https://www.instagram.com/p/CLcCKXRLEgn/"
        tags={['PESSOAS', 'TBT']}
      />
      <MiniArticleSmall
        title="Novidade 2021: Atendimento médico presencial"
        author="Assessoria de Comunicação"
        date="15 de FEVEREIRO, 2021"
        image={img4}
        imageAlt="Médica voluntária conversando com uma paciente"
        url="https://www.instagram.com/p/CLUVPSkD0Zh/"
        tags={['PARCERIAS', 'REDE', 'SAÚDE']}
      />
      <a
        className="c-miniBlog__action c-button c-button-danger"
        href="https://instagram.com/gretas_org"
        target="_blank"
        rel="noreferrer"
      >
        Ver todas as publicações
      </a>
      <GretasEffect className="c-miniBlog__bg" />
      <PaperEffect className="c-miniBlog__bottom" />
    </section>
  );
}
