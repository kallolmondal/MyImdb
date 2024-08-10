import React from "react";
import { ShimmerThumbnail } from "react-shimmer-effects";

function ShimmerBanner({ height: height = 550, width: width = null }) {
  return <ShimmerThumbnail height={height} width={width} rounded />;
}

export default ShimmerBanner;
