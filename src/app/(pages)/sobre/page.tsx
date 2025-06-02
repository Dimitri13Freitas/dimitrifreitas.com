import { Paragraph } from "@/app/components/paragraph";
import React from "react";

export default function Page() {
  return (
    <>
      <h2 className="text-title-md text-blue-dark mb-8">Sobre</h2>
      <Paragraph>
        Olá! Sou um desenvolvedor front-end apaixonado por criar interfaces
        modernas, interativas e funcionais. Tenho experiência com
        <strong>
          {" "}
          React, React Native, TypeScript e desenvolvimento de interfaces
          responsivas
        </strong>
        , sempre buscando entregar aplicações performáticas e intuitivas.
      </Paragraph>
      <Paragraph>
        Atualmente, trabalho na área de TI em uma empresa de construção
        ferroviária e estou cursando{" "}
        <strong>pós-graduação em Frontend Engineering</strong> . Além disso,
        estou sempre explorando novas tecnologias e desenvolvendo projetos
        pessoais, como sistemas de gerenciamento, aplicações mobile e soluções
        para o dia a dia.
      </Paragraph>
      <Paragraph>
        Meu foco é transformar ideias em experiências digitais envolventes,
        combinando <strong>design e código</strong> para criar produtos que
        fazem a diferença. Se você busca um desenvolvedor comprometido e
        apaixonado por tecnologia, vamos conversar!
      </Paragraph>
    </>
  );
}
