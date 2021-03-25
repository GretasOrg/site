import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

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
      <text-highlight
        className="c-intro__title"
        color="warning"
        text="Desenvolver o Sertão"
      ></text-highlight>
      <text-highlight
        className="c-intro__title"
        color="warning"
        text="é dar oportunidade"
      ></text-highlight>
      <text-highlight
        className="c-intro__title"
        color="warning"
        text="de crescimento"
      ></text-highlight>
      <text-highlight
        className="c-intro__title"
        color="warning"
        text="à sua riqueza"
      ></text-highlight>
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
