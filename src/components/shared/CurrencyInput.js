import React, { useState } from 'react';

export default function CurrencyInput({
  ariaTitle,
  readonly = false,
  initialValue = '0.00',
  onChange,
  className,
}) {
  const [digits, setDigits] = useState([]);
  const possibleKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const parsedInitialValue =
    typeof initialValue === 'number'
      ? initialValue.toFixed(2)
      : parseFloat(initialValue).toFixed(2);

  function digitsToNumber(currentDigits) {
    const digitsLeft = 3 - currentDigits.length;
    let parsedDigits = [];
    for (let index = 0; index < digitsLeft; index++) {
      parsedDigits.push(0);
    }

    parsedDigits = [...parsedDigits, ...currentDigits];

    const result = parsedDigits.reduceRight((acc, digit, index, array) => {
      const multiplier = 0.01 * Math.pow(10, array.length - 1 - index);
      return roundNumber(acc + digit * multiplier);
    }, 0.0);
    return result;
  }

  function roundNumber(n) {
    return Math.round(n * 100) / 100;
  }

  function onKeyDown(ev) {
    ev.preventDefault();
    let newDigits;
    if (possibleKeys.includes(ev.key)) {
      newDigits = [...digits, ev.key];
      setDigits(newDigits);
      onChange(digitsToNumber(newDigits));
    } else if (ev.key === 'Backspace') {
      newDigits = [...digits.slice(0, digits.length - 1)];
      setDigits(newDigits);
      onChange(digitsToNumber(newDigits));
    }
  }

  function onInputChange(ev) {
    onChange(roundNumber(ev.target.value));
  }

  return (
    <input
      onChange={onInputChange}
      value={digitsToNumber(digits) || parsedInitialValue}
      className={className}
      type="number"
      aria-label={'Valor do ' + ariaTitle}
      onKeyDown={onKeyDown}
      readOnly={readonly === true}
      disabled={readonly === true}
    />
  );
}
