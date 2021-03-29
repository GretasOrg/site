import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

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
        <a className="c-menu__item" href="/">
          Home
        </a>
        <a className="c-menu__item" href="https://instagram.com/gretas_org">
          Sobre nós
        </a>
      </ul>
      <a className="c-menu__action" href={actionLink}>
        Doe agora!
      </a>
      <button
        className={isOpen ? 'c-menu__btn js-open' : 'c-menu__btn'}
        aria-label="Menu"
        onClick={onClick}
      ></button>
      <nav className={isOpen ? 'c-mobileMenu js-open' : 'c-mobileMenu'}>
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
