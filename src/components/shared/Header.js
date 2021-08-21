import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import InstagramSVG from "../../images/icons/instagram.inline.svg";

export default function Header({ actionLink }) {
  const [isOpen, setOpen] = useState(false);

  function onClick() {
    setOpen(!isOpen);
  }

  return (
    <header className="c-menu">
      <StaticImage
        src="../../images/menu/logo.png"
        className="c-menu__logo"
        alt="Logo Gretas"
        loading="eager"
        placeholder="none"
        layout="constrained"
        objectFit="contain"
      />
      <ul className="l-menu__items">
        <li className="c-menu__item">
          <a href="/">Home</a>
        </li>
        <li className="c-menu__item">
          <a href="https://instagram.com/gretas_org">Sobre nós</a>
        </li>
      </ul>
      <a className="c-menu__action" href={actionLink}>
        Doe agora!
        <InstagramSVG className="c-menu__actionIcon" />
      </a>
      <button
        className={isOpen ? "c-menu__btn js-open" : "c-menu__btn"}
        aria-label="Menu"
        onClick={onClick}
      ></button>
      <nav className={isOpen ? "c-mobileMenu js-open" : "c-mobileMenu"}>
        <a className="c-mobileMenu__item" href="/">
          Home
        </a>
        <a
          className="c-mobileMenu__item"
          href="https://instagram.com/gretas_org"
        >
          Sobre nós
        </a>
      </nav>
    </header>
  );
}
