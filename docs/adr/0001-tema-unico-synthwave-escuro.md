# ADR-0001: Tema único synthwave escuro

- **Status:** Aceito, 2026-11-07

## Contexto
O site tinha toggle dark/light. O tema light era o cinza padrão do shadcn, sem identidade, e a marca
(roxo profundo + magenta neon, fonte mono) só existia no dark. Glow e scanlines não funcionam sobre
fundo claro.

## Decisão
O site tem **um único tema, synthwave escuro, igual para todos os visitantes**.
- Os tokens vivem em `:root` (`src/styles/global.css`), e não mais em `.dark`.
- O `ThemeToggle` e o script de detecção de tema foram removidos.
- A variante Tailwind `dark:` foi redefinida como sempre ativa (`@custom-variant dark (&)`) para que
  os componentes shadcn existentes continuem com o estilo escuro sem reescrita.
- `color-scheme: dark` no `html`; `theme-color` único.
- Destaque de código usa só tema escuro (`github-dark`).

## Consequências
- Primeira impressão consistente e menos CSS para manter.
- Quem prefere tema claro não tem opção. O contraste AA (ver tokens) compensa na leitura longa.
- Substitui a decisão do briefing original de manter o toggle.
