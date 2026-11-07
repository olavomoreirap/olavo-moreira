# ADR-0002: Hierarquia de conversão da home e CTA de contato

- **Status:** Aceito, 2026-11-07

## Contexto
Objetivos do site, em ordem: (1) recrutadores e tech leads entendem em 5 s quem é o Olavo e clicam em
contato, LinkedIn ou GitHub; (2) leitura do blog e das trilhas; (3) visitas aos projetos.
A home antiga tinha "Ler Blog" como CTA primário e nenhum CTA de contato. Uma interface neutra não
direciona e perde conversão; a promessa precisa ser do tamanho da prova.

## Decisão
- **Hero:** "Backend Developer, Java & Spring Boot", uma linha de prova (Petize, BaaS para saúde,
  PIX, CCB) e o badge **"aberto a conversas"**, com texto neutro que não expõe o empregador.
- **CTA primário "Falar comigo"** (`mailto:`), com botão de copiar o e-mail ao lado. Secundários:
  LinkedIn e GitHub. Terciário: "Baixar CV", exibido só quando `CONTACT.cvHref` estiver definido.
- **Elemento-assinatura:** card-terminal `$ whoami` no hero, em HTML real (indexável e legível por
  leitor de tela).
- **Ordem da home:** Hero → Projetos em destaque → Trilhas + Últimos posts → CTA final `./contato.sh`.
- **Nav:** blog, trilhas, sobre, mais o botão "contato" (`/#contato`). "authors" sai da nav, mas a
  rota continua existindo.
- Os parágrafos sobre "desmistificar o Java" saem do hero e vão para o bloco do blog.

## Consequências
- O contato fica a um clique em qualquer página.
- O texto do hero precisa acompanhar mudanças de cargo (fonte única em `src/consts.ts`).
