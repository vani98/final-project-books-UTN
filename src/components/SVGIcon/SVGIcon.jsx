import React from "react";
import * as SC from "./SVGIcon.styles";

const SVGIcon = ({ className, color, src, size, onClick }) => {
  return (
    <SC.SVGIcon
      className={className}
      color={color}
      image={src}
      size={size}
      onClick={onClick}
    />
  );
};

export default SVGIcon;
