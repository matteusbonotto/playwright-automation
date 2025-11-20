<p align="center">
  <img src="https://playwright.dev/img/playwright-logo.svg" alt="Playwright Logo" width="100"/>
</p>

<h1 align="center">Portfólio de Automação de Testes</h1>

<p align="center">
  <b>Repositório de demonstração para automação de testes utilizando <a href="https://playwright.dev/">Playwright</a>, <a href="https://fakerjs.dev/">Faker</a> e boas práticas de Page Object Model.</b>
</p>

---

## 📋 Sobre o projeto

Este repositório foi criado para servir como portfólio de automação de testes end-to-end, utilizando as tecnologias Playwright e Faker. Aqui você encontra exemplos de automações, organização de código, uso de Page Object Model (POM) e geração dinâmica de dados para testes.

## 🛠️ Tecnologias Utilizadas


<p>
  <a href="https://playwright.dev/">
    <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright Badge"/>
  </a>
  <a href="https://fakerjs.dev/">
    <img src="https://img.shields.io/badge/Faker-7B1FA2?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIgZmlsbD0iIzdiMWZhMiIvPjwvc3ZnPg==" alt="Faker Badge"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge"/>
  </a>
</p>

## 📁 Estrutura do Projeto

```
playwright-automation/
├── package.json
├── playwright.config.ts
├── tests/
│   ├── pom/
│   │   └── register.pom.ts
│   └── specs/
│       └── register.spec.ts
```

## ✨ Exemplos de Automação

- Cadastro automatizado em páginas de demonstração
- Uso de dados dinâmicos com Faker
- Estrutura POM para facilitar manutenção e reuso

## 💡 Como executar

```bash
npm install
npx playwright test
```

## 📚 Referências

- [Documentação Playwright](https://playwright.dev/)
- [Documentação Faker](https://fakerjs.dev/)

---

<p align="center">
  <b>Feito por @matheus Bonotto para mostrar habilidades em automação!</b>
</p>
