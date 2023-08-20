function NumberFormat({ value, isPeso }) {
  const formattedValuePeso = value?.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedValue = value?.toLocaleString(undefined, {});
  const peso = `₱ ${formattedValuePeso}`;
  return isPeso ? peso : formattedValue;
}

export default NumberFormat;
