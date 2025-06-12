import React from "react";

export const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`${className ? className : "mb-6"} `}>{children}</p>;
};
