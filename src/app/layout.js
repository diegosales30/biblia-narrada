import { Inter } from "next/font/google";

import "./globals.css";
import Provider from "@/context";
import Aside from "@/components/aside";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bíblia Narrada",
  description: "A Palavra de Deus para todos",
  keywords: "Bíblia, Narrada, Livros Sagrados, Deus, Jesus Cristo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Provider>
        <body >
          <Aside />
          {children}
        </body>
      </Provider>
    </html>
  );
}
