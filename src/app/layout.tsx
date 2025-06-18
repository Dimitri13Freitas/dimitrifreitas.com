import "./app.css";
import { ReactNode } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export const metadata = {
  title: "dimitrifreitas.com",
  description: "Este irá ser meu portfólio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="h-[100vh] flex overflow-hidden bg-white-dark">
          <Footer />
          <div className="flex flex-col md:flex-row mt-0 md:mt-16 w-full realtive">
            <Header />
            <div className="w-full relative z-10 mt-2 md:mt-0">
              <div className="bg-white-main h-screen md:h-full overflow-y-auto pt-7 px-8 pb-4 md:px-16 md:py-2 md:pt-9 rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none card-front shadow">
                <main className="max-w-[740px]">{children}</main>
              </div>
              <div className="bg-white-light  h-screen md:h-full w-full px-16 py-9 -translate-y-10 md:-translate-x-5 md:translate-y-5 shadow absolute top-0 rounded-t-3xl md:rounded-tl-3xl md:rounded-tr-none card-back md:scale-none scale-95"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
