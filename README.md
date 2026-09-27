# 🌍 Go Flow

O **Go Flow** é um projeto em desenvolvimento que tem como objetivo proporcionar uma experiência única para quem busca conhecer novos lugares e suas culturas. 🚀

Atualmente, o projeto conta com uma **Landing Page**, mas em breve novas funcionalidades estarão disponíveis, como páginas dedicadas a diferentes locais, onde será possível explorar informações sobre a cultura, curiosidades e muito mais.

<img width="2560" height="1392" alt="Captura de tela 2025-09-03 222328" src="https://github.com/user-attachments/assets/3d4afb93-0fcf-49a5-ab6f-b0b872befff1" />


---

## ✨ Features

* [x] Landing Page moderna e responsiva
* [x] Português e inglês (`/` e `/en`)
* [ ] Página com listagem de locais
* [ ] Detalhes culturais e históricos de cada local
* [ ] Exploração interativa e dinâmica

---

## 🛠️ Tecnologias utilizadas

* [Next.js (App Router)](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide Icons](https://lucide.dev/)
* [next-intl](https://next-intl.dev/) (internacionalização)

---

## 🌐 Traduções

Os textos ficam em `messages/pt.json` e `messages/en.json` (o português é a referência de tipos: uma chave usada no código que não exista em `pt.json` quebra o build). As rotas e os idiomas são configurados em `src/i18n/routing.ts`.

Para adicionar um texto, crie a mesma chave nos dois arquivos e use `useTranslations("Namespace")` no componente.

---

## 🚀 Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/lucaasvicent/go-flow.git
```

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:3000
```

---

## 📌 Status do projeto

🚧 Em desenvolvimento. Novas features em breve!

---

## 📷 Demonstração

👉 [Acesse aqui a versão hospedada](https://go-flow-weld.vercel.app/)

---

## 📄 Licença

Este projeto está sob a licença MIT.
