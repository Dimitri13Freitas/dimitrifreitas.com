"use client";
import { Paragraph } from "@/app/components/paragraph";
import { useState } from "react";
import { projects } from "../../data/projetos";
import { Title } from "@/app/components/title";

export default function Page() {
  const [pj, setPj] = useState(projects[0]);

  function handleClick(i: number) {
    setPj(projects[i]);
  }

  function renderAboutProject(project: typeof pj) {
    return (
      <div className="inline transition-all about rounded-lg w-96 p-4 text-white-dark bg-linear-to-r from-blue-main to-blue-light">
        <a
          className="underline hover:no-underline"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.title}
        </a>
        <Paragraph className="mt-5">{project.desc}</Paragraph>
        {project.tools && (
          <>
            <div className="mt-3 flex gap-[5px] flex-wrap">
              {project.tools.tech.map((e, i) => (
                <span key={i} className="text-white-dark opacity-50">
                  #{e}
                </span>
              ))}
            </div>
            <div className="mt-3">
              <span className="text-white-dark opacity-65">
                @deploy on {project.tools.deploy}
              </span>
            </div>
          </>
        )}
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
        {renderAboutProject(pj)}
      </section>
    </>
  );
}