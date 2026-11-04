"use client";
import { Paragraph } from "@/app/components/paragraph";
import { useState } from "react";
import { projects } from "../../data/projetos";
import { Title } from "@/app/components/title";

interface ProjectTools {
  tech?: string[];
  deploy?: string;
}

interface Project {
  title: string;
  url: string;
  desc: string;
  tools?: ProjectTools;
}

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pj: Project = projects[selectedIndex] ?? projects[0];

  function renderAboutProject(project: Project) {
    return (
      <div
        key={selectedIndex}
        className="w-full md:w-96 md:max-w-md p-5 rounded-2xl text-white-main bg-linear-to-r from-blue-main to-blue-light shadow-md transition-all flex flex-col justify-between"
      >
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold tracking-tight">
              <a
                className="hover:underline inline-flex items-center gap-1.5"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
                <svg
                  className="w-4 h-4 inline opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </h3>
          </div>

          <Paragraph className="mt-3 text-white-main/90 text-sm leading-relaxed">
            {project.desc}
          </Paragraph>

          {project.tools?.tech && project.tools.tech.length > 0 && (
            <div className="mt-4 flex gap-1.5 flex-wrap">
              {project.tools.tech.map((e, i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 text-white font-medium"
                >
                  #{e}
                </span>
              ))}
            </div>
          )}

          {project.tools?.deploy && (
            <div className="mt-3 text-xs text-white-main/80 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
              <span>
                deploy on{" "}
                <span className="font-semibold text-white">
                  {project.tools.deploy}
                </span>
              </span>
            </div>
          )}
        </div>

        <div className="mt-5 pt-3 border-t border-white/20">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white hover:underline"
          >
            Acessar projeto
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Title>Projetos</Title>
      <section className="flex flex-col md:flex-row items-stretch md:items-start gap-4 md:gap-6 w-full">
        <ul className="text-gray-main flex flex-col gap-1 w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r-2 border-black/10 pb-3 md:pb-0 md:py-2 font-semibold">
          {projects.map((e, i) => {
            const isActive = selectedIndex === i;
            return (
              <li key={i} className="list-none">
                <button
                  type="button"
                  onClick={() => setSelectedIndex(i)}
                  className={`w-full text-left py-2 px-3.5 cursor-pointer transition-all flex items-center gap-2.5 text-base md:text-lg ${
                    isActive
                      ? "bg-black/10 text-blue-dark font-bold rounded-lg md:rounded-r-none md:rounded-l-lg md:border-r-2 md:border-blue-main md:-mr-[2px]"
                      : "text-gray-main hover:text-blue-dark hover:bg-black/5 rounded-lg md:rounded-r-none md:rounded-l-lg"
                  }`}
                >
                  <span
                    className={
                      isActive ? "text-blue-main font-bold" : "text-blue-light"
                    }
                  >
                    {i + 1}.
                  </span>
                  <span className="truncate">{e.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="w-full flex-1 max-w-full">
          {renderAboutProject(pj)}
        </div>
      </section>
    </>
  );
}
