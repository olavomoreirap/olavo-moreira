# ADR-0003: Tipografia, mono como identidade e sans no corpo dos posts

- **Status:** Aceito, 2026-11-07

## Contexto
Todo o site usava Geist Mono, inclusive o corpo dos artigos. Mono em texto longo reduz a velocidade
de leitura. A Geist (sans) já estava em `public/fonts`, mas não era usada.

## Decisão
- **Geist Mono:** títulos, UI, navegação, metadados, código e toda a home.
- **Geist (sans):** corpo dos artigos (`.prose` nas páginas de post), com medida máxima de ~70ch.
- Nenhuma fonte nova é baixada.

## Consequências
- Leitura mais confortável sem perder a identidade terminal.
- A Geist passa a ser carregada nas páginas de post (woff2 variável, `font-display: swap`).
