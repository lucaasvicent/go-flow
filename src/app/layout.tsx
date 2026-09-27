// O layout real (com <html> e <body>) fica em [locale]/layout.tsx.
// Este existe apenas para que o app/not-found.tsx funcione fora das rotas de idioma.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
