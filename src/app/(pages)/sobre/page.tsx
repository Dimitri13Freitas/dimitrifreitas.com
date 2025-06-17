import { Paragraph } from "@/app/components/paragraph";
import React from "react";
import { parseISO, format, intervalToDuration } from "date-fns";
import { carrerJobs } from "../../data/sobre";
import { DownloadIcon } from "../../../../public/download";
import { Title } from "@/app/components/title";

export default function Page() {
  function renderJobItems() {
    return carrerJobs.map((e, i) => {
      return (
        <div className="gap-3.5" key={i}>
          <h3 className="text-lg font-semibold text-blue-light">
            {e.jobTitle}
          </h3>
          <div className="flex gap-3 ml-8">
            <div className="w-1 rounded-full bg-black-main/10"></div>
            <div className="text-gray-main/70 py-1.5">
              <p>
                <a
                  className="underline text-gray-main"
                  target="_blank"
                  href={e.companyUrl}
                >
                  {e.company}
                </a>
                <span> / {e.location}</span>
              </p>
              <p>
                <span>{format(parseISO(e.startDate), "LLL yyyy")}</span>
                <span> - </span>
                <span>
                  {e.endDate
                    ? format(parseISO(e.endDate), "LLL yyyy")
                    : "Presente"}
                </span>
                <span> / {getDuration(e.startDate, e.endDate)}</span>
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  const getDuration = (startDate: string, endDate: string) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    });

    let durationStr = "";

    if (durationObj.years && durationObj.years > 1) {
      durationStr = `${durationObj.years} anos `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} ano `;
    }

    if (durationObj.months && durationObj.months > 1) {
      durationStr += `${durationObj.months} meses`;
    } else if (durationObj.months === 1) {
      durationStr += `${durationObj.months} mês`;
    }

    return durationStr;
  };

  return (
    <>
      <Title>Sobre</Title>
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
        <strong>pós-graduação em Frontend Engineering</strong>. Além disso,
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
      <a
        className="bg-black-main/10 px-2.5 py-1.5 rounded-lg text-white-main bg-linear-to-r from-blue-main to-blue-light"
        href=""
      >
        <DownloadIcon />
        Download CV
      </a>
      <h2 className="text-title-md mt-16 mb-8 text-blue-dark">Carreira</h2>
      <div className="flex flex-col gap-7">{renderJobItems()}</div>
    </>
  );
}
