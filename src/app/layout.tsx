import "./app.css";
import { ReactNode, useEffect, useState } from "react";
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
            <div className="w-full relative z-10">
              <div className="bg-white-main h-full overflow-y-auto px-16 py-2 pt-9 rounded-tl-3xl card-front shadow">
                <main className="max-w-[740px]">{children}</main>
              </div>
              <div className="bg-white-light h-full w-full px-16 py-9 -translate-x-5 translate-y-5 shadow absolute top-0 rounded-tl-3xl card-back"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
