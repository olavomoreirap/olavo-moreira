# ADR-0004: Movimento CSS-first, nível médio, com reduced-motion

- **Status:** Aceito, 2026-11-07

## Contexto
O objetivo é um site com cara de "feito por quem domina o que faz" sem piorar os Core Web Vitals
nem atrapalhar a leitura. O site é Astro com pouquíssimo JS; Framer Motion adicionaria ~30–50 KB de
JS e exigiria hidratar ilhas React só para animar.

## Decisão
Nível **médio**, com o movimento concentrado num único momento (o hero):
- Glitch no nome **uma vez** no load.
- Digitação do card-terminal **uma vez** no load (CSS `steps()`; o texto existe no DOM desde o início).
- Spotlight que segue o cursor **só no hero**, só com `(hover: hover) and (pointer: fine)`. Um script
  inline mínimo apenas atualiza duas CSS vars.
- Hover com glow em CTAs e cards de projeto.
- Grid de fundo estilo horizonte synthwave e scanlines **estáticos**, só no hero.
- Reveal ao rolar nos cards de projeto via `animation-timeline: view()`. **Fallback: o conteúdo
  aparece estático, sem JS.** Isso diverge da ideia inicial de usar um `IntersectionObserver`
  como fallback: o ganho visual não justifica JS extra.
- Páginas de post: só a barra de progresso de leitura (`animation-timeline: scroll()`).
- Sem Framer Motion nem qualquer outra lib de animação.

Todo movimento é desligado com `prefers-reduced-motion: reduce`.

## Consequências
- Zero JS novo de animação além de ~15 linhas inline.
- Navegadores sem `animation-timeline` veem o conteúdo sem reveal, o que é aceitável.
