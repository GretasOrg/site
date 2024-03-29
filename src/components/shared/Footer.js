import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import InstagramSVG from "../../images/icons/instagram.inline.svg";
import FacebookSVG from "../../images/icons/facebook.inline.svg";

export default function Footer() {
  return (
    <footer className="c-footer">
      <StaticImage
        className="c-footer__logo"
        src="../../images/footer/logo.png"
        alt="Logo do Gretas - Fortalecendo o Sertão"
        loading="lazy"
        placeholder="tracedSVG"
        layout="fullWidth"
        objectFit="contain"
      />
      <ul className="c-footer__textLinks">
        <li className="c-footer__link">
          <a
            href="https://instagram.com/gretas_org"
            target="_blank"
            rel="noreferrer"
          >
            Sobre nós
          </a>
        </li>
        <li className="c-footer__link">
          <a
            href="https://wa.me/5581991984672"
            target="_blank"
            rel="noreferrer"
          >
            Contato
          </a>
        </li>
      </ul>
      <ul className="c-footer__socialLinks">
        <li className="c-footer__link">
          <a
            href="https://www.facebook.com/projetogretas/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookSVG className="c-footer__linkImage" />
            Facebook
          </a>
        </li>
        <li className="c-footer__link">
          <a
            href="https://instagram.com/gretas_org"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramSVG className="c-footer__linkImage" />
            Instagram
          </a>
        </li>
      </ul>
      <form
        className="c-footer__subscriptionForm"
        action="https://wa.me/5581991984672"
        method="GET"
      >
        <label className="c-footer__subscriptionLabel" htmlFor="email">
          Inscreva-se na nossa newsletter
        </label>
        <div className="c-footer__inputGroup">
          <input
            className="c-footer__subscriptionInput"
            type="email"
            name="email"
            placeholder="Seu e-mail"
          />
          <input
            className="c-footer__subscriptionSubmit c-button c-button-faded c-button-sm"
            type="submit"
            value="OK"
          />
        </div>
      </form>
      <ul className="c-footer__contact">
        <li className="c-footer__link">
          AV. NORTE MIGUEL ARRAES DE ALENCAR, 3003 - ROSARINHO. RECIFE-PE
        </li>
        <li className="c-footer__link">(81) 9 9198-4672</li>
        <li className="c-footer__link">contato@gretas.org</li>
      </ul>
    </footer>
  );
}
