# Architecture Decision Records

Decisões de design e arquitetura do site. Formato curto: **Contexto → Decisão → Consequências**.
Um ADR aceito não é editado; se a decisão mudar, crie um novo que o substitua (`Substitui: ADR-000X`).

| ADR | Título | Status |
| --- | --- | --- |
| [0001](0001-tema-unico-synthwave-escuro.md) | Tema único synthwave escuro | Aceito |
| [0002](0002-hierarquia-de-conversao-da-home.md) | Hierarquia de conversão da home e CTA de contato | Aceito |
| [0003](0003-tipografia-mono-e-sans.md) | Tipografia: mono como identidade, sans no corpo dos posts | Aceito |
| [0004](0004-movimento-css-first.md) | Movimento CSS-first, nível médio, com reduced-motion | Aceito (reveal substituído pelo 0008; glitch, digitação e spotlight pelo 0009) |
| [0005](0005-curadoria-de-projetos.md) | Curadoria de projetos via `featured` | Aceito |
| [0006](0006-idioma-e-dados-do-site.md) | Interface em pt-BR e dados canônicos do site | Aceito |
| [0007](0007-medicao.md) | Medição: Lighthouse antes/depois, Vercel Web Analytics e Speed Insights | Aceito |
| [0008](0008-sem-reveal-nos-cards.md) | Sem reveal ao rolar nos cards de projeto (substitui parte do 0004) | Aceito |
| [0009](0009-movimento-em-loop-no-hero.md) | Movimento em loop no hero, sem spotlight (substitui parte do 0004 e do 0008) | Aceito |

Glossário de tokens: [`docs/design/tokens.md`](../design/tokens.md).
