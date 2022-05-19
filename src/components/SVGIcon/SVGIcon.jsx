import React from "react";
import * as SC from "./SVGIcon.styles";

const SVGIcon = ({ className, color, src, size, onClick, hoverBgColor }) => {
  return (
    <SC.SVGIcon
      className={className}
      color={color}
      image={src}
      size={size}
      onClick={onClick}
      hoverBgColor={hoverBgColor}
    />
  );
};

export default SVGIcon;
