import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import FlowerEffect from "../shared/FlowerEffect"
import HighlightedText from "../shared/HighlightedText"
import PaperEffect from "../shared/PaperEffect"

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
      <PaperEffect className="c-intro__bottom" />
      <FlowerEffect className="c-intro__flowerTopLeft" />
    </section>
  )
}
