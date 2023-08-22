/*  
 * NUMBER FORMAT
 *    USE:   Number format is used to format a number to either the default format
 *           (1,000,000), peso format (₱ 1,000,000.00), or shortened format (1.0M)
 ?    PROPS: value = the number
 ?           isPeso = (boolean) if true the number will be converted to peso format
 ?           isShortened = (boolean) if true the number will be converted to shortened format
 *    NOTE:  if "isPeso" and "isShortened" are null, the number will be in the default format
 *    SAMPLE:  <NumberFormat value={total} isPeso={true} />
*/

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
