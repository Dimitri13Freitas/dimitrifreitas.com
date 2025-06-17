"use client";
import { Paragraph } from "@/app/components/paragraph";
import React, { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projetos";
import { Title } from "@/app/components/title";

export default function Page() {
  const [pj, setPj] = useState(projects[0]);

  function handleClick(i: number) {
    setPj(projects[i]);
  }

  function renderAboutProject() {
    return (
      <div className="inline transition-all about rounded-lg w-96 p-4 text-white-main bg-linear-to-r from-blue-main to-blue-light">
        <a
          className="underline hover:no-underline"
          href={pj.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {pj.title}
        </a>
        <Paragraph className="pt-6">{pj.desc}</Paragraph>
      </div>
    );
  }

  return (
    <>
      <Title>Projetos</Title>
      <section className="flex items-start flex-wrap gap-4">
        <ul className="text-gray-main text-lg py-4 border-r-2 inline-block max-w-80 border-black/10 font-semibold">
          {projects.map((e, i) => {
            return (
              <li
                key={i}
                onClick={() => handleClick(i)}
                className="rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors"
              >
                <span className="text-blue-light">{i + 1}. </span>
                {e.title}
              </li>
            );
          })}
        </ul>
        {renderAboutProject()}
      </section>
    </>
  );
}
