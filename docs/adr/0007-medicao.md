# ADR-0007: Medição com Lighthouse antes/depois, Vercel Web Analytics e Speed Insights

- **Status:** Aceito, 2026-11-07

## Contexto
Sem medição não dá para saber se o redesign gerou mais contatos nem se piorou a performance.

## Decisão
- **Baseline de Lighthouse** (build de produção, home, 2026-11-07):

  | Perfil | Perf | A11y | BP | SEO | LCP | CLS | TBT |
  | --- | --- | --- | --- | --- | --- | --- | --- |
  | Mobile | 97 | 96 | 100 | 100 | 2,4 s | 0,018 | 0 ms |
  | Desktop | 100 | 96 | 100 | 100 | 0,6 s | 0,005 | 0 ms |

  Regra: o redesign não pode reduzir nenhuma dessas notas.
- **Vercel Web Analytics** no modo básico (pageviews e referrers, sem cookies). No plano Hobby não
  há eventos de clique; se o plano mudar para Pro, os eventos customizados entram nos CTAs.
- **Vercel Speed Insights** junto, para medir Core Web Vitals de visitantes reais por página.
- **Integração por script, não por pacote npm:** `@vercel/analytics` declara `@sveltejs/kit` como
  peer opcional e o npm passa a exigir Vite 8, que conflita com o Vite 6 do projeto. Os dois
  scripts oficiais (`/_vercel/insights/script.js` e `/_vercel/speed-insights/script.js`) entram
  em `Head.astro` só quando o build roda na Vercel (`VERCEL=1`), para não gerar 404 no dev e no
  preview local.

## Consequências
- Dois scripts pequenos de primeira parte, carregados com `defer`.
- Analytics e Speed Insights precisam ser ativados no painel do projeto na Vercel.
