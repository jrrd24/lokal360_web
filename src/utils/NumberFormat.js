function NumberFormat({ value, isPeso, isShortened }) {
  const formattedValuePeso = value?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedValue = value?.toLocaleString(undefined, {});
  const peso = `₱ ${formattedValuePeso}`;
  const shortenedNumber = (value) => {
    if (value >= 1e9) {
      return `${(value / 1e9).toFixed(1)}B`;
    } else if (value >= 1e6) {
      return `${(value / 1e6).toFixed(1)}M`;
    } else if (value >= 1e3) {
      return `${(value / 1e3).toFixed(1)}k`;
    } else {
      return value.toString();
    }
  };

  return isPeso ? peso : isShortened ? shortenedNumber(value) : formattedValue;
}

export default NumberFormat;
