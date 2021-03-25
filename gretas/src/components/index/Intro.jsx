import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import HighlightedText from "../shared/HighlightedText"

export default function Intro() {
  return (
    <section className="c-intro">
      {/* <img
        className="c-intro__bg"
        src="assets/images/intro/bg.png"
        alt="Criança sertaneja"
      /> */}
      <StaticImage
        className="c-intro__bg"
        src="../../images/intro/bg.png"
        alt="Criança Sertaneja"
        loading="lazy"
        placeholder="blurred"
        layout="fullWidth"
        objectFit="cover"
        style={{ position: "absolute" }}
      />
      <HighlightedText className="c-intro__title" color="warning">
        Desenvolver o Sertão
      </HighlightedText>
      <HighlightedText className="c-intro__title" color="warning">
        é dar oportunidade
      </HighlightedText>
      <HighlightedText className="c-intro__title" color="warning">
        de crescimento
      </HighlightedText>
      <HighlightedText className="c-intro__title" color="warning">
        à sua riqueza
      </HighlightedText>
      <a
        href="#features"
        className="c-button c-button-danger c-intro__readMore"
      >
        Saiba mais
      </a>
      <img
        className="c-intro__bottom"
        src="assets/images/intro/paper-effect.svg"
        alt="Efeito de papel rasgado"
      />
      <img
        className="c-intro__flowerTopLeft"
        src="assets/images/intro/green-flower.svg"
        alt="Desenho de flor verde"
      />
    </section>
  )
}
