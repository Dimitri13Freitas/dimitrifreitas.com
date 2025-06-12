import { Paragraph } from "@/app/components/paragraph";
import React from "react";

export default function Page() {
  return (
    <>
      <h2 className="text-title-md text-blue-dark mb-8">Projetos</h2>
      <section className="flex items-start gap-4">
        <ul className="text-gray-main text-lg border-r-2 inline-block max-w-80 border-black/10 font-semibold">
          <li className="text-blue-dark rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors">
            <span className="text-blue-light ">1. </span>Rei da Pradaria
            Multiplayer
          </li>
          <li className="rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors">
            <span className="text-blue-light">2. </span>Titulo
          </li>
          <li className="rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors">
            <span className="text-blue-light">3. </span>Titulo
          </li>
          <li className="rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors">
            <span className="text-blue-light">4. </span>Titulo
          </li>
          <li className="rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors">
            <span className="text-blue-light">5. </span>Titulo
          </li>
          <li className="rounded-tl-lg rounded-bl-lg hover:bg-black/10 py-1.5 pl-3 pr-4 cursor-pointer transition-colors">
            <span className="text-blue-light">6. </span>Titulo
          </li>
        </ul>
        <div className="inline rounded-lg w-96 p-4 text-white-main bg-linear-to-r from-blue-main to-blue-light">
          <a
            className="underline hover:no-underline"
            href="https://dimitrifreitas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.dimitrifreitas.com
          </a>
          <Paragraph className="pt-6">Por enquanto sem descrição</Paragraph>
        </div>
      </section>
    </>
  );
}
