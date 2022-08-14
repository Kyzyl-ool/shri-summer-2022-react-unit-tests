export const digitSplitter = (
  value,
  step = 3,
  sep = ' '
) => {
  const strValue = String(value);
  const [whole, fract] = strValue.split('.');

  if (strValue.includes('.')) {
    return digitSplitter(Number(whole)) + '.' + fract;
  }

  const reversedDigits = whole.split('').reverse().join('');
  const parts = [];
  let i = 0;
  while (i < reversedDigits.length) {
    parts.push(reversedDigits.slice(i, i + step));
    i += step;
  }

  return parts
    .reverse()
    .map((v) => v.split('').reverse().join(''))
    .join(sep);
};

export const splitDigitToNumber = (value) => {
  if (value === undefined) {
    return null;
  }

  const newValue = value.split(/\s/).join('');

  if (newValue.match(/^\d*[.,]?\d*$/)) {
    return Number(value.replace(/\s/g, '').replace(/,/, '.'));
  }

  return null;
};
