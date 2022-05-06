import React from "react";
import * as SC from "./SVGIcon.styles";

const SVGIcon = ({ className, color, src, size }) => {
  return (
    <SC.SVGIcon className={className} color={color} image={src} size={size} />
  );
};

export default SVGIcon;
