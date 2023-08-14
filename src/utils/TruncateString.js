function TruncateString({ str, n }) {
  if (!str) return "";
  else return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

export default TruncateString;
