"use client";

import NextError from "next/error";

// 404 para requisições que não passam pelo middleware de idioma.
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR">
      <body>
        <NextError statusCode={404} />
      </body>
    </html>
  );
}
