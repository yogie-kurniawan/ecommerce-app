import numberFormat from "./numberFormat";
const currencyFormat = (number) => {
  return `Rp${numberFormat(number)}`;
};

export default currencyFormat;
