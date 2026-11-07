# ADR-0008: Sem reveal ao rolar nos cards de projeto

- **Status:** Aceito
- **Substitui:** ADR-0004 (apenas o item "reveal ao rolar nos cards de projeto")

## Contexto

O ADR-0004 previa um reveal (opacidade + deslocamento) nos cards de projeto via
`animation-timeline: view()`. No desktop os cards ficam na linha da dobra: a
animação para no meio enquanto o usuário não rola, e o texto fica
semitransparente. O Lighthouse acusou `color-contrast` (ex.: `--ink-muted`
renderizado como `#7d788e`, 4,4:1) por causa disso — e o usuário real vê o
mesmo card apagado.

## Decisão

Os cards de projeto aparecem estáticos, sem reveal. O restante do ADR-0004
(glitch único no título, terminal digitado, spotlight no hero, durações via
tokens e `prefers-reduced-motion`) continua valendo.

## Consequências

- Acessibilidade do Lighthouse desktop sobe de 96 para 100.
- O movimento da home fica concentrado no hero, um único momento orquestrado.
- Se um reveal voltar, ele não pode mexer na opacidade de conteúdo que já está
  na viewport no carregamento.
