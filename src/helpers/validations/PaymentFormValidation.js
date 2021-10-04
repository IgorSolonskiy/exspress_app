export const isValidInput = (e) => {
  let {name, value} = e.target;

  if (name === 'number') {
    const validData = e.target.value.match(/[0-9]/gi, '');

    value = validData ? validData.join('') : '';

    if (value)
      value = value.match(/\d{4}(?=\d{1})|\d+/g).join(' - ');

    if (value.length > 26)
      return null;
  }

  if (name === 'name') {

    value = e.target.value.toUpperCase();

    if (value.length > 25)
      return null;
  }

  if (name === 'expiry') {
    const validData = e.target.value.match(/[0-9]/gi, '');

    value = validData ? validData.join('') : '';

    if (value)
      value = value.match(/\d{2}(?=\d{1})|\d+/g).join('/');

    if (value.length > 5)
      return null;
  }

  if (name === 'cvc') {
    const validData = e.target.value.match(/[0-9]/gi, '');

    value = validData ? validData.join('') : '';

    if (value.length > 3)
      return null;
  }

  return {name, value};
};

export const CardNumberValidation = (value) => {
  const validData = value.match(/[0-9]/gi, '');

  return validData ? validData.join('') : '';
};

export const CardNameValidation = (value) => value.replace(/[^a-zA-Z ]/gi, '');

export const ExpiryValidation = (value) => {
  const validData = value.match(/[0-9]/gi, '').join('');

  if (validData) {
    const [exp_month, exp_year] = validData.match(/\d{2}(?=\d{1})|\d+/g);

    return {exp_month: Number(exp_month), exp_year: Number(`20${exp_year}`)};
  }

  return '';
};