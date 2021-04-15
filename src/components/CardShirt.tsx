import React, { useEffect, useState } from "react";



export const CardShirt = ({ src, alt = "", className = "", ...props }: any) => {
  return (
    <div
      style={{
        backgroundImage: "url(" + src + ")",
        backgroundSize: "cover"
      }}
      className={className}
    />
  );
};
