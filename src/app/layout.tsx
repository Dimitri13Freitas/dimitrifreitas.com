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
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="h-[100vh] flex overflow-hidden bg-white-dark">
          <Footer />
          <div className="flex mt-16 w-full realtive">
            <Header />
            <div className="w-[100vh] relative z-10">
              <div className="bg-white-main h-full w-[100vw] px-16 py-9 rounded-tl-3xl">
                <main className="max-w-[740px]">{children}</main>
              </div>
              <div className="bg-white-light h-full w-[100vw] -translate-x-5 translate-y-5 absolute top-0 -z-10 rounded-tl-3xl"></div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
