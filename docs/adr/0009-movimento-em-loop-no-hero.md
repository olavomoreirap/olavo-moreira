# ADR-0009: Movimento em loop no hero, sem spotlight

- **Status:** Aceito
- **Substitui:** ADR-0004 (itens "glitch único no título", "terminal digitado
  uma vez" e "spotlight no hero") e o trecho correspondente do ADR-0008

## Contexto

Depois de ver a home rodando, o dono do site pediu ajustes: o spotlight que
seguia o cursor no hero não agradou, o glitch do nome e a digitação do
terminal deveriam ficar em loop, o terminal precisava de um efeito CRT e os
botões secundários de um hover mais cyberpunk.

## Decisão

- **Spotlight removido** (markup, CSS e script). O hero não tem mais JS de
  movimento.
- **Glitch do nome em loop:** rajada de ~0,3 s a cada `--loop-glitch` (5 s),
  com `steps(1, end)` para o salto seco entre quadros.
- **Terminal CRT:** scanlines + vinheta estáticas, brilho de fósforo no texto,
  flicker de ligar uma única vez (`--dur-slow`) e uma faixa de varredura em
  loop (`--loop-sweep`, só `transform`).
- **`$ whoami` em loop:** digita, segura, apaga e redigita a cada
  `--loop-type` (8 s); a saída aparece uma vez e fica fixa.
- **Botão ghost:** no hover/foco, colchetes neon nos quatro cantos e split
  RGB ciano/magenta na borda e no texto.
- Durações e períodos vêm de tokens (`docs/design/tokens.md`).

## Consequências

- Movimento contínuo, porém em rajadas curtas e só no hero. Tudo é CSS e
  roda no compositor, exceto a digitação (`width` de um `span`), que não
  desloca layout porque a largura é reservada.
- `prefers-reduced-motion: reduce` desliga todos os loops com
  `animation: none`: nome, comando e saída aparecem prontos e parados.
- Lighthouse mobile após a mudança: Performance 100, Acessibilidade 100.
- O que segue valendo do ADR-0004: CSS-first, durações via tokens, respeito a
  `prefers-reduced-motion`. O ADR-0008 (cards sem reveal) segue valendo.
