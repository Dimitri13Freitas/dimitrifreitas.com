import React from "react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-title-md  text-blue-dark md:mb-8 mb-4">{children}</h2>
  );
};
