import React from "react"

export default function Footer() {
  return (
    <footer className="c-footer">
      <img
        className="c-footer__paperEffect"
        src="assets/images/footer/paper-effect.svg"
        alt="Efeito de papel rasgado"
      />
      <img
        className="c-footer__logo"
        src="assets/images/footer/logo.svg"
        alt="Logo do Gretas - Fortalecendo o Sertão"
      />
      <ul className="c-footer__textLinks">
        <li className="c-footer__link">
          <a href="https://instagram.com/gretas_org" target="_blank">
            Sobre nós
          </a>
        </li>
        <li className="c-footer__link">
          <a href="https://wa.me/5581991984672" target="_blank">
            Contato
          </a>
        </li>
      </ul>
      <ul className="c-footer__socialLinks">
        <li className="c-footer__link">
          <a href="https://www.facebook.com/projetogretas/" target="_blank">
            <img
              className="c-footer__linkImage"
              src="assets/images/icons/facebook.svg"
              alt="Logo Facebook"
            />
            Facebook
          </a>
        </li>
        <li className="c-footer__link">
          <a href="https://instagram.com/gretas_org" target="_blank">
            <img
              className="c-footer__linkImage"
              src="assets/images/icons/instagram.svg"
              alt="Logo Instagram"
            />
            Instagram
          </a>
        </li>
      </ul>
      <form className="c-footer__subscriptionForm">
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
        <li className="c-footer__link">+55 (81) 9 9723-0560</li>
        <li className="c-footer__link">contato@gretas.org</li>
      </ul>
    </footer>
  )
}
