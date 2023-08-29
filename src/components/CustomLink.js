import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import theme from "../Theme";

const CustomLink = (props) => {
  const { to, onClick, ...rest } = props;

  return (
    <Link
      component={RouterLink}
      to={to}
      variant="seeAll"
      underline="none"
      onClick={onClick}
      {...rest}
    />
  );
};

export default CustomLink;
