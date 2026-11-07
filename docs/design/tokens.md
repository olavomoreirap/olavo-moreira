# Glossário de design tokens

A fonte da verdade é o CSS: `src/styles/global.css` (bloco `:root` + `@theme inline`).
Este arquivo explica **o que cada token significa e quando usar**. Se divergir do CSS, vale o CSS:
atualize este glossário.

Tema único, synthwave escuro ([ADR-0001](../adr/0001-tema-unico-synthwave-escuro.md)).

## Cor

| Token CSS | Hex | Papel | Contraste sobre `void` / `surface` |
| --- | --- | --- | --- |
| `--void` | `#0E0A1F` | Fundo da página | — |
| `--surface` | `#181233` | Cards, terminal, popovers | — |
| `--surface-2` | `#211A45` | Hover de superfícies, `muted` do shadcn | — |
| `--line` | `#3B2D66` | Bordas e divisores | — (decorativo) |
| `--ink` | `#EEE8FF` | Texto principal | 16,29 / 15,02 |
| `--ink-muted` | `#A89CCB` | Texto secundário, descrições | 7,66 / 7,06 |
| `--ink-dim` | `#8A7EB0` | Metadados (datas, contagens) | 5,26 / 4,85 |
| `--magenta` | `#FF5AD9` | Primário: CTA, links ativos, foco | 7,13 / 6,58 |
| `--cyan` | `#62E6EA` | Acento: prompt `$`, badge "aberto a conversas" | 12,96 / 11,96 |

Regras:
- Todo texto passa de 4,5:1 (WCAG AA). Texto sobre o magenta usa `--void` (7,13:1).
- O magenta é escasso: um CTA primário por bloco e o estado ativo/foco. O ciano é ainda mais raro.
- Nada de destacar uma palavra do título com cor.

Mapeamento shadcn (`@theme inline`): `background`=void, `card`/`popover`=surface,
`muted`=surface-2, `muted-foreground`=ink-muted, `primary`=magenta, `primary-foreground`=void,
`border`/`input`=line, `ring`=magenta.

## Brilho (glow)

| Token | Valor | Uso |
| --- | --- | --- |
| `--glow-sm` | `0 0 0 1px color-mix(magenta 60%), 0 0 16px -4px color-mix(magenta 55%)` | Hover de card e botão secundário |
| `--glow-md` | `0 0 0 1px magenta, 0 0 28px -6px color-mix(magenta 70%)` | Hover/foco do CTA primário |

## Tipografia ([ADR-0003](../adr/0003-tipografia-mono-e-sans.md))

| Token | Família | Uso |
| --- | --- | --- |
| `--font-mono` | Geist Mono | UI, títulos, home, código |
| `--font-sans` | Geist Mono (alias, para os componentes existentes) | UI |
| `--font-prose` | Geist | Corpo dos artigos (`.prose`) |

Escala (rem): 0,75 · 0,875 · 1 · 1,125 · 1,5 · 2,25 · clamp(2,25 → 3,5) no nome do hero.

## Espaço e raio

- Espaçamento: escala padrão do Tailwind (múltiplos de 0,25rem). Seções da home: `py-16` no mobile,
  `py-24` no desktop.
- `--radius`: `0.5rem`. Terminal e cards usam `--radius`; badges usam `9999px`.

## Movimento ([ADR-0004](../adr/0004-movimento-css-first.md))

| Token | Valor | Uso |
| --- | --- | --- |
| `--dur-fast` | `150ms` | Hover de cor |
| `--dur-base` | `240ms` | Glow, transformações pequenas |
| `--dur-slow` | `600ms` | Flicker de ligar do terminal, zoom da imagem do card |
| `--ease-out` | `cubic-bezier(.2,.8,.2,1)` | Padrão de entrada |

Períodos dos loops do hero (ADR-0009):

| Token | Valor | Uso |
| --- | --- | --- |
| `--loop-glitch` | `5s` | Rajada de glitch no nome (~0,3 s de falha por ciclo) |
| `--loop-type` | `8s` | `$ whoami` digita, segura, apaga e redigita |
| `--loop-sweep` | `7s` | Faixa de varredura CRT no terminal |

Tudo é zerado com `prefers-reduced-motion: reduce`; os loops são desligados
(`animation: none`) e o conteúdo aparece no estado final.
