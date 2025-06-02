import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Paragraph } from "./components/paragraph";

export default function Home() {
  return (
    <div className="h-[100vh] flex overflow-hidden bg-white-dark">
      <Footer />
      <div className="flex mt-16 w-full realtive">
        <Header />
        <div className="w-[100vh] relative z-10">
          <div className="bg-white-main h-full w-[100vw] px-16 py-9 rounded-tl-3xl">
            <div className="max-w-[740px]">
              <h2 className="text-title-md text-blue-dark mb-8">Sobre</h2>
              <Paragraph>
                Olá! Sou um desenvolvedor front-end apaixonado por criar
                interfaces modernas, interativas e funcionais. Tenho experiência
                com
                <strong>
                  {" "}
                  React, React Native, TypeScript e desenvolvimento de
                  interfaces responsivas
                </strong>
                , sempre buscando entregar aplicações performáticas e
                intuitivas.
              </Paragraph>
              <Paragraph>
                Atualmente, trabalho na área de TI em uma empresa de construção
                ferroviária e estou cursando{" "}
                <strong>pós-graduação em Frontend Engineering</strong> . Além
                disso, estou sempre explorando novas tecnologias e desenvolvendo
                projetos pessoais, como sistemas de gerenciamento, aplicações
                mobile e soluções para o dia a dia.
              </Paragraph>
              <Paragraph>
                Meu foco é transformar ideias em experiências digitais
                envolventes, combinando <strong>design e código</strong> para
                criar produtos que fazem a diferença. Se você busca um
                desenvolvedor comprometido e apaixonado por tecnologia, vamos
                conversar!
              </Paragraph>
            </div>
          </div>
          <div className="bg-white-light h-full w-[100vw] -translate-x-5 translate-y-5 absolute top-0 -z-10 rounded-tl-3xl"></div>
        </div>
      </div>
    </div>
  );
}
