# ADR-0005: Curadoria de projetos via `featured`

- **Status:** Aceito, 2026-11-07

## Contexto
Os projetos em destaque eram filtrados pela tag `SaaS`, misturando classificação com curadoria. Isso
quebraria ao criar um projeto de destaque que não fosse SaaS.

## Decisão
O schema de `projects` ganha `featured: boolean` (padrão `false`) e `order: number` (opcional). A home
e o About usam `featured` e ordenam por `order`. As tags voltam a ser só classificação.

## Consequências
- Destacar ou remover um projeto passa a ser uma linha no frontmatter.
- Posts e URLs não mudam.
