import React from "react";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <div className="pl-8 pr-16 pt-8">
      <h1 className="font-semibold text-title-lg text-blue-dark">
        Dimitri Freitas
      </h1>
      <div className="mb-4">
        <span className="px-2 py-1 rounded-[8px] bg-blue-main text-white-main">
          Desenvolvedor Front-end
        </span>
      </div>
      <p className="text-sm text-gray-main w-[316px]">
        Faço interfaces limpas e interativas, com foco no usuário.
      </p>
      <Nav />
    </div>
  );
};
