import React from "react";

function TruncateString({ str, n }) {
  return str.length > n ? str.slice(0, n - 1) + "..." : str;
}

export default TruncateString;
