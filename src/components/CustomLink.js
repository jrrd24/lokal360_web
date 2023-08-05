import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import theme from "../Theme";

const CustomLink = (props) => {
  // Extract the "to" prop from the incoming props
  const { to, ...rest } = props;

  // Render the MUI Link component with the React Router Link as the "component" prop
  return (
    <Link
      component={RouterLink}
      to={to}
      variant="seeAll"
      underline="none"
      {...rest}
    />
  );
};

export default CustomLink;
