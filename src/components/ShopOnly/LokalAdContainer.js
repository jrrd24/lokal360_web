import React, { useState } from "react";
import PropTypes from "prop-types";
import theme from "../../Theme";

function LokalAdContainer({ data }) {
  const { ad_name, ad_image } = data;
  const [isHovered, setIsHovered] = useState(false);

  const adNameStyles = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)`,
    color: "#fff",
    padding: "8px 16px",
    fontSize: 14,
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease-in-out", // Apply transition only to opacity property
  };

  return (
    <div
      style={{
        position: "relative",
        width: 300,
        height: 150,
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: 5,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={ad_image}
        alt={ad_name}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: theme.palette.background.paper,
          objectFit: "cover",
        }}
        loading="lazy"
      />
      <div style={adNameStyles}>{ad_name}</div>
    </div>
  );
}

LokalAdContainer.propTypes = {
  ad_name: PropTypes.string,
  ad_image: PropTypes.string,
};

export default LokalAdContainer;
