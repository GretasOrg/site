import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import CurrencyInput from '../shared/CurrencyInput';

export default function Donation({
  className,
  plan,
  price,
  title,
  description,
  auxText,
  image,
  imageAlt,
  readonly = false,
  titleSmall = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPrice, setPrice] = useState(price);
  const [currentFrequency, setFrequency] = useState(0);
  const options = [
    { value: 0, label: 'Somente uma vez' },
    { value: 1, label: 'Por mês' },
  ];

  function url() {
    return `https://gretas.faturasimples.com.br/contratar/gretas?plano=${plan}&valor=${currentPrice}&recorrencia=${currentFrequency}`;
  }

  function selectedOption() {
    return options.find((el) => el.value === currentFrequency);
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleKeyDownOnDropdownToggle(ev) {
    if (ev.key === 'Enter') {
      toggleDropdown();
    }
  }

  function handleKeyDownOnOption(ev, value) {
    if (ev.key === 'Enter') {
      setFrequency(value);
    }
  }

  return (
    <article
      className={`c-donation ${className || ''} ${
        titleSmall === true ? 'c-donation-titleSmall' : ''
      }`}
    >
      <div className="l-donation__header">
        <GatsbyImage
          className="c-donation__img"
          image={image}
          alt={imageAlt}
          loading="lazy"
          objectFit="cover"
        />
      </div>
      <div className="l-donation__body">
        <h3 className="c-donation__title">{title}</h3>
        <p className="c-donation__text">{description}</p>
        <div className="c-donation__price">
          <span className="c-donation__currency">R$</span>
          <CurrencyInput
            className="c-donation__input c-input c-input-success c-input-noControls c-input-big"
            ariaTitle={title}
            onChange={setPrice}
            initialValue={price}
            readonly={readonly}
          ></CurrencyInput>
        </div>
        {/* role="listbox"
        onKeyDown={handleDropdownKey}
        aria-label="Seleção de frequência de doação"
      */}
        <div
          className={`c-donation__plan c-dropdown ${isOpen ? '' : 'js-closed'}`}
          onClick={toggleDropdown}
          onKeyDown={handleKeyDownOnDropdownToggle}
          role="button"
          tabIndex={0}
        >
          <span className="c-dropdown__selected">
            {selectedOption()?.label}
          </span>
          <ul
            className={`c-dropdown__menu ${isOpen ? '' : 'js-closed'}`}
            role="listbox"
            id={'Seleção ' + title}
          >
            {options.map((option) => (
              <li
                className="c-dropdown__option"
                key={option.value}
                onClick={() => setFrequency(option.value)}
                onKeyDown={(ev) => handleKeyDownOnOption(ev, option.value)}
                role="option"
                aria-selected={currentFrequency === option.value}
                aria-labelledby={'Seleção ' + title}
              >
                {option.label}
                {/* <button
                
              >
              </button> */}
              </li>
            ))}
          </ul>
        </div>
        <p className="c-donation__description">{auxText}</p>
        <a
          className="c-donation__action c-button c-button-success c-button-round"
          href={url()}
          target="_blank"
          rel="noreferrer"
        >
          Doar
        </a>
      </div>
    </article>
  );
}
