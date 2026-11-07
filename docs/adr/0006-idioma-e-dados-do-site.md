# ADR-0006: Interface em pt-BR e dados canônicos do site

- **Status:** Aceito, 2026-11-07

## Contexto
A UI misturava inglês e português ("Latest Logs", "View all", "authors") com conteúdo em português.
Restos do template `astro-erudite` ficaram na configuração: `site`/`href` apontando para
`astro-erudite.vercel.app`, `author: 'jktrn'` e `locale: 'en-US'`. Isso afetava canonical, RSS,
sitemap e `lang`. O handle do GitHub era inconsistente (`olavomoreirap` × `zenonxd`).

## Decisão
- Todos os rótulos da UI em pt-BR, `lang="pt-BR"` e datas formatadas em pt-BR.
- `site` = `https://olavo-moreira.vercel.app`; `author` = Olavo Moreira.
- GitHub canônico: `olavomoreirap`. O Twitter sai dos links sociais.
- Os dados de contato vivem num único objeto `CONTACT` em `src/consts.ts`.

## Consequências
- SEO e compartilhamento passam a apontar para o domínio certo.
- URLs e conteúdo dos posts não mudam.
