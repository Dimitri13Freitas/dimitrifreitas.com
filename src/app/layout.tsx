import "./app.css";
import { ReactNode } from "react";

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
      <body>{children}</body>
    </html>
  );
}
