# Playwright SauceDemo - Page Object Model

Projeto de automação de testes E2E para o site [SauceDemo](https://www.saucedemo.com/) utilizando Playwright com TypeScript e padrão Page Object Model (POM).

## 🚀 Tecnologias

- **Playwright** - Framework de automação de testes
- **TypeScript** - Linguagem de programação
- **Node.js** - Runtime JavaScript
- **Page Object Model** - Padrão de design para organização dos testes

## 📁 Estrutura do Projeto

```
playwright-saucedemo-pom/
├── tests/
│   ├── fixtures/
│   │   └── data.json              # Dados de teste (usuários)
│   ├── helpers/
│   │   ├── functions.ts           # Funções auxiliares
│   │   └── textValidators.ts      # Validadores de texto
│   ├── pages/
│   │   ├── basePage.ts           # Página base (centraliza todas as páginas)
│   │   ├── loginPage.ts          # Página de login
│   │   ├── inventoryPage.ts      # Página de produtos
│   │   ├── cartPage.ts           # Página do carrinho
│   │   └── checkoutPage.ts       # Página de checkout
│   └── happyPath.spec.ts         # Cenários de teste happy path
├── playwright.config.ts          # Configurações do Playwright
├── package.json                  # Dependências e scripts
└── .env                         # Variáveis de ambiente
```

## 🛠️ Instalação

Requisitos para rodar o projeto

- node ^=22.11.0

1. Clone o repositório:
```bash
git clone <https://github.com/alexandremariano4/playwright-saucedemo-pom.git>
cd playwright-saucedemo-pom
```

2. Instale as dependências:
```bash
npm install
```

3. Verifique se está configurado o arquivo `.env` com a URL base:
```env
BASE_URL=https://www.saucedemo.com
```

## 🎯 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run pw:run` | Executa todos os testes |
| `npm run pw:ui` | Executa testes com interface gráfica |
| `npm run pw:run:headed` | Executa testes com browser visível |
| `npm run pw:debug` | Executa testes em modo debug |
| `npm run pw:run:report` | Executa testes e gera relatório HTML |
| `npm run pw:report` | Abre o relatório HTML |

## 🧪 Cenários de Teste

### Happy Path
- **Login com usuário padrão**: Testa o login com credenciais válidas
- **Fluxo completo de compra**: 
  - Login
  - Seleção de produto
  - Adição ao carrinho
  - Checkout
  - Finalização da compra

## 📋 Usuários de Teste

Os usuários estão configurados em `tests/fixtures/data.json`:

- **standard_user**: Usuário padrão para testes
- **visual_user**: Usuário para testes visuais

## 🏗️ Arquitetura - Page Object Model

### BasePage
Classe central que instancia todas as páginas e helpers, facilitando o acesso aos elementos.

### Páginas
- **LoginPage**: Gerencia ações de login
- **InventoryPage**: Gerencia seleção e detalhes de produtos
- **CartPage**: Gerencia ações do carrinho
- **CheckoutPage**: Gerencia processo de checkout

### Helpers
- **TextValidators**: Validações de texto por locator e role
- **Functions**: Funções auxiliares reutilizáveis

## ⚙️ Configurações

### Playwright Config
- **Browsers**: Chromium, Firefox, WebKit
- **Paralelização**: Habilitada
- **Screenshots**: Capturadas em falhas
- **Vídeos**: Gravados em falhas
- **Traces**: Coletados na primeira tentativa

### Timeouts
- **Expect**: 5 segundos
- **Retry**: 2 tentativas em CI

## 📊 Relatórios

Os relatórios são gerados automaticamente em:
- `playwright-report/`: Relatório HTML
- `test-results/`: Screenshots e vídeos de falhas

## 🚀 Executando os Testes

### Execução básica:
```bash
npm run pw:run
```

### Com interface gráfica:
```bash
npm run pw:ui
```

### Com browser visível:
```bash
npm run pw:run:headed
```

### Gerando relatório:
```bash
npm run pw:run:report
```

## 📝 Autor

**Alexandre Mariano**

---

*Projeto criado para demonstrar habilidades técnicas com Playwright e automação de testes E2E.*