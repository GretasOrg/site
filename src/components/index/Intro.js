import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import FlowerEffect from "../shared/FlowerEffect";
import HighlightedText from "../shared/HighlightedText";
import PaperEffect from "../shared/PaperEffect";

export const introBgImg = graphql`
  fragment bgImage on File {
    childImageSharp {
      gatsbyImageData(width: 1920, placeholder: BLURRED, layout: FULL_WIDTH)
    }
  }
`;

export default function Intro({ data }) {
  const { bgImg, linkText, title } = data;
  const bgImgObj = getImage(bgImg.childImageSharp.gatsbyImageData);
  console.log(bgImgObj);
  return (
    <section className="c-intro">
      <GatsbyImage
        className="c-intro__bg"
        image={bgImgObj}
        alt="Criança Sertaneja"
        loading="lazy"
        objectFit="cover"
        style={{ position: "absolute" }}
      />
      {title.map((line, index) => (
        <HighlightedText className="c-intro__title" color="warning" key={index}>
          {line}
        </HighlightedText>
      ))}
      <a
        href="#features"
        className="c-button c-button-danger c-intro__readMore"
      >
        {linkText}
      </a>
      <PaperEffect className="c-intro__bottom" />
      <FlowerEffect className="c-intro__flowerTopLeft" />
    </section>
  );
}
