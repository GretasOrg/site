import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import PaperEffect from "../shared/PaperEffect";

export default function JoinUs({ data }) {
  const { title, text, bgImg, bgImgAlt, linkText } = data;
  const bgImgObj = getImage(bgImg);
  return (
    <section className="c-joinUs">
      <GatsbyImage
        className="c-joinUs__bg"
        image={bgImgObj}
        alt={bgImgAlt}
        objectFit="cover"
        style={{ position: "absolute" }}
      />
      <h2 className="c-joinUs__title">{title}</h2>
      <p className="c-joinUs__description">{text}</p>
      <a
        className="c-joinUs__action c-button c-button-danger"
        href="https://wa.me/5581991984672"
        target="_blank"
        rel="noreferrer"
      >
        {linkText}
      </a>
      <PaperEffect className="c-joinUs__bottom" />
    </section>
  );
}
